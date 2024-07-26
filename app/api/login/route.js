import connectToMongo from "@/utils/db";
import USERAUTH from "../signup/models/user";
import { NextResponse } from "next/server";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const key = process.env.SECRET_KEY;
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const encodePasswordWithKey = (password, key) => {
  const hash = crypto.createHmac("sha256", key);
  hash.update(password);
  return hash.digest("hex");
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(req) {
  await connectToMongo(); // Connect to MongoDB
  const { email, password } = await req.json();

  // Validate inputs
  try {
    if (!email || !password) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 422, headers: corsHeaders }
      );
    }

    // Find user by email
    const user = await USERAUTH.findOne({ email });

    // If user does not exist, return error
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 404, headers: corsHeaders }
      );
    }

    // Hash the provided password and compare with stored hashed password
    const hashedPassword = encodePasswordWithKey(password, key);
    if (hashedPassword !== user.password) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401, headers: corsHeaders }
      );
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id, Role: user.Role }, JWT_SECRET, {
      expiresIn: "2h",
    });

    // Return token and user information
    const { _id, name, Role } = user;
    return NextResponse.json(
      { token, user: { _id, name, Role } },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error verifying user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET(req) {
  await connectToMongo();
  try {
    const users = await USERAUTH.find({}, "_id name email Role");
    return NextResponse.json({ users }, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("Error verifying user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function DELETE(req) {
  await connectToMongo(); // Connect to MongoDB
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  // Check if id parameter is undefined
  if (!id) {
    return NextResponse.json(
      { error: "unauthorized" },
      { status: 400, headers: corsHeaders }
    );
  }
  try {
    // Check if user exists
    const user = await USERAUTH.findById(id);
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    // If user exists, delete it
    await USERAUTH.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
