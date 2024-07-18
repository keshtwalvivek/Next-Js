import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
connectDB();
export async function GET(req, { params }) {
  try {
    const { userId } = params;
    const user = await User.findById(userId).select("-password");

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({
      message: "user is not get",
      success: false,
    });
  }
}

export async function DELETE(req, { params }) {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });

    return NextResponse.json({
      message: "user deleted !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in  deleting user",
      success: false,
    });
  }
}

export async function PUT(req, { params }) {
  const { userId } = params;
  console.log("user id ->>>", userId);
  console.log("user ->>>", req.body);

  const { name, email, password, about, profileURL } = await req.json();
  try {
    const user = await User.findById(userId);

    (user.name = name),
      (user.email = email),
      (user.password = password),
      (user.about = about),
      (user.profileURL = profileURL);

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "failed to update user !!",
      success: false,
    });
  }
}
