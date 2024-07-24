// app/api/middleware/corsMiddleware.js

import { NextResponse } from "next/server";

export function corsMiddleware(req) {
  const res = NextResponse.next();

  
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 200 });
  }

  return res;
}
