import { getResponseMessage } from "@/helper/errorMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

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

// export async function PUT(req, { params }) {
//   const { taskId } = params;
//   const { title, content, status } = await req.json();
//   try {
//     const taskUpdate = await Task.findByIdAndUpdate(taskId);

//     (taskUpdate.title = title),
//       (taskUpdate.content = content),
//       (taskUpdate.status = status);

//     const updatedTask = await taskUpdate.save();
//     return NextResponse.json({
//       updatedTask,
//       success: false,
//     });
//   } catch (error) {
//     console.log(error);
//     return getResponseMessage("failed to update data", 400, false);
//   }
// }
export async function PUT(req, { params }) {
  const { taskId } = params;
  const { title, content, status } = await req.json();
  try {
    const taskUpdate = await Task.findById(taskId); // Fetch the task first

    if (!taskUpdate) {
      return getResponseMessage("Task not found", 404, false);
    }

    taskUpdate.title = title;
    taskUpdate.content = content;
    taskUpdate.status = status;

    const updatedTask = await taskUpdate.save();
    return NextResponse.json({
      updatedTask,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to update data", 400, false);
  }
}

export async function DELETE() {}
