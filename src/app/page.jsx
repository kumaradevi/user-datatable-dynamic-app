"use client"
import { redirect } from "next/navigation";
import { useState } from "react";
import Navbar from "./components/Navbar";


export default function Home() {
 const [user,setuser]=useState(null)
  // if(!user){
  //   redirect('/login')
  // }
  return (
   <div >
   <Navbar/>
    home
   </div>
  );
}
