import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();

export async function GET(req) {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });
  }

  return NextResponse.json(users);
}

////////////////////// create api
export async function POST(req) {
  const { name, email, password, about, profileURL } = await req.json();
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to created user !!",
        satus: false,
      },
      {
        status: 500,
      }
    );
  }
}
