import connectToMongo from "@/utils/db";
import LEADS from "../leads/models/leads";
import { NextResponse } from "next/server";
import setCorsHeaders from "@/utils/helper";

export async function POST(req, res) {
  if (setCorsHeaders(req, res)) {
    return;
  }
  await connectToMongo();
  const { email, phone, fullname, message } = await req.json();

  try {
    if (!email || !phone || !fullname) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 422 }
      );
    }
    const newLead = new LEADS({
      email,
      phone,
      fullname,
      message,
    });

    // Save the lead to the database
    await newLead.save();

    return NextResponse.json(
      { message: "Lead saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving lead:", error);
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
  await connectToMongo(); // Connect to MongoDB

  try {
    const leads = await LEADS.find();
    return NextResponse.json(leads, { status: 200 });
  } catch (error) {
    console.error("Error retrieving leads:", error);
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

  if (!id) {
    return NextResponse.json({ error: "unauthorized" }, { status: 400 });
  }

  try {
    const lead = await LEADS.findById(id);

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    await LEADS.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Lead deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
