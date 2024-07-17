import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    about: String,
    profileURL: String,
  },
  { timestamps: true }
);

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
