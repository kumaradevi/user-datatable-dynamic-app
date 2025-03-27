"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import bcrypt from "bcryptjs"
import axios from 'axios';

const page = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [hasedPassword,setHashedPassword]=useState("")
    const [user,setUser]=useState("")
    const router=useRouter();

    // const handleLogin =async()=>{
    //     try{
    //         const user=localStorage.getItem("username");
    //         const userPassword=localStorage.getItem("password")
    //         const decodePassword=await bcrypt.compare(password,userPassword)
    //         if(user !==username && !decodePassword){
    //            toast.error('invalid credentials')
    //         }
    //         else{
    //             toast.success("logged in successfully")
    //             setTimeout(() => {
    //                 router.push('/')
    //             }, 2000);
    //         }
    
    //     }
    //     catch(err){
    //         console.log(err.message)
    //     }
       
    // }

    //  useEffect(()=>{
          
    //       console.log(decodedPassword)
    //  },[username])
    const handleLogin=async()=>{
    try{
      const decodedPassword=localStorage.getItem("password");
      const res=await axios.post('http://localhost:3000/api/login',{username,password,decodedPassword});
      toast.success(res.data.message)
      setUser(res.data.username);
      setTimeout(() => {
        router.push('/')
      }, 2000);
    }
    catch(err){
        console.log(err.message);
        toast.error("internal error")
    }
    
    }
  return (
   <div className='flex justify-center items-center w-full h-[100vh]'>

    <div className='w-[600px] min-h-[300px] shadow-md rounded-lg p-6 flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-center'>Login</h3>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='User Name' value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2'/>
        </div>
        <button className='bg-blue-500 text-white px-6 py-2 rounded-md' onClick={handleLogin}>Login</button>
        <p>Don't have an account? <Link href={'/signup'}><span className='text-blue-500'>Signup here</span></Link></p>
    </div>
    </div>
  )
}

export default page