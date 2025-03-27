"use client"
import { redirect } from "next/navigation";
import { useState } from "react";


export default function Home() {
 const [user,setuser]=useState(null)
  if(!user){
    redirect('/login')
  }
  return (
   <div>
  
    home
   </div>
  );
}
