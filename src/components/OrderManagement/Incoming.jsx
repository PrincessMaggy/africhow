import React from "react";
import location_pin from "../../assets/Images-Order-management/location_pin.jpg";
import FoodList from "../../lib/Foodlist";

function Incoming() {
  return (
    <div>
      {FoodList.map((item, i) => (
        <div key={i}>
          <div className="flex items-center bg-bg-order-header m-6 px-3 py-2 gap-4">
            <h1 className="text-lg w-10 leading-10 bg-bg-order-nav rounded-full">
              {item.logo}
            </h1>
            <div className="text-left">
              <p>Order #{item.orderCode}</p>
              <p className="text-sm">{item.name}</p>
            </div>
          </div>

          <div>
            <p>{item.date}</p>
            <p>•</p>
            <p>{item.time}</p>
          </div>

          <div>
            <img src={location_pin} alt="location-pin" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Incoming;
