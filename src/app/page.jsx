"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import { useSelector } from "react-redux";


export default function Home() {

 const user=useSelector(state=>state.user.user);
 console.log(user)
 const router=useRouter();

  useEffect(()=>{
    if(user === undefined) return;
    if(!user || Object.keys(user).length === 0){
      router.push('/login')
     }
  },[user])
  
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
