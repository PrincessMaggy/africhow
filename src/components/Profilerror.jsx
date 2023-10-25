import React from "react";
import Error from "../assets/ProfileImg/error.png";

export default function Profileerror() {
  return (
    <div className="m-5">
      <div className="w-[300px] h-72 border m-auto rounded  shadow">
        <h1 className="text-bold font-medium m-3 text-red-400">Error</h1>
        <p className="m-3 text-sm font-normal">
          Business name cannot be blank or exceed a character limit of 50 words
        </p>
        <img src={Error} className="ml-12"/>
      </div>
    </div>
  );
}
