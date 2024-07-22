import { connectDB } from "@/helper/db";
import { getResponseMessage } from "@/helper/errorMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDB();
export async function GET(req) {
  try {
    const tasks = await Task.find();

    return NextResponse.json({
      tasks,
      success: true,
    });
  } catch (error) {
    return getResponseMessage("Error in getting data !!", 404, false);
  }
}

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
      createdTask,
      status: 201,
    });
  } catch (error) {
    return getResponseMessage("failed to  create data !!", 400, false);
  }
}
