"use client"
import React, { useState } from "react";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";
const Navbar = () => {
    const [isShow,setIsShow]=useState(false);
  return (
    <div className="bg-blue-200 text-white  w-[85%] h-[80px]">
      <div className="flex justify-between items-center h-full mx-20">
        {/* logo */}
        <div>
          <Image src={"/logo.png"} width={50} height={50} />
        </div>
        <div className="flex gap-4 relative">
            <p>user name</p>
          <Image src={"/user.png"} width={30} height={30}  onClick={()=>setIsShow(!isShow)}/>
          
        </div>
        {isShow && <div className="absolute top-16 right-12">
            <DropdownMenu/>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
