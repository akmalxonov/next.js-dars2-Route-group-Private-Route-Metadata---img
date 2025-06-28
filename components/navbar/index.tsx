"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const  router= useRouter()
    return (
        <div className='bg-black flex text-white items-center justify-center gap-5 py-4 w-[90%] m-auto'>
            <h3 className='cursor-pointer' onClick={()=>router.push("/")}>Home</h3>
            <h3 className='cursor-pointer' onClick={()=>router.push("/about")}>About</h3>
            <h3 className='cursor-pointer' onClick={()=>router.push("/contact")}>Contact</h3>
        </div>
    );
}

export default Navbar;
