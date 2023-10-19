import React from 'react'
import HamBurger from "../assets/hamburger/white.svg";
import HeaderTitle from "../mapping/navHeaderTitle"

const nav = () => {

  return (
    <div className='px-10 py-10 bg-green-200 text-white flex justify-between items-center top-0 right-0 left-0 z-10 bg-transparent'>
      <div className='flex gap-3 justify-center items-center'>
        <img src= {HamBurger} alt="" srcset="" className='w-8 cursor-pointer rotate-180 border-2 border-black p-2 bg-black' />
        <HeaderTitle />
      </div>
      <div className='flex md:justify-center'>
        <button className='text-sm bg-[#33CC9F] rounded-sm bg-opacity-80 text-white py-1 px-5 font-black pointer'>
          Login
        </button>
      </div>
    </div>
  );
}

export default nav