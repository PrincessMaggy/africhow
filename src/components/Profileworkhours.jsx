import React, { useEffect, useState } from "react";

import Profileimg from './Profileimg';
import Profilehead from "./Profilehead";
import Profilenavbar from "./Profilenavbar"
import Profilelocation from "./Profilelocation";
import Workhours from "./Workhours";


function Profileworkhour ()  { 
    return (
        <div  className=' flex flex-col justify-center align-center   ' >
        
        <Profilehead/>
        <Profilenavbar
        text={'Vendor details '}

        hour={'Working hours'}
        />
        <Profileimg/>
        <Profilelocation/>
        <Workhours/>
        
        
        
        </div>
    );
};

export default Profileworkhour;