import connectToMongo from "@/utils/db";
import EVENTS from "./models/events";
import { NextResponse } from "next/server";
import setCorsHeaders from "@/app/middleware";

export async function POST(req, res) {
  if (setCorsHeaders(req, res)) {
    return;
  }
  await connectToMongo();
  const { videoUrl, title, description } = await req.json();

  try {
    if (!title || !description || !videoUrl) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 422 }
      );
    }
    const newEvent = new EVENTS({
      title,
      description,
      videoUrl,
    });
    await newEvent.save();

    return NextResponse.json(
      { message: "Events saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving events:", error);
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
    const events = await EVENTS.find();
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Error retrieving podcast:", error);
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
  await connectToMongo();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "unauthorized" }, { status: 400 });
  }

  try {
    const event = await EVENTS.findById(id);

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    await EVENTS.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Event deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
