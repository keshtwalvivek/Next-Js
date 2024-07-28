"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { addTask } from "@/services/taskService";

export default function AddTask() {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "669cea3d77e382627122f1d6",
  });

  const handleAddTask = async (e) => {
    e.preventDefault();
    console.log(task);
    try {
      console.log("running");
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !!", {
        position: "top-center",
      });
      console.log("Your task is added !!");
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      console.log("Task not added !!");
      toast.error("Task not added !!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-6 col-start-4 p-5 shadow-sm">
        <div className="my-8 flex justify-center">
          <img src="./login.svg" style={{ width: "50%" }} />
        </div>
        <h1 className="text-3xl">Add Task component</h1>
        <form action="#!" onSubmit={handleAddTask}>
          {/* task title */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-900 focus:ring-gray"
              id="task_title"
              placeholder="add task..."
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          {/* task comment */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-2 rounded-lg bg-gray-900 focus:ring-gray"
              id="task_content"
              placeholder="add comment..."
              rows={5}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-2 rounded-lg bg-gray-900 focus:ring-gray"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="">----Select Status---</option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div className="mt-4 flex justify-around">
            <button className="bg-blue-600 py-2 px-3 rounded-lg">
              Add Task
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
