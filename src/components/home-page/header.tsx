"use client"
import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { SheetSide } from './mobNav'
import { NavigationMenuDemo } from './navMenu'

const Header = () => {
  return (
   <header className='flex justify-between items-center w-full h-[60px] max-w-screen-2xl m-auto'>
    {/* left */}
    <div className='flex justify-center items-center'>
    <SheetSide/>
        <Link href="/" className = "text-3xl md:text-3xl font-extrabold font-integral pl-2"> SHOP.CO </Link>
    </div>
    {/* navbar */}
    <ul className='hidden md:block'>
        <li className='space-x-5 flex items-center'>
            <Link href={""}>
            <NavigationMenuDemo/>
            </Link>
            <Link href={"/shop"}>On Sale</Link>
            <Link href={""}>New Arrivals</Link>
            <Link href={""}>Brands</Link>
        </li>
    </ul>

{/* search input */}

{/* cart */}
<div className='flex items-center mr-7 space-x-5'>
<div className='hidden md:block'>
    <div className='flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0] '>
    <IoSearchOutline  className='text-xl ml-2'/>
    <input placeholder="Search For Products" className='w-full h-[40px] ml-2 outline-none rounded-[62px] bg-[#F0F0F0]' />
    </div>
</div>
<Link href={"/cart"}>
<IoCartOutline className='text-2xl cursor-pointer hover:text-gray-500'/>
</Link>
<FaRegUserCircle className='text-2xl cursor-pointer hover:text-gray-500'/>
    
</div>
   </header>
  )
}

export default Header