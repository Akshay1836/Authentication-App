import User from "@/models/userModel";
import { config } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";


config();

export async function GET(request:NextRequest) {
        try {
                const data=await User.find({});
                if(!data){
                        return NextResponse.json({message:"data not found",data,success:false},{status:404})

                }
                return NextResponse.json({message:"data fetched",data,success:true},{status:200})
        } catch (error) {
                return NextResponse.json({message:error,success:false},{status:500})

        }
}