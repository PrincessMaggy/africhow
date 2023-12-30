import { useState } from "react";
import lines from "/src/assets/Lines.png";
import divider from '/src/assets/Divider.png';
import star from '/src/assets/Star.png';
import swallow from '/src/assets/Swallow.png';


function Recommendation() {
  return (
    <>
      <h1 className="text-3xl font-bold  text-center text-black-600">
        AfriChow
      </h1>

      <img
        src={lines}
        alt="Logo"
        className="mr-2 mt-4 w-full fill-[#145062] "
      />
      
      <p className="font-bold text-center mt-2">
        Order ID <span className="text-red-500">#3468</span>
      </p>
      <p className="text-left mt-8">Hi Denise,</p>
      <p className="font-sm text-left mt-8 mb-8">
      Your order has been delivered! We hope you enjoyed your meal. Kindly share your experience using AfiChow  
      </p>
      <div className="float-right">
      <div className="flex  ">
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
   </div >
      
      <div className=" mt-6 mb-3">
      <button className=" bg-[#33CC9F;] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Rate us
</button>
      </div>
      </div>
      <img
        src={divider}
        alt="divider"
        className="mt-3 w-full"
      />

    <h1 className="text-left font-bold mt-6">Discover more delicious meals!</h1>

    <img
        src={swallow}
        alt="swallow food"
        className="mr-2 mt-4  "
      />

      <button className="border border-slate-800 pt-3 pb-2 px-6 py-6 font-semibold float-right mb-4">See more Items</button>
    </>
  );
}

export default Recommendation;
