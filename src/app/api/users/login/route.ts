import { config } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


config();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const data = await User.findOne({ email });
    if (!data.email) {
      return NextResponse.json(
        { success: false, message: "User not found ,Please Login" },
        { status: 404 }
      );
    }
    const result = await bcryptjs.compare(password, data.password);
    if (!result) {
      return NextResponse.json(
        { success: false, message: "User not found ,Please Login" },
        { status: 404 }
      );
    }
    const token_Data = {
      id: data._id,
      name: data.username,
    };
    const token =await jwt.sign(token_Data, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    
    const response = NextResponse.json({
      success: "True",
      message: "Login successfull",
    });
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 404 }
    );
  }
}
