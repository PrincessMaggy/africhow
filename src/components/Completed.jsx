import { useState } from "react";
import line from "/src/assets/Line.png";
import star from '/src/assets/Star.png'
import congrat from "/src/assets/Congrat.png";

function Completed() {
  return (
    <div className="p-1">
      <h1 className="text-3xl font-bold  text-center text-black-600">
        AfriChow
      </h1>

      <img
        src={line}
        alt="Logo"
        className="mr-2 mt-4 bg-[#145062] w-full fill-[#145062] "
      />

      <p className="font-bold text-center mt-2">
        Order ID <span className="text-red-500">#3468</span>
      </p>

      <img
        src={congrat}
        alt="congrat picture"
        className="mr-2 mt-4 bg-[#145062] w-full fill-[#145062] "
      />

      <p className="text-left mt-8">Hi Denise,</p>
      <p className="font-sm text-left mt-8 mb-8">
    Your order has been delivered! We hope you enjoyed your meal. Kindly share your experience using AfriChow. 
      </p>
     
   <div className="flex mt-5 ">
   <img
        src={star}
        alt="star"
        
      />
      <img
        src={star}
        alt="star"
       
      />
      <img
      src={star}
      alt="star"
       
    />
    <img
    src={star}
    alt="star"
     
  />
  <img
    src={star}
    alt="star"
     
  />
   </div>
      
      <div className="float-left mt-6">
      <button className=" bg-[#33CC9F;] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Rate us
</button>
      </div>
    </div>
  );
}

export default Completed;
