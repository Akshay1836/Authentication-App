import { config } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from "bcryptjs"

config();

export async function POST(request:NextRequest){
        try {
                const reqBody=await request.json();
                const {email,password}=reqBody;
                const data=await User.findOne({email});
                if(!data.email){
                        return NextResponse.json({success:false,message:"User not found ,Please Login"},{status:404})
                }
                const result= await bcryptjs.compare(password,data.password);
                if(!result){
                        return NextResponse.json({success:false,message:"User not found ,Please Login"},{status:404})

                }
                return NextResponse.json({success:true,message:" Login succesfull"},{status:200})

        } catch (error) {
                return NextResponse.json({success:false,message:error},{status:404})

        }
}