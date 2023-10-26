import React, { useEffect, useState } from "react";

import Profileimg from './Profileimg';
import Profilehead from "./Profilehead";
import Profilenav from "./Profilenav"
import Profileform from "./Profileform";
import Profilelocation from "./Profilelocation";

function Profileedit ()  { 
    return (
        <div  className=' flex flex-col justify-center align-center  border rounded shadow-sm w-[380px] h-6/12 my-5 m-auto  ' >
        
        <Profilehead/>
        <Profilenav
        text={'Vendor details'}

        hours={"Working hours"}
        />
        <Profileimg/>
        <Profilelocation/>
        <Profileform/>
        
        
        </div>
    );
};

export default Profileedit;