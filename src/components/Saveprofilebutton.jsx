import React from "react";
import { useState } from "react";

import {Link, useNavigate} from "react-router-dom"






export default function Saveprofilebutton() {
 
  return (
<div>
<Link className="text-[#909090] mt-5 text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]" to="http://localhost:5173/cancelprofilecard">
    Cancel
</Link>
<Link 
className="bg-[#145062]  text-[rgb(0,15,8)]  text-[12px] w-[120px] rounded-[3px] py-[8px] px-[10px]" to="http://localhost:5173/profilesavedsuccess">
Save change
</Link>

</div>
   
  );
}




