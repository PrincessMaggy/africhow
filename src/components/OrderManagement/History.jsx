import React from "react";
import { useState } from "react";
import Arrow from "../../assets/Images-Order-management/keyboard_arrow_down.jpg";
import FoodList from "../../lib/Foodlist";
import location_pin from "../../assets/Images-Order-management/location_pin.jpg";

function History() {
  // const [isOpen, setIsOpen] = useState(new Array(FoodList.length).fill(''));
  // const updateIsOpen = (index, newValue) => {
  //   const newValues = [...isOpen];
  //   newValues[index] = newValue;
  //   setIsOpen(newValues);
  // };
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {FoodList.map((item) => (
        <div key={item.id}>
          <div className="mx-6">
            <div className="flex items-center justify-between my-3 shadow-md p-2">
              <div className="flex items-center gap-4">
                <div>
                  <img src={item.img1} alt="food" />
                </div>
                <div className="flex flex-col text-left gap-1">
                  <div className="text-sm text-bg-order-active font-semibold">
                    {item.Foodname1}
                  </div>
                  <div className="text-xs ">Ordered by {item.name}</div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-xs p-2 bg-bg-order-nav text-primary font-semibold">
                  {item.Status1}
                </p>
                <img src={Arrow} alt="arrow" className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
              </div>
            </div>

            {isOpen?
            (<div className="shadow-md p-2">
              <div className="flex items-center gap-2 mb-1 text-xs text-gray-500">
                <p>+44 770000000</p>
                <p>•</p>
                <p>{item.date}</p>
                <p>•</p>
                <p>{item.time}</p>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                <img src={location_pin} alt="location-pin" />
                <p>{item.address}</p>
              </div>

              <div className="flex flex-col gap-1.5 text-xs text-left">
                <p>Order No: #{item.orderCode}</p>
                <p>Quantity: {item.Qty1} Plates</p>
                <p>Total Paid: ${item.Price1}</p>
              </div>
            </div>) : ("")}
          </div>

          
        </div>
      ))}

      {FoodList.map((item) => (
        <div className="mx-6">
        <div className="flex items-center justify-between my-3 shadow-md p-2">
          <div className="flex items-center gap-4">
            <div>
              <img src={item.img2} alt="food" />
            </div>
            <div className="flex flex-col text-left gap-1">
              <div className="text-sm text-bg-order-active font-semibold">
                {item.Foodname2}
              </div>
              <div className="text-xs ">Ordered by {item.name}</div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-xs p-2 bg-bg-order-nav text-primary font-semibold">
              {item.Status2}
            </p>
            <img src={Arrow} alt="arrow" onClick={() => setIsOpen2(!isOpen2)} className="cursor-pointer "/>
          </div>
        </div>
        
        {isOpen2?
        (<div className="shadow-md p-2">
          <div className="flex items-center gap-2 mb-1 text-xs text-gray-500">
            <p>+44 770000000</p>
            <p>•</p>
            <p>{item.date}</p>
            <p>•</p>
            <p>{item.time}</p>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
            <img src={location_pin} alt="location-pin" />
            <p>{item.address}</p>
          </div>

          <div className="flex flex-col gap-1.5 text-xs text-left">
            <p>Order No: #{item.orderCode}</p>
            <p>Quantity: {item.Qty2} Plates</p>
            <p>Total Paid: ${item.Price2}</p>
          </div>
        </div>) : ("")}
      </div>
      ))}
    </div>
  );
}

export default History;
