import User from "@/models/userModels";
import { connect } from "@/Db/db";
import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/utils/getTokenData";

connect();

export async function POST(request: NextRequest) { 
    const userId = await getTokenData(request);
    console.log(userId)
    const user = await User.findOne({ _id: userId }).select("-password")
    
    return NextResponse.json({
        message: "User found",
        data: user
    })
}
