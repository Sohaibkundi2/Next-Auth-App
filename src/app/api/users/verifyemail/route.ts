import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import { connectDB } from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;

    const user = await User.findOne({
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Token expired or invalid" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(token, user.verifyToken);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    user.isVerfied = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
