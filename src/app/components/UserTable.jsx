"use client"
import React, { useEffect, useState } from 'react';
import data from "../utils/data";
import toast from 'react-hot-toast';

const UserTable = () => {
    const [rows,setRows]=useState(5);
    const [page,setPage]=useState(1);
    const [query,setQuery]=useState("");
    const [userData,setUserData]=useState(data)
   console.log(rows,"rows")
    
   let startIndex=(page-1)*rows;
   let endIndex=startIndex+rows;
   const totalPages=Math.ceil(userData.length/rows)

   const filteredData=query?userData.filter((d)=>{
    return d.name.toLowerCase().includes(query.toLowerCase());
   }): (rows || page)? userData.slice(startIndex,endIndex).map((d)=>{ return d}) : userData;


   const handleEdit=(id)=>{

   }

   const handleDelete=(id)=>{
    console.log(id)
    setUserData((prev)=>prev.filter((d)=>d.id !== id))
   }
   const handlePrevious=()=>{
      setPage(prev=>prev>1 ? prev-1 :prev)
   }

   const handleNext=()=>{
      setPage(prev=>prev<totalPages ? prev+1 : prev)
   }
  return (
    <div className='flex  items-center w-full flex-col gap-12 mt-12'>
        <div className='border border-gray-500 px-5 py-2 w-[300px]'>
            <input type="search"  placeholder='search here...' className='outline-0' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>
    <div className='w-[700px] min-h-[200px] shadow-md overflow-scroll' >
        <table className='w-[100%] h-[100%] border-collapse table-fixed'>
        <thead className=''>
          <tr className='bg-blue-100'>
            <th className='p-2 text-left'>id</th>
            <th className='p-2 text-left'>Name</th>
            <th className='p-2 text-left'>Age</th>
            <th className='p-2 w-[200px] '>Actions</th>
    
          </tr>
        </thead>
        <tbody className=''>
            {filteredData.map((d,index)=>(
                <tr key={d.id} className={index%2==0 ? 'bg-gray-100' : 'bg-white'}>
            <td className='p-2 '>{d.id}</td>
            <td className='p-2'>{d.name}</td>
            <td className='p-2'>{d.age}</td>
            <td className='p-2 flex justify-center gap-6'>
                <button className='bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-700 cursor-pointer transition'>Edit</button>
           <button className='bg-red-500 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-red-700 transition' onClick={()=>handleDelete(d.id)}>Delete</button>
           </td>
          </tr>
            ))}
          
        </tbody>
      </table>

      
    </div>
    <div className='flex gap-3 mb-5'>
        <p>rows per page</p>
        <select name="" id="" onChange={(e)=>{setRows(Number(e.target.value)); setPage(1)}}>
            <option value="5">5</option>
            <option value="10">10</option>
             <option value="15">15</option>
            <option value="20">20</option>
        </select>
        <p>page</p>
        <button className='bg-blue-500 text-white px-3 py-1 cursor-pointer disabled:bg-gray-300' onClick={handlePrevious} disabled={page==1}>prev</button>
        <button className='bg-blue-500 text-white px-3 py-1 cursor-pointer'>{page}</button>
        <button className='bg-blue-500 text-white px-3 py-1 cursor-pointer disabled:bg-gray-300' onClick={handleNext} disabled={page>=totalPages} >next</button>
      </div>
    </div>
  )
}

export default UserTable