import connectToMongo from "@/utils/db";
import USERAUTH from "../signup/models/user";
import { NextResponse } from "next/server";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import setCorsHeaders from "@/utils/helper";

const key = process.env.SECRET_KEY;
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const encodePasswordWithKey = (password, key) => {
  const hash = crypto.createHmac("sha256", key);
  hash.update(password);
  return hash.digest("hex");
};

export async function POST(req, res) {
  if (setCorsHeaders(req, res)) {
    return;
  }

  await connectToMongo(); // Connect to MongoDB
  const { email, password } = await req.json();

  // Validate inputs

  try {
    if (!email || !password) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 422 }
      );
    }

    // Find user by email
    const user = await USERAUTH.findOne({ email });

    // If user does not exist, return error
    if (!user) {
      return NextResponse.json({ error: "Invalid email" }, { status: 404 });
    }

    // Hash the provided password and compare with stored hashed password
    const hashedPassword = encodePasswordWithKey(password, key);
    if (hashedPassword !== user.password) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id, Role: user.Role }, JWT_SECRET, {
      expiresIn: "2h",
    });

    // Return token and user information
    const { _id, name, Role } = user;
    return NextResponse.json(
      { token, user: { _id, name, Role } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req, res) {
  if (setCorsHeaders(req, res)) {
    return;
  }
  await connectToMongo();
  try {
    const users = await USERAUTH.find({}, "_id name email Role");
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Error verifying user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, res) {
  if (setCorsHeaders(req, res)) {
    return;
  }
  await connectToMongo(); // Connect to MongoDB
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  // Check if id parameter is undefined
  if (!id) {
    return NextResponse.json({ error: "unauthorized" }, { status: 400 });
  }
  try {
    // Check if user exists
    const user = await USERAUTH.findById(id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // If user exists, delete it
    await USERAUTH.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
