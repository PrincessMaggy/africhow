import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cancelprofile() {
    return(
        <div className="m-5">
            <div className="w-[300px] h-72 border m-auto rounded  shadow">
            <h1 className="text-bold font-medium m-3">Discard changes?</h1>
            <p className="m-3 text-sm font-normal">You will lose your changes if you continue without saving</p>

     
        <button className="bg-[#145062] m-5 text-[rgb(0,15,8)]  
          text-[12px] w-[200px] rounded-[3px] py-[8px] px-[10px]">
        <Link to="http://localhost:5173/Vendorprofile"> Discard</Link>
        </button>
              

          <button className="  text-[rgb(0,15,8)] border-black border text-[12px] w-[200px] rounded-[3px] py-[8px] px-[8px]">
          <Link  to="http://localhost:5173/Vendorprofilechange"> 
          Keep editing</Link>
          </button>
            </div>             
        </div>

    )
}