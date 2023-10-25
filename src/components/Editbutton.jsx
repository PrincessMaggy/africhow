import React from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"






export default function Editbutton() {
  return (
<div>

<Link 
className="bg-[#145062]  text-[rgb(0,15,8)]  text-[12px] w-[300px] rounded-[3px] py-[8px] px-[10px]" to="http://localhost:5173/vendorprofilechange">
Edit
</Link>

</div>
   
  );
}
