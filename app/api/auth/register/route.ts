import { connectDB, userModel } from "@/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const parse = ReqisterBody.safeParse(body);

  if (!parse.success) {
    return NextResponse.json(
      { error: "Parse failed!", zod: parse.error },
      {
        status: 400,
      },
    );
  }

  try {
    connectDB();

    const isExist = await userModel.findOne({
      $or: [{ email: parse.data.email }, { username: parse.data.username }],
    });

    if (isExist) {
      return NextResponse.json(
        {
          error: "User with that email or username already exists",
        },
        {
          status: 400,
        },
      );
    }

    const hashedPassword = await bcrypt.hash(parse.data.password, 10);
    const user = await userModel.create({
      id: crypto.randomUUID(),
      ...parse.data,
      password: hashedPassword,
    });

    return NextResponse.json(user, {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user", error);
    return NextResponse.json(
      { error: "An error occurred while creating the user" },
      {
        status: 500,
      },
    );
  }

  return NextResponse.json(body);
};

const ReqisterBody = z.object({
  displayName: z.string().min(5).max(32),
  email: z.string().email(),
  username: z.string().min(3).max(16),
  password: z.string().min(8).max(32),
});
