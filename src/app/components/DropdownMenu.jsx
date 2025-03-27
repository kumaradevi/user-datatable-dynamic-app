"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const DropdownMenu = () => {
    const [user,setUser]=useState(null);
    const router=useRouter();
    
   
    useEffect(()=>{
       const storedUser= localStorage.getItem("username");
        if(storedUser){
            setUser(storedUser)
        }
    },[])

    const handleLogout=()=>{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
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
    <div className='text-gray-800 rounded-lg shadow-md w-[200px] z-10 '>
      <div className='flex flex-col  justify-center'>
      <div className='p-2'>
      <p className='text-center font-medium text-xl'>user name</p>
      <p className='text-gray-600 text-center '>user email</p>
      </div>
        <button className='hover:bg-gray-300 p-2 cursor-pointer' onClick={handleLogout}>logout</button>
        <button className='hover:bg-gray-300 p-2 cursor-pointer' onClick={handleDelete}>delete an account</button>
      </div>
    </div>
  )
}

export default DropdownMenu