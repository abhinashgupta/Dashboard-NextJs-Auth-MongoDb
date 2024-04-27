import User from "@/models/userModels";
import { connect } from "@/Db/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendMail } from "@/utils/mailsend";

connect();

export async function POST(request: NextRequest){
    try {
        const reqbody = await request.json()
        const { token } = reqbody
        console.log(token)

        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });
        
        if (!user) {
        return NextResponse.json({ error:"Invalid Token" }, { status: 400 });  
        }
        console.log(user)

        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        await user.save()

        return NextResponse.json(
          { message: "Email verificaton succesfully", success: true },
          { status: 500 }
        );

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}