import React, { useEffect, useState } from "react";
import location_pin from "../../assets/Images-Order-management/location_pin.jpg";
import FoodList from "../../lib/Foodlist";
import OrderHead from "./OrderHead";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginNav from "../LoginNav";
import NewNavBar from '../NewNav/NewNavBar';

function Incoming() {
  const [popUp, SetPopUp] = useState(false);
  const handleClickOpen = () => {
    SetPopUp(!popUp);
  };

  const closePopUP = () => {
    SetPopUp(false);
  };

  const [accept, setAccept] = useState(FoodList);
  

  const StoredOrder = () => {
    const [orderStore, setOrderStore] = useState(getInitialOrderStorage());
  };

  function getInitialOrderStorage() {
    const savedOrder = JSON.parse(localStorage.getItem("storedOrder"));
    return savedOrder || [];
  }

  const setItem = () => {
    useEffect(() => { localStorage.setItem('storedOrder', JSON.stringify(accept.filter(a => a.id !== item.id)))
  }, [orderStore])
  }

  // useEffect(() => {

  //   localStorage.setItem('storedOrder', JSON.stringify(accept.filter(a => a.id !== item.id)))
  // }, [orderStore])

  const openAccept = () => {
    toast.success("order Successfully Accepted!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const openDecline = () => {
    toast.error("order Successfully Declined!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div>
      <div className="sticky top-0 mb-6">
        {/* < NewNavBar /> */}
        <LoginNav title={'Order Management'}/>       
        <OrderHead number={accept.length}/>
      </div>
      <div>
        {accept.map((item) => (
          <div key={item.id}>
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
                  <p>
                    {item.date}
                  </p>
                  <p>•</p>
                  <p>{item.time}</p>
                </div>

                <div className="flex items-center gap-1 mx-6 text-xs text-gray-500">
                  <img src={location_pin} alt="location-pin" />
                  <p>{item.address}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mx-6 text-sm font-semibold text-bg-order-active">
                <div className="flex items-center gap-5">
                  <div>
                    <img src={item.img1} alt="food" className="w-full h-full" />
                  </div>
                  <div>{item.Qty1}x</div>
                  <div className="text-left">
                    <div>{item.Foodname1}</div>
                    <div className="text-xs font-normal text-gray-500 ">
                      {item.Desc1}
                    </div>
                  </div>
                </div>
                <div>${item.Price1}</div>
              </div>

              <div className="flex items-center justify-between mx-6 my-4 text-sm font-semibold text-bg-order-active">
                <div className="flex items-center gap-5">
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

                 {popUp ? (
                      <div className="fixed top-0 left-0 z-10 w-full h-full bg-black/10">
                        <div className="inline-flex flex-col items-center gap-3 px-10 py-8 text-sm border absolute bg-white w-[310px] shadow-inner top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                          <p className="font-semibold text-bg-order-active">
                            Are you sure you want to cancel this order?
                          </p>
                          <div className="flex gap-8">
                            <button
                              className="px-8 border-2 border-gray-200 text-bg-order-active bg-bg-order-nav"
                              onClick={closePopUP}
                            >
                              No
                            </button>

                            <button
                              className="px-8 py-2 text-bg-order-active bg-primary"
                              onClick={() => {
                                closePopUP();
                                setAccept(
                                  accept.filter((a) => a.id !== item.id)
                                );
                                openDecline((a) => a.id !== item.id);
                              }}
                            >
                              <ToastContainer autoClose={700} />
                              Yes
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                <div className="flex items-center justify-between mx-6 mt-2 text-sm">
                  <button
                    className="p-2 text-red-500 border-2 border-red-500 "
                    onClick={handleClickOpen}
                  >
                    Decline Order
                  </button>

                  <button
                    className="text-bg-order-active bg-primary p-2.5"
                    onClick={() => {
                      setAccept(accept.filter((a) => a.id !== item.id));
                      openAccept((a) => a.id !== item.id);
                      setItem();
                      getInitialOrderStorage()
                    }}
                  >
                    <ToastContainer autoClose={700} />
                    Accept order
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

export default Incoming;
