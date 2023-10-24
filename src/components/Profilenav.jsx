import React from "react";

export default function Profilenav({ text, hours, onClick }) {
  return (
<div className="flex justify-between px-8 py-4 w-[390px] border-b border-#909090 m-auto mb-10">
<button  className="
    bg-[#145062] text-[rgb(0,15,8)] mr-8 text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]"
      onClick={onClick}
    >
         {text}
    </button>

    <button  className="
     text-[#909090] m-auto text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]"
      onClick={onClick}
    >
         {hours}
    </button>

</div>
   
  );
}
        
        
        
