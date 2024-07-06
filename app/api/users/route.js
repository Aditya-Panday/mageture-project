// pages/api/users/signup.js
import dbConnect from "@/utils/db";
import USERAUTH from "./models/userAuth";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  const { email, password, home, commonsetting, banner, pages, blogs, leads } =
    await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Please enter email and password" },
      { status: 422 }
    );
  }

  try {
    const existingUser = await USERAUTH.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new USERAUTH({
      email,
      password: hashedPassword,
      home,
      commonsetting,
      banner,
      pages,
      blogs,
      leads,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "Registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
