"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import bcrypt from "bcryptjs";
import axios from 'axios';

const Page = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [error,setError]=useState("")
    const router=useRouter();
    
    const handleSignup=async()=>{
      try{
        if(password !== confirmPassword){
            toast.error("password do not match")
            return
        }
          const res=await axios.post('http://localhost:3000/api/signup',{username,password});
          localStorage.setItem("username",res.data.username);
          localStorage.setItem("password",res.data.password)
          toast.success("signed up successfully");
          setTimeout(()=>{
           router.push('/login')
          },2000)
          console.log(res);

      }
      catch(err){
        console.log(err.message)
      }
    }
  return (
   <div className='flex justify-center items-center w-full h-[100vh]'>

    <div className='w-[600px] min-h-[300px] shadow-md rounded-lg p-6 flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-center'>Signup</h3>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">User Name</label>
            <input type="text" placeholder='User Name' value={username} onChange={(e)=>setUsername(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='User Name' value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2'/>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder='confirmPassword' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2'/>
        </div>
        <button className='bg-blue-500 text-white px-6 py-2 rounded-md' onClick={handleSignup}>Signup</button>
        <p>Already have an account? <Link href={'/login'}><span className='text-blue-500'>Login here</span></Link></p>
    </div>
    <Toaster/>
    </div>
  )
}

export default Page