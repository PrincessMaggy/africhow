import React from "react";
import Hamburger from "../assets/Frame 578.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between w-[95%] mx-auto max-[390px]:mx-auto mt-4 max-[390px]:w-[358px] h-[38px] items-center">
      <div className="flex gap-2 items-center">
        <img src={Hamburger} className="w-[24px] h-[24px]" />
        <p className="text-[25px] font-normal">Africhow</p>
      </div>
      <Link to="/loginform">
        <button className="w-[100px] py-[8px] text-[16px] bg-[#000F08] text-white text-center">
          Get Started
        </button>
      </Link>
    </div>
  );
}
