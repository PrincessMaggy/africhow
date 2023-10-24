import React from "react";
import Arrow from "../assets/icons/prev.png";

export default function Prev({onClick}) {
  return (
    <div >
        <img src={Arrow} alt="previous icon" className="w-[24px] h-[24px]" onClick={onClick} />
    </div>
  );
}
