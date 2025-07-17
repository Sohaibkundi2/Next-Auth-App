import { connectDB } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

connectDB();

export async function POST(request: Request) {
  try {
    const { token, newPassword } = await request.json();

    if (!token || !newPassword) {
      return NextResponse.json(
        { message: "Token and new password are required" },
        { status: 400 }
      );
    }

    // 1. Find user with non-expired forgotPasswordToken
    const user = await User.findOne({
      forgotPasswordToken: { $ne: null },
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // 2. Compare plain token with hashed token
    const isTokenValid = await bcrypt.compare(token, user.forgotPasswordToken);

    if (!isTokenValid) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // 3. Hash new password and save
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    // 4. Clear the reset token and expiry
    user.forgotPasswordToken = null;
    user.forgotPasswordTokenExpiry = null;

    await user.save();

    return NextResponse.json({ message: "Password reset successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
