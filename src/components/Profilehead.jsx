import React from "react";
import Hamimage from "../assets/icons/menu.png"

export default function Profilehead () {
  return(
   <div>
        <div className='flex gap-3 p-2 items-center'>
            <img src={Hamimage} className='w-[24px] h-[24px]'/>
            <p className="text-[25px] font-normal">Profile</p>
        </div>
    </div>
  )  
}