import { getResponseMessage } from "@/helper/errorMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { userId } = params;
  try {
    const tasks = await Task.find({ userId: userId });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage.json("failed to get task", 404, false);
  }
}
