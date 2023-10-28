import React from "react";
import navicon from "../assets/ProfileImg/Frame.png"


export default function Profilehead () {
  return(
   <div>
        <div className='flex gap-3 p-2 items-center'>
          <img src={navicon} alt="icon" className="w-[25px]"></img>
            <p className="text-[25px] font-normal">Profile</p>
        </div>
    </div>
  )  
}