import React, { useState } from "react";
import Profilenav from "./Profilenav";



export default function Profileform() {
  
  return (
  <>
    <div className="grid gap-3 w-[200px]  relative">
      <div className="grid items-end">
        <form className="grid gap-3" >
          <div className="grid gap-2">
          <label className="label text flex gap-2 mt-3">
            First name </label>
            <input
              type="text"
              id="fname"
              placeholder="Michael"
              
                required="Required"
              
              className="input w-[80px] h-[30px]"
            />
          </div>
          
          <div className="grid gap-2">
          <label className="label text flex gap-2">
            Last Name </label>
            <input
              type="text"
              id="Lname"
              placeholder="Ibrahim"
                required= "Required"
              className="input w-[80px] h-[30px]"
            />
          </div>
          
          <div className="grid gap-2">
          <label className="label text flex gap-2">
            Business name </label>
            <input
              type="text"
              id="Bname"
              placeholder="Alex's Diner"
                required= "Required"
              
              className="input w-[80px] h-[30px]"
            />
          </div>

          <div className="grid gap-2">
          <label className="label text flex gap-2">
            Business address </label>
            <input
              type="text"
              id="Baddress"
              placeholder="1234 N.Compass Way"
                required= "Required"
              
              className="input w-[80px] h-[30px]"
            />
          </div>
          
          <div className="grid gap-2">
          <label className="label text flex gap-2">
            Business email </label>
            <input
              type="email"
              id="email"
              placeholder="Dave@alexdiner.com"
                required= "Required"
              
              className="input w-[80px] h-[30px]"
            />
          </div>

          <div className="grid gap-1">
          <label className="label text flex gap-1">
           Comfirm business email </label>
            <input
              type="email"
              id="Cemail"
              placeholder="Dave@alexdiner.com"
                required= "Required"
              
              className="input w-[80px] h-[30px]"
            />
          </div>

          <div className="grid gap-1">
          <label className="label text flex gap-1">
           Business phone number  </label>
            <input
              type="number"
              id="number"
              placeholder="+1(916) 555-5555"
                required= "Required"
              
              className="input w-[80px] h-[30px]"
            />
          </div>
          <Profilenav text={"Edit"}/>
        </form>
      </div>
    </div>
  </>
  );
}
