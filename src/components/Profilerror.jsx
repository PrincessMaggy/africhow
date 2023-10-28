import React, { useState } from "react";
import Error from "../assets/ProfileImg/error.png";
import Close from "../assets/ProfileImg/closenav.svg";

export default function Profileerror() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="m-5">
        <div className="w-[300px] h-80 border m-auto rounded shadow">
          <button className="close-button" onClick={handleClose}>
            <img src={Close} alt="Close" />
          </button>
          <h1 className="text-bold font-medium m-3 text-red-400">Error</h1>
          <p className="m-3 text-sm font-normal">
            Business name cannot be blank or exceed a character limit of 50 words
          </p>
          <img src={Error} className="ml-12 " alt="Error" />
        </div>
      </div>
    )
  );
}
