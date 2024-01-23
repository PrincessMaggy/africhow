import { useState } from "react";
import food from '/src/assets/Food.png'
import peppersoup from '/src/assets/Peppersoup.png'
import divider from '/src/assets/Divider.png'
import shipping from '/src/assets/Shipping.png'

function Cancelled() {
    return (
     <>
     <nav className="bg-gray-100 flex justify-around p-2 cursor-pointer w-full" >
     <div><p className="active:bg-[#145062] active-tab  transition-all ease-in-out border-0 p-2 ">Pending</p></div>
     <div ><p className="active:bg-[#145062] active-tab  transition-all ease-in-out border-0 p-2 ">Completed</p></div>
     <div><p className="bg-[#145062]  border-0 p-2">Cancelled</p></div>
     </nav>
     <div className="card">
        <div><p className="mt-8 text-left text-[#909090]">#001</p></div>
        <div className="flex gap-2">
        <img
        src={food}
        alt="Logo"
        className="mt-2"
      />
      <div className="flex flex-col text-justify font-semibold">
      <p>Ofada Rice</p>
      <p>£10.40</p>
      </div>
      
        </div>
        <div className="text-left mt-2 text-xs font-semibold"><p>Flat G05, 32 Backover Lane, <br />
Bradford, West Yorkshire, <br />BD4 5AD </p></div>
<p className="text-left mt-1  text-sm">+44 20 7123 4567</p>
     </div>
     <div className="flex flex-row ">
        <button className="flex flex-row gap-2 bg-[#000F0885] pt-3 pb-3 px-6 py-6 ml-7"> 
        <img
        src={shipping}
        alt="shipping"
        className="mt-1"
      />Cancelled</button>
       
     </div>
     <img
        src={divider}
        alt="divider"
        className="mt-2 w-full"
      />
     <div className="card">
        <div><p className="mt-8 text-left text-[#909090]">#002</p></div>
        <div className="flex gap-2">
        <img
        src={food}
        alt="Logo"
        className="mt-2"
      />
      <div className="flex flex-col text-justify font-semibold">
      <p>Ofada Rice</p>
      <p>£10.40</p>
      </div>
      
        </div>
        <div className="text-left mt-2 text-xs font-semibold"><p>Flat G05, 32 Backover Lane, <br />
Bradford, West Yorkshire, <br />BD4 5AD </p></div>
<p className="text-left mt-1  text-sm">+44 20 7123 4567</p>
     </div>
     <div className="flex flex-row ">
        <button className="flex flex-row gap-2 bg-[#000F0885] pt-3 pb-3 px-6 py-6 ml-7"> 
        <img
        src={shipping}
        alt="shipping"
        className="mt-1"
      />Cancelled</button>
       </div>

     </>
    )
}
export default Cancelled;