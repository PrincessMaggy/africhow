import { useState } from "react";
import line from "/src/assets/Line.png";


function Enroute() {
  return (
    <>
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
      <p className="text-left mt-8">Hi Denise,</p>
      <p className="font-sm text-left mt-8 mb-8">
      Thank you for ordering with AfriChow app. Your order is on the way.
      </p>
      <p className="bg-[#FFF5F5] p-4 border-dotted border-2 ">Estimated Delivery Time:<span className="text-[#F75555]"> 50 mins</span></p>
      <div className="justify-left">
        <p className="text-left font-semibold mt-10">Customer’s Information</p>
        <p className="text-left text-sm mt-4">Denise Martin</p>
        <p className="text-left text-sm mt-4">Flat 10, 15 Lumb Lane, Leeds, <br />West Yorkshire, <br />LS2 2EY</p>
      </div>
      <div className="order text-left mt-10">
        <p>Information About Your Order</p>
      </div>
      <div className="orderdetails flex justify-between items-center gap-20 mt-3">
        <div className="flex items-start gap-12 ">
          <p>1x</p>
          <p className="ml-6 font-semibold">Ofada Rice</p>
        </div>
        <div className="font-semibold">£10.40</div>
      </div>
      <div className="orderdetails flex justify-between items-center gap-20 mt-3">
        <div className="flex items-start gap-12 ">
          <p>1x</p>
          <p className="ml-6 font-semibold">Goat Meat Pepper Soup</p>
        </div>
        <div className="font-semibold">£15.30</div>
      </div>
    </>
  );
}

export default Enroute;
