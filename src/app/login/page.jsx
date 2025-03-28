"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import bcrypt from "bcryptjs"
import axios from 'axios';

const Page = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const router=useRouter();


    const handleLogin=async()=>{
        try{
          if(!email || !password){
            toast.error("missing fields")
          }
          const user=localStorage.getItem("email");
          const hashedPassword=localStorage.getItem("password")
          console.log(email)
          if(user !== email || !hashedPassword){
            toast.error("User is not found! please Sign up ")
            return
          }
          const validPassword=await bcrypt.compare(password,hashedPassword);
          if(!validPassword){
            toast.error('invalid password');
            return
          }
          toast.success('logged in successfully')
         
          setTimeout(() => {
            router.push('/')
          }, 2000);
        }
        catch(err){

        }
    }

    
  return (
   <div className='flex justify-center items-center w-full h-[100vh]'>

    <div className='w-[600px] min-h-[300px] shadow-md rounded-lg p-6 flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-center'>Login</h3>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2'/>
        </div>
        <button className='bg-blue-500 text-white px-6 py-2 rounded-md' onClick={handleLogin}>Login</button>
        <p>Don't have an account? <Link href={'/signup'}><span className='text-blue-500'>Signup here</span></Link></p>
    </div>
    <Toaster/>
    </div>
  )
}

export default Page