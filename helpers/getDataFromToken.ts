import { NextRequest } from "next/server"
import  jwt  from 'jsonwebtoken';

export async function getDataFronToken(request:NextRequest) {
    try {

        const encodedToken = request.cookies.get('token')?.value || ''

        const decodedToken:any = jwt.verify(encodedToken, process.env.ACCESS_TOKEN_SECRET!)

        return decodedToken.tokenData.id;
    } catch (error: any) {
        throw new Error(error.message)
    }
}