import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET() {}

export async function POST(req) {
  const { title, content, userId } = await req.json();
  try {
    const task = new Task({
      title,
      content,
      userId,
    });

    const createdTask = await task.save();

    return NextResponse.json({
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "",
      success: false,
    });
  }
}
