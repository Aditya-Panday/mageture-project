import connectToMongo from "@/utils/db";
import PODCAST from "./models/podcast";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(req) {
  await connectToMongo();
  const { title, link, description, imgurl } = await req.json();

  try {
    if (!title || !description || !link || !imgurl) {
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 422, headers: corsHeaders }
      );
    }
    const newPodcast = new PODCAST({
      title,
      description,
      imgurl,
      link,
    });

    await newPodcast.save();

    return NextResponse.json(
      { message: "Podcast saved successfully" },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error saving podcast:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET(req) {
  await connectToMongo();

  try {
    const podcast = await PODCAST.find();
    return NextResponse.json(podcast, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("Error retrieving podcast:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function DELETE(req) {
  await connectToMongo();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "unauthorized" },
      { status: 400, headers: corsHeaders }
    );
  }

  try {
    const podcast = await PODCAST.findById(id);

    if (!podcast) {
      return NextResponse.json(
        { error: "Podcast not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    await PODCAST.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Podcast deleted successfully" },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error deleting podcast:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
