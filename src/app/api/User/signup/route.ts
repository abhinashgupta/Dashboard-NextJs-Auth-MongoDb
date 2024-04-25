import User from "@/models/userModels";
import { connect } from "@/Db/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcrypt";
import { sendMail } from "@/utils/mailsend";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = new user({
      username,
      email,
      password: hashPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    //Send verification Email
      await sendMail({ email, emailType: "Verify", userId: savedUser._id });
      
      return NextResponse.json({
          message: "User registered successfully",
          success: true, 
          savedUser
      })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
