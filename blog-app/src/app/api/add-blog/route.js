import connectToDB from "@/databases";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export default async function POST(req) {
  try {
    await connectToDB();

    const extractBlogData = await req.json();
    const { title, description } = extractBlogData;

    const { error } = AddNewBlog.validate({
      item,
      description,
    });

    if (error) {
      return NextResponse({
        succsess: false,
        message: error.details[0].message,
      });
    }
    const newlyCreatedBlogItem = Blog.create(extractBlogData);
    if (newlyCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "Blog added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong ! please try again",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! please try again",
    });
  }
}
