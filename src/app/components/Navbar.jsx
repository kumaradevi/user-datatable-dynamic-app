"use client"
import React, { useState } from "react";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";
import { useSelector } from "react-redux";
const Navbar = () => {
    const [isShow,setIsShow]=useState(false);
    const user=useSelector(state=>state.user.user)
  return (
    <div className="bg-blue-200 text-white  w-[85%] h-[80px] fixed ml-[15%] z-20">
      <div className="flex justify-between items-center h-full mx-20">
        {/* logo */}
        <div>
          <Image src={"/logo.png"} width={50} height={50} alt="logo"/>
        </div>
        <div className="flex gap-4 relative">
            <p>{user ? user.username :"username"}</p>
          <Image src={"/user.png"} width={30} height={30}  onClick={()=>setIsShow(!isShow)} alt="user"/>
          
        </div>
        {isShow && <div className="absolute top-16 right-12 z-30">
            <DropdownMenu/>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
