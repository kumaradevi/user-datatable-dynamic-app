"use client"
import { redirect } from "next/navigation";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";


export default function Home() {
 const [user,setuser]=useState(null)
  // if(!user){
  //   redirect('/login')
  // }
  return (
    <div className="w-full h-full relative">
   <div className="flex overflow-hidden" >
    <Sidebar/>
   <Navbar/>
   </div>
   <div className="overflow-auto  absolute top-[120px] left-[35%] ">
   <UserTable/>
   </div>
  
   </div>
  );
}
