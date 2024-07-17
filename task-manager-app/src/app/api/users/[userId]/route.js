import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { userId } = params;
    const user = await User.findById(userId);

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
  try {
    const { userId } = params;
  } catch (error) {
    return NextResponse.json({
      message: "",
      success: false,
    });
  }
}
