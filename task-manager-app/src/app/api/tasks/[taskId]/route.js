import { connectDB } from "@/helper/db";
import { getResponseMessage } from "@/helper/errorMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDB();
export async function GET(req, { params }) {
  const { taskId } = params;

  try {
    const taskData = await Task.findById(taskId);
    return NextResponse.json({
      taskData,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return getResponseMessage("failed to get user data!!", 404, false);
  }
}

export async function PUT(req, { params }) {
  try {
    const { taskId } = params;
    const { title, content, status } = await req.json();
    const taskUpdate = await Task.findByIdAndUpdate(taskId);

    (taskUpdate.title = title),
      (taskUpdate.content = content),
      (taskUpdate.status = status);

    const updatedTask = await taskUpdate.save();
    return NextResponse.json({
      updatedTask,
      success: false,
    });
  } catch (error) {
    console.log(error);
    return getResponseMessage("failed to update data", 400, false);
  }
}

export async function DELETE(req, { params }) {
  try {
    const { taskId } = params;
    const deleteData = await Task.findByIdAndDelete(taskId);

    return getResponseMessage("collection deleted successfully !!", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("failed to delete !!");
  }
}
