"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
  return (
   <div className='flex justify-center items-center w-full h-[100vh]'>

    <div className='w-[600px] min-h-[300px] shadow-md rounded-lg p-6 flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-center'>Login</h3>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">User Name</label>
            <input type="text" placeholder='User Name' value={username} onChange={(e)=>setUsername(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2'/>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder='confirmPassword' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='border border-gray-400 rounded-lg px-4 py-2'/>
        </div>
        <button className='bg-blue-500 text-white px-6 py-2 rounded-md'>Signup</button>
        <p>Already have an account? <Link href={'/login'}><span className='text-blue-500'>Login here</span></Link></p>
    </div>
    </div>
  )
}

export default page