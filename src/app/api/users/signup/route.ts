import connectDB from "@/dbConfig/dbConfig";
import {User} from "@/models/userModel";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

connectDB()


export async function POST(request:NextRequest) {
    try {

        const reqBody = await request.json()

        const {username, email, password} = reqBody

        if(!username || !email  || !password){
            return NextResponse.json({message:"all fields are required"},{status:400})
        }

        const existUser = await User.findOne(email)

        if(existUser){
            return NextResponse.json({message:"user already exist"},{status:400})
        }

        const hashPassword =await bcrypt.hash(password,10)

        const user = new User({
            username,
            email,
            password:hashPassword
        })

        const savedUser = await user.save()

        return NextResponse.json({
            message:"user registered successfully",
            status:201,
            savedUser
        })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }   
}