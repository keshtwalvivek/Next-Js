import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/helper/db";
connectDB();
export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const user = await User.findOne({
      email: email,
    });

    if (user == null) {
      throw new Error("user not found!!");
    }
    console.log("running");

    //  password check

    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("password not matched !!");
    }
    console.log("running ->>>>>");
    // token generate
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    // create nextResponse -- cookie
    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d ",
      httpOnly: true,
    });
    console.log("user data->>>", user);
    console.log("jwt token->>>>>>> ", token);

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
