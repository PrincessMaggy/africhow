import React from "react";
import location_pin from "../../assets/Images-Order-management/location_pin.jpg";
import FoodList from "../../lib/Foodlist";

function Incoming() {
  return (
    <div>
      {FoodList.map((item, i) => (
        <div key={i}>

          <div className="flex items-center bg-bg-order-header mx-6 px-3 py-2 gap-4">
            <h1 className="text-lg w-10 leading-10 bg-bg-order-nav rounded-full">
              {item.logo}
            </h1>
            <div className="text-left">
              <p>Order #{item.orderCode}</p>
              <p className="text-sm">{item.name}</p>
            </div>
          </div>

          <div className="my-4">
            <div className="flex text-gray-500 gap-2 text-xs items-center mx-6 mb-1">
              <p>{item.date}</p>
              <p>•</p>
              <p>{item.time}</p>
            </div>

            <div className="flex text-gray-500 gap-1 text-xs items-center mx-6">
              <img src={location_pin} alt="location-pin" />
              <p>{item.address}</p>
            </div>
          </div>

          <div className="flex items-center text-bg-order-active font-semibold text-sm justify-between mx-6">
            <div>
              <img src={item.img1} alt="" />
            </div>
            <div>{item.Qty1}x</div>
            <div className="text-left">
                <div>{item.Foodname1}</div>
                <div className="text-gray-500 text-xs font-normal ">{item.Desc1}</div>
            </div>
            <div>
                ${item.Price1}
            </div>
          </div>

          <div className="flex items-center text-bg-order-active font-semibold text-sm justify-between mx-6 my-4">
            <div>
              <img src={item.img2} alt="" />
            </div>
            <div>{item.Qty2}x</div>
            <div className="text-left">
                <div>{item.Foodname2}</div>
                <div className="text-gray-500 text-xs font-normal ">{item.Desc2}</div>
            </div>
            <div>
                ${item.Price2}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Incoming;
