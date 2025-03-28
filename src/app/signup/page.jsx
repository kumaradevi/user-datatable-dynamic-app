"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import bcrypt from "bcryptjs";
import {useDispatch, useSelector} from "react-redux"
import { setAuthUser } from '../utils/userSlice';

const Page = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
   
    const router=useRouter();
    const dispatch=useDispatch()
   const authUser=useSelector((state)=>state.user.user)
    const handleSignup=async()=>{
        try{
            if(!email || !username || !password || !confirmPassword){
                toast.error("missing fields")
                return
            }
            if(password !== confirmPassword){
                toast.error("mismatched password")
                return
            }
            const hashedPassword=await bcrypt.hash(password,10);
            const newUser={username,email,password:hashedPassword}
            localStorage.setItem("username",username);
            localStorage.setItem("email",email);
            localStorage.setItem("password",hashedPassword);
          
            
            dispatch(setAuthUser(newUser));
          
            toast.success('signed up successfully');
            setTimeout(() => {
                router.push('/login')
            }, 2000);
            
        }
        catch(err){
           toast.error("internal error")
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