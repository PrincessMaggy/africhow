import React from "react";
import Hamburger from "../assets/Frame 578.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between w-[95%] mx-auto mt-4 text h-[38px] items-center">
        <p className="text-[25px] font-[700]">Africhow</p>
      <Link to="/login">
        <button className="w-[100px] py-[8px] text-[16px] rounded-lg bg-[#33CC9F] text-white text-center">
          Login
        </button>
      </Link>
    </div>
  );
}
