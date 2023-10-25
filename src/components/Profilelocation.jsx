import React from "react";
import location from '../assets/ProfileImg/location_on.png'

export default function Profilelocation () {
  return(
    <div className="flex  flex-row  align-center m-auto  ">
    <img src={location} alt='profile'className=""/>
    <p className=" text-[#000000]  text-[14px] w-[150px] rounded-[3px]">Sacramento,CA</p>
    </div>
  )  
}