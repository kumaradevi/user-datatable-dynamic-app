import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Sidebar = () => {
   
  return (
    <div className='w-[15%] h-[100vh] border-r border-gray-400 p-6 '>
        <p className='text-2xl font-medium text-center'>Dashboard</p>
        <div>
            <Link href='/details'>
           
                <p className='mt-12 text-lg text-center'>Details Page</p>
                
           
            </Link>
            <div className='mt-12 flex flex-col justify-center items-center'>
            <Image src={'/user.png'} width={40} height={40} alt='logout'/> 
                <p className='text-lg font-medium mt-2'>user Name</p>
               
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar