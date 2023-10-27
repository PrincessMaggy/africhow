import React from "react";

import Profileimg from './Profileimg';
import Profilehead from "./Profilehead";

import Profilelocation from "./Profilelocation";
import Saveprofile from "./Saveprofile";
import Profilenav from "./Profilenav";


function Savechange ()  { 
    return (
        <div  className=' flex flex-col justify-center align-center   border rounded shadow-sm w-[380px] h-6/12 my-5 m-auto' >
        
        <Profilehead/>
        <Profilenav
         text={'Vendor details'}

         hours={"Working hours"}
        />
        <Profileimg/>
        <Profilelocation/>
        <Saveprofile
        
        />
        
        
        
        </div>
    );
};

export default Savechange;