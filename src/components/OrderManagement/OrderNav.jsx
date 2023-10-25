import React from 'react'
import Hamburger from "../../assets/Frame 578.png";


function Hamburg() {
  return (
    <div className="mx-6 mt-6">
      <div className="flex items-center gap-2">
        <img src={Hamburger} className="w-6 h-6 cursor-pointer" />
        <p className="font-normal ">Order Management</p>
      </div>
    </div>
  )
}

export default Hamburg