import connectToMongo from "@/utils/db";
import USERAUTH from "@/signup/models/user";
import { NextResponse } from "next/server";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const key = "sy$K9btmosx$msak#@13sjbaj";

const encodePasswordWithKey = (password, key) => {
  const hash = crypto.createHmac("sha256", key);
  hash.update(password);
  return hash.digest("hex");
};

export async function POST(req) {
  await connectToMongo(); // Connect to MongoDB

  const { email, password } = await req.json();

  // Validate inputs
  if (!email || !password) {
    return NextResponse.json(
      { error: "Please fill all fields" },
      { status: 422 }
    );
  }

  try {
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
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    // Return token and user information
    const { _id, email } = user;
    return NextResponse.json({ token, user: { _id, email } }, { status: 200 });
  } catch (error) {
    console.error("Error verifying user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
