import React, { useState } from "react";




export default function Saveprofile() {
  
  return (
  <>
    <div className="grid gap-3 w-[300px]  relative">
      <div className="grid items-end">
        <form className="grid gap-3" >
          <div className="grid gap-2">
          <label className="label text-sm flex gap-2 mt-3">
            First name </label>
            <input
              type="text"
              id="fname"
              placeholder="Michael"
                required="Required"
              autoComplete="on"
              className="input w-[80px] h-[30px]"
            />
          </div>
          
          <div className="grid gap-2">
          <label className="label text-sm flex gap-2">
            Last Name </label>
            <input
              type="text"
              id="Lname"
              placeholder="Ibrahim"
                required= "Required"
                autoComplete="on"
              className="input w-[80px] h-[30px]"
            />
          </div>
          
          <div className="grid gap-2">
          <label className="label text-sm flex gap-2">
            Business name </label>
            <input
              type="text"
              id="Bname"
              placeholder="Alex's Diner"
                required= "Required"
              autoComplete="on"
              className="input w-[80px] h-[30px]"
            />
          </div>

          <div className="grid gap-2">
          <label className="label text-sm flex gap-2">
            Business address </label>
            <input
              type="text"
              id="Baddress"
              placeholder="1234 N.Compass Way"
                required= "Required"
              autoComplete="on"
              className="input w-[80px] h-[30px]"
            />
          </div>
          
          <div className="grid gap-2">
          <label className="label text-sm flex gap-2">
            Business email </label>
            <input
              type="email"
              id="email"
              placeholder="Dave@alexdiner.com"
                required= "Required"
              autoComplete="on"
              className="input w-[80px] h-[30px]"
            />
          </div>

          <div className="grid gap-1">
          <label className="label text-sm flex gap-1">
           Comfirm business email </label>
            <input
              type="email"
              id="Cemail"
              placeholder="Dave@alexdiner.com"
                required= "Required"
              autoComplete="on"
              className="input w-[80px] h-[30px]"
            />
          </div>

          <div className="grid gap-1">
          <label className="label text-sm flex gap-1">
           Business phone number  </label>
            <input
              type="number"
              id="number"
              placeholder="+1(916) 555-5555"
                required= "Required"
              autoComplete="on"
              className="input w-[80px] h-[30px]"
            />
          </div>
          <div className="grid gap-1">
          <label className="label text-sm flex gap-1">
            Hours of Availability
             </label>
            <input
              type="text"
              id="Hv"
              placeholder="Monday-Sat 9:00-10:00pm"
                required= "Required"
                autoComplete="on"
              
              className="input w-[100px] h-[30px]"
            />
          </div>
        </form>

        <span>
        <p className=" text-[#909090] mt-5 text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]">Cancel</p>
          
          <button className="bg-[#145062]  text-[rgb(0,15,8)]  text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]">Save changes</button>        
        </span>
         

         
      </div>
    </div>
  </>
  );
}
