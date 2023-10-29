import React, { useState } from "react";
import circle from '../assets/ProfileImg/checkcircle.png';
import Closeimg from "../assets/ProfileImg/closenav.svg";


export default function Profilesuccess() {
  const [onOpen, setOnOpen] = useState(true);

  const handleClose = () => {
    setOnOpen(false);
  };

  return (
    onOpen && (
    <div className="m-5">
      <div className="w-[300px] h-72 border m-auto rounded  shadow">
      <button className="close-button" onClick={handleClose}>
            <img src={Closeimg} alt="Close" />
          </button>
        <h1 className="text- font-bold m-3 text-green-200">Success</h1>
        <p className="m-3 text-sm font-normal">
          Your changes have been successfully saved
        </p>
        <img src={circle} className="ml-12" />
      </div>
    </div>
    )
  );
  
}
