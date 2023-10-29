import React from "react";
import { useState } from "react";
import Arrowdown from "../../assets/Images-Order-management/keyboard_arrow_down.jpg";
import Arrowup from "../../assets/Images-Order-management/keyboard_arrow_up.jpg";
import FoodList from "../../lib/Foodlist";
import location_pin from "../../assets/Images-Order-management/location_pin.jpg";
import LoginNav from "../LoginNav";
import OrderHead from "./OrderHead";

function History() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (index) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };

  return (
    <div className="mb-10">
      <div className="sticky top-0">
      <LoginNav title={'Order Management'}/>
      <OrderHead number={8} />
      </div>
      {FoodList.map((item, index) => (
        <div key={index} item={item}>
          <div className="mx-6">
            <div className="flex items-center justify-between p-2 my-3 shadow-md">
              <div className="flex items-center gap-3 w-[200px]">
                <div>
                  <img src={item.img1} alt="food" />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <div className="text-sm font-semibold text-bg-order-active">
                    {item.Foodname1}
                  </div>
                  <div className="text-[12px]">
                    Ordered by <br /> {item.name}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-1"
                onClick={() => toggle(index)}
                key={index}
              >
                <p className={item.Status1 === 'Delivered'? 'p-2 text-xs font-semibold  bg-bg-order-nav text-primary' : 'p-2 text-xs font-semibold bg-red-100   text-red-500' }>
                  {item.Status1}
                </p>
                <div>
                  {isOpen === index ? (
                    <img
                      src={Arrowup}
                      alt="arrowdown"
                      className="w-full h-full cursor-pointer"
                    />
                  ) : (
                    <img
                      src={Arrowdown}
                      alt="arrowup"
                      className="w-full h-full cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>

            {isOpen === index ? (
              <div className="p-2 shadow-md">
                <div className="flex items-center gap-2 mb-1 text-xs text-gray-500">
                  <p>+44 770000000</p>
                  <p>•</p>
                  <p>{item.date}</p>
                  <p>•</p>
                  <p>{item.time}</p>
                </div>

                <div className="flex items-center gap-1 mb-2 text-xs text-gray-500">
                  <img src={location_pin} alt="location-pin" />
                  <p>{item.address}</p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-left">
                  <p>Order No: #{item.orderCode}</p>
                  <p>Quantity: {item.Qty1} Plates</p>
                  <p>Total Paid: ${item.Price1}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ))}

      {FoodList.map((item, index) => (
        <div key={index} item={item}>
          <div className="mx-6">
            <div className="flex items-center justify-between p-2 my-3 shadow-md">
              <div className="flex items-center gap-3 w-[200px]">
                <div>
                  <img src={item.img2} alt="food" />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <div className="text-sm font-semibold text-bg-order-active">
                    {item.Foodname2}
                  </div>
                  <div className="text-[12px]">
                    Ordered by <br /> {item.name}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-1"
                onClick={() => toggle(index)}
                key={index}
              >
                <p className={item.Status1 === 'Delivered'? 'p-2 text-xs font-semibold  bg-bg-order-nav text-primary' : 'p-2 text-xs font-semibold bg-red-100 text-red-500' }>
                  {item.Status2}
                </p>
                <div>
                  {isOpen === index ? (
                    <img
                      src={Arrowup}
                      alt="arrowdown"
                      className="w-full h-full cursor-pointer"
                    />
                  ) : (
                    <img
                      src={Arrowdown}
                      alt="arrowup"
                      className="w-full h-full cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>

            {isOpen === index ? (
              <div className="p-2 shadow-md">
                <div className="flex items-center gap-2 mb-1 text-xs text-gray-500">
                  <p>+44 770000000</p>
                  <p>•</p>
                  <p>{item.date}</p>
                  <p>•</p>
                  <p>{item.time}</p>
                </div>

                <div className="flex items-center gap-1 mb-2 text-xs text-gray-500">
                  <img src={location_pin} alt="location-pin" />
                  <p>{item.address}</p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-left">
                  <p>Order No: #{item.orderCode}</p>
                  <p>Quantity: {item.Qty2} Plates</p>
                  <p>Total Paid: ${item.Price2}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
