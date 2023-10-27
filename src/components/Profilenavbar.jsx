import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profilenavbar({ text, hour, onClick }) {
  return (
<div className="flex justify-between px-8 py-4 w-[390px] border-b border-#909090 m-auto mb-10">

<Link  className="
     text-[#909090] m-auto text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]"
      to="http://localhost:5173/Vendorprofile"
    >
         {text}
    </Link>


<Link  className="
    bg-[#145062] text-[rgb(0,15,8)] mr-8 text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]"
      to="http://localhost:5173/Vendorworkhour"
    >
         {hour}
    </Link>

    

</div>
   
  );
}
        
        
        
