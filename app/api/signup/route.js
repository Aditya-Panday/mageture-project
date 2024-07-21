import connectToMongo from "@/utils/db";
import USERAUTH from "./models/user";
import { NextResponse } from "next/server";
import crypto from "crypto";
import setCorsHeaders from "@/utils/helper";

const key = process.env.SECRET_KEY;

const encodePasswordWithKey = (password, key) => {
  const hash = crypto.createHmac("sha256", key);
  hash.update(password);
  return hash.digest("hex");
};

export async function POST(req, res) {
  if (setCorsHeaders(req, res)) {
    return;
  }
  try {
    await connectToMongo(); // Connect to MongoDB

    const { name, email, password } = await req.json();
    // Validate inputs
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 422 }
      );
    }

    // Check if user already exists
    const existingUser = await USERAUTH.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 403 }
      );
    }

    // Hash the password
    const hashedPassword = encodePasswordWithKey(password, key);

    // Create new user document
    const newUser = new USERAUTH({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    // Respond with success message
    return NextResponse.json(
      { message: "Account created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
