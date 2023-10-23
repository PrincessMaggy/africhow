import React from "react";
import profileimg from '../assets/ProfileImg/profilelogo.png'

export default function Profileimg () {
  return(
    <div className="flex  flex-col  align-center m-auto  ">
    <img src={profileimg} alt='profile'className="w-[160px]"/>
    <p className=" text-[#000000]  text-[14px] w-[150px] rounded-[3px]">Alex's Diner</p>
    </div>
  )  
}