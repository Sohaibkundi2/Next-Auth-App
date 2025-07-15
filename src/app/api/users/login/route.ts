import { connectDB } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

connectDB()

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()

        const { email, password } = reqBody

        if (!email || !password) {
            return NextResponse.json({
                message: "all fields are required"
            }, {
                status: 400
            })
        }
        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({
                message: "user does not exist"
            }, {
                status: 400
            })
        }

        const correctPassword = await bcrypt.compare(password, user.password)

        if (!correctPassword) {
            return NextResponse.json({
                message: "password is incorrect"
            }, {
                status: 401
            })
        }

        const tokenData = {
            id: user._id,
            email: user.email
        }

        const token = await jwt.sign(
            {
                tokenData
            },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: "1d" }
        )

        const response = NextResponse.json({
            message: "user logged in successfully",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response
    } catch (error: any) {
        console.error("Login error:", error.message)
        return NextResponse.json({
            message: "Login failed",
        }, { status: 500 })
    }
}