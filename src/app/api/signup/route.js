import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST (req){
    try{
        const body=await req.json();
        const {username,password}=body;
        if(!username || !password){
            return NextResponse.json({message:"missing credetials"},{status:400})
        }
        const hashedPassword=await bcrypt.hash(password,10);
        return NextResponse.json({message:"signup successfully",username,password:hashedPassword},{status:200})
    }
    catch(err){
        console.error(err.message)
        return NextResponse.json({error:"Internal server error"},{status:500})
    }

}