import React from "react";

import checkbox from '../assets/ProfileImg/check_box.png'
import line from '../assets/ProfileImg/Line.png'



export default function Workhours() {
return(
  <div className="flex flex-col align-center justify-center mt-2  ">
    <div className="flex flex-row align-center justify-center  m-auto gap-2">
    <img src={checkbox} className="h-[30px] mt-1"/>
    <h3 className="mt-2 text-[20px] font-normal">MON</h3>
    <p className="border w-[100px]  h-[45px] ml-5">9:00am </p>
    <img src={line} className="h-[3px] w-[20px] mt-6"/>
    <p className="border w-[100px] h-[45px]">10:00pm</p>
  </div>
  
  <div className="flex flex-row align-center justify-center  m-4 gap-3">
    <img src={checkbox} className="h-[30px] mt-1 mr-1"/>
    <h3 className="mt-2 text-[20px] font-normal">TUE</h3>
    <p className="border w-[100px]  h-[45px] ml-5">9:00am </p>
    <img src={line} className="h-[3px] w-[20px] mt-6"/>
    <p className="border w-[100px] h-[45px]">10:00pm</p>
  </div>

  <div className="flex flex-row align-center justify-center  m-4 gap-3">
    <img src={checkbox} className="h-[30px] mt-1"/>
    <h3 className="mt-2 text-[20px] font-normal">WED</h3>
    <p className="border w-[100px]  h-[45px] ml-5">9:00am </p>
    <img src={line} className="h-[3px] w-[20px] mt-6"/>
    <p className="border w-[100px] h-[45px]">10:00pm</p>
  </div>

  <div className="flex flex-row align-center justify-center  m-5 gap-3">
    <img src={checkbox} className="h-[30px] mt-1"/>
    <h3 className="mt-2 text-[20px] font-normal">THU</h3>
    <p className="border w-[100px]  h-[45px] ml-5">9:00am </p>
    <img src={line} className="h-[3px] w-[20px] mt-6"/>
    <p className="border w-[100px] h-[45px]">10:00pm</p>
  </div>

  <div className="flex flex-row align-center justify-center  m-5 gap-3">
    <img src={checkbox} className="h-[30px] mt-1 mr-1"/>
    <h3 className="mt-2 text-[20px] font-normal">FRI</h3>
    <p className="border w-[100px]  h-[45px] ml-5">9:00am </p>
    <img src={line} className="h-[3px] w-[20px] mt-6"/>
    <p className="border w-[100px] h-[45px]">10:00pm</p>
  </div>

  <div className="flex flex-row align-center justify-center  m-5 gap-3">
    <img src={checkbox} className="h-[30px] mt-1"/>
    <h3 className="mt-2 text-[20px] font-normal">SAT</h3>
    <p className="border w-[100px]  h-[45px] ml-5">9:00am </p>
    <img src={line} className="h-[3px] w-[20px] mt-6"/>
    <p className="border w-[100px] h-[45px]">10:00pm</p>
  </div>

  <div className="flex flex-row align-center justify-center  m-5 gap-3">
    <img src={checkbox} className="h-[30px] mt-1"/>
    <h3 className="mt-2 text-[20px] font-normal">SUN</h3>
    <p className="border w-[100px]  h-[45px] ml-5">9:00am </p>
    <img src={line} className="h-[3px] w-[20px] mt-6"/>
    <p className="border w-[100px] h-[45px]">10:00pm</p>
  </div>
  </div>
)
    
    
      

}