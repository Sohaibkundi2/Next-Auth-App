import { connectDB } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";


connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: savedUser._id,
          username: savedUser.username,
          email: savedUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
