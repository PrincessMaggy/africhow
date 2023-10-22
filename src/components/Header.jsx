import React from 'react'
import Hamburger from "../assets/Frame 578.png";

export default function Header() {
  return (
    <div className='flex justify-between mt-4 w-[358px] h-[38px] items-center'>
        <div className='flex gap-2 items-center'>
            <img src={Hamburger} className='w-[24px] h-[24px]'/>
            <p className="text-[25px] font-normal">Africhow</p>
        </div>
        <button className='w-[100px] py-[8px] text-[16px] bg-[#000F08] text-white text-center'>Get Started</button>
    </div>
  )
}
