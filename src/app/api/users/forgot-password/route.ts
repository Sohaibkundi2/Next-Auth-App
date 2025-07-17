import { connectDB } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { sendEmail } from "@/helpers/mailer";
import { NextResponse } from "next/server";

connectDB();

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    await sendEmail({
      email: user.email,
      emailType: "RESET",
      userId: user._id,
    });

    return NextResponse.json({ message: "Reset email sent" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Server error" }, { status: 500 });
  }
}
