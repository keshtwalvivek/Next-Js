import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  addedData: {
    type: Date,
    require: true,
    require: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    require: true,
  },
});

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", taskSchema);
