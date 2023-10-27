import React from "react";
import location_pin from "../../assets/Images-Order-management/location_pin.jpg";
import FoodList from "../../lib/Foodlist";
import OrderHead from "./OrderHead";
import OrderNav from "./OrderNav";

function Outgoing() {
  return (
    <div>
      <OrderNav />
      <OrderHead />
      <div>
        {FoodList.map((item, i) => (
          <div key={i}>
            <div>
              <div className="flex items-center gap-4 px-3 py-2 mx-6 bg-bg-order-header">
                <h1 className="w-10 text-lg leading-10 rounded-full bg-bg-order-nav">
                  {item.logo}
                </h1>
                <div className="text-left">
                  <p>Order #{item.orderCode}</p>
                  <p className="text-sm">{item.name}</p>
                </div>
              </div>

              <div className="my-4">
                <div className="flex items-center gap-2 mx-6 mb-1 text-xs text-gray-500">
                  <p>{item.date}</p>
                  <p>•</p>
                  <p>{item.time}</p>
                </div>

                <div className="flex items-center gap-1 mx-6 text-xs text-gray-500">
                  <img src={location_pin} alt="location-pin" />
                  <p>{item.address}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mx-6 text-sm font-semibold text-bg-order-active">
                <div>
                  <img src={item.img1} alt="food" />
                </div>
                <div>{item.Qty1}x</div>
                <div className="text-left">
                  <div>{item.Foodname1}</div>
                  <div className="text-xs font-normal text-gray-500 ">
                    {item.Desc1}
                  </div>
                </div>
                <div>${item.Price1}</div>
              </div>

              <div className="flex items-center justify-between mx-6 my-4 text-sm font-semibold text-bg-order-active">
                <div>
                  <img src={item.img2} alt="" />
                </div>
                <div>{item.Qty2}x</div>
                <div className="text-left">
                  <div>{item.Foodname2}</div>
                  <div className="text-xs font-normal text-gray-500 ">
                    {item.Desc2}
                  </div>
                </div>
                <div>${item.Price2}</div>
              </div>

              <div className="py-8 border-y-[1px] mb-8">
                <div className="flex items-center justify-between mx-6">
                  <div className="text-xs text-gray-500">
                    {item.items} Items
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="text-base font-semibold text-bg-order-active">
                      ${item.Total}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mx-6 mt-2 text-sm">
                  <button
                    className=""
                    
                  >
                    
                  </button>

                  <button
                    className="text-gray-500 bg-primary p-2.5"
                    
                  >
                    Order Accepted
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Outgoing;
