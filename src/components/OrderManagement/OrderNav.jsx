import React from "react";
import Hamburger from "../../assets/Frame 578.png";

function OrderNav() {
  return (
    <nav className="bg-white py-3">
      <div className="mx-6">
        <div className="flex items-center gap-2">
          <img src={Hamburger} className="w-6 h-6 cursor-pointer" />
          <p className="font-normal ">Order Management</p>
        </div>
      </div>
    </nav>
  );
}

export default OrderNav;
