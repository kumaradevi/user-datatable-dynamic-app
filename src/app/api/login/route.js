import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req){
    try{
        const body=await req.json();
        const {username,password,decodedPassword}=body;
        console.log(decodedPassword)
        
        const validPassword=await bcrypt.compare(password,decodedPassword);
        if(!validPassword){
           return NextResponse.json({message:"Incorrect password"},{status:400})
        }
        if(username && validPassword){
            return NextResponse.json({message:"logged in successfully",username},{status:200})
        }
        
    }
   catch(err){
    return NextResponse.json({message:err.message},{status:400})
   }

}