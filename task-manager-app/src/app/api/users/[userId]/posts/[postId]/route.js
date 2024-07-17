import { NextResponse } from "next/server";

export function GET(req, { params }) {
  const { userId, postId } = params;
  console.log("user id : ", userId);
  console.log("post id ", postId);
  return NextResponse.json(params);
}
