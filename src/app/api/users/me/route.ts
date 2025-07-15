import { getDataFronToken } from "@/helpers/getDataFromToken";
import { User } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
    try {

        const userId = await getDataFronToken(request)

        const user = await User.findById(userId).select("-password")

        return NextResponse.json({
            message:"user found",
            data:user
        })
        
    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        }, {status:400})
    }
}
