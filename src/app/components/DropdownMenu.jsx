"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
const DropdownMenu = () => {
    const [user,setUser]=useState(null);
    const router=useRouter();
    const authUser=useSelector(state=>state.user.user)
    
   
    useEffect(()=>{
       const storedUser= localStorage.getItem("username");
        if(storedUser){
            setUser(storedUser)
        }
    },[])

    const handleLogout=()=>{
        localStorage.removeItem("username");
        toast.success("logged out successfully")
        setTimeout(() => {
            router.push('/login')
        }, 2000);
       
    }

    const handleDelete=()=>{
        const confirmed=window.confirm("Are you sure to delete an account?")
        if(confirmed){
            localStorage.clear();
            setUser(null);
            toast.success('account is deleted successfully!');
            setTimeout(() => {
                router.push('/signup')
            }, 2000);
          
        }
    }
  return (
    <div className='text-gray-800 rounded-lg shadow-md w-[200px] '>
      <div className='flex flex-col  justify-center'>
      <div className='p-2'>
      <p className='text-center font-medium text-xl'>{authUser?.username}</p>
      <p className='text-gray-600 text-center '>{authUser?.email}</p>
      </div>
        <button className='hover:bg-blue-200 p-2 cursor-pointer flex items-center justify-center gap-2 ' onClick={handleLogout}> <IoLogOutOutline size={20} className='text-blue-700'/>logout</button>
        <button className='hover:bg-red-200 p-2 cursor-pointer flex items-center gap-2 justify-center rounded-bl-lg rounded-br-lg' onClick={handleDelete} ><MdDelete size={20} className='text-red-700'/>Delete an account</button>
      </div>
      <Toaster/>
    </div>
  )
}

export default DropdownMenu