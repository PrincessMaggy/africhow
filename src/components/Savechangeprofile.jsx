import React, { useEffect, useState } from "react";

import Profileimg from './Profileimg';
import Profilehead from "./Profilehead";

import Profilelocation from "./Profilelocation";
import Saveprofile from "./Saveprofile";
import Profilenav from "./Profilenav";


function Savechangeprofile ()  { 
    return (
        <div  className=' flex flex-col justify-center align-center   border rounded shadow-sm w-[400px] h-min m-auto' >
        
        <Profilehead/>
        <Profilenav
         text={'Vendor details'}

         hours={"Working hours"}
        />
        <Profileimg/>
        <Profilelocation/>
        <Saveprofile/>
        
        
        
        </div>
    );
};

export default Savechangeprofile;