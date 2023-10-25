// import Calender from "../Calender/calender";
import Month from "../Month/month";
import orderList from "../../lib/orderList";
import { useState, useEffect } from "react";
import image from "../../assets/download/Frame.png";
import image2 from "../../assets/download/downloads.png";
function Order() {
  // const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  // const [period, setPeriod] = useState("");
  // const [day, setDay] = useState("all");
  // const [filteredOrder, setFilteredOrder] = useState([]);
  // const handleBrandChange = (event) => setDay(event.target.value);
  // const handleChange = (period) => setPeriod(period);
 
  // const handleFilter = () => {
  //   if (period === "thisWeek") {
  //     const tempOrder = orderList.filter((order) => {
  //       const now = new Date();
  //       const date = new Date(
  //         `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
  //       );
  //       const orderDate = new Date(
  //         `${order.orderDate.substring(0, order.orderDate.indexOf("T"))}`
  //       );
  //       return date.valueOf() - orderDate.valueOf() <= 1000 * 60 * 60 * 24 * 7;
  //     });
  //     setFilteredOrder(tempOrder);
  //   //   console.log(tempOrder)
  //   } else if (period === "lastThreeMonths") {
  //     const tempOrder = orderList.filter((order) => {
  //       const now = new Date(); //getting the current date
  //       const orderMonth = new Date(
  //         `${order.orderDate.substring(0, order.orderDate.indexOf("T"))}`
  //       ); //getting the date from the order.js//
  //       let diff = now.getMonth() - orderMonth.getMonth(); //getting the difference//
  //       if (now.getFullYear() - orderMonth.getFullYear() > 1) {
  //         return false;
  //       }
  //       if (diff >= 0) {
  //         return diff < 3;
  //       } else {
  //         return 12 + now.getMonth() - orderMonth.getMonth() < 3;
  //       }
  //     });
  //     setFilteredOrder(tempOrder);
  //   } else if (period === "lastSixMonths") {
  //     const tempOrder = orderList.filter((order) => {
  //       const now = new Date(); //getting the current date
  //       const orderMonth = new Date(
  //         `${order.orderDate.substring(0, order.orderDate.indexOf("T"))}`
  //       ); //getting the date from the order.js//
  //       let diff = now.getMonth() - orderMonth.getMonth(); //getting the difference//
  //       if (now.getFullYear() - orderMonth.getFullYear() > 1) {
  //         return false;
  //       }
  //       if (diff >= 0) {
  //         return diff < 6;
  //       } else {
  //         return 12 + now.getMonth() - orderMonth.getMonth() < 6;
  //       }
  //     });
  //     setFilteredOrder(tempOrder);
  //   } else {
  //     setFilteredOrder(orderList);
  //   }
  // };

  // useEffect(() => {
  //   setFilteredOrder(orderList);
  // }, []);
  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturady",
    "Sunday",
  ];
  const [period, setPeriod] = useState("");
  const [day, setDay] = useState("all");
  const [filteredOrder, setFilteredOrder] = useState([]);
  const handleBrandChange = (event) => setDay(event.target.value);
  const handleChange = (period) => setPeriod(period);

  const filterByPreviousMonth = (range) => {
    return orderList.filter((order) => {
      const now = new Date();
      const orderMonth = new Date(
        `${order.orderDate.substring(0, order.orderDate.indexOf("T"))}`
      );
      // checking if the condition tally
      if (now.getFullYear() - orderMonth.getFullYear() > 1) {
        return false;
      }
      if (now.getFullYear() - orderMonth.getFullYear() === 1) {
        return 12 + now.getMonth() - orderMonth.getMonth() < range;
      }
      if (now.getFullYear() - orderMonth.getFullYear() === 0) {
        return now.getMonth() - orderMonth.getFullYear() < range;
      }
    });
  };

  const handleFilter = () => {
    if (period === "thisWeek") {
      const showOrder = orderList.filter((order) => {
        const now = new Date();
        const date = new Date(
          `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
        );
        const orderDate = new Date(
          `${order.orderDate.substring(0, order.orderDate.indexOf("T"))}`
        );
        return date.valueOf() - orderDate.valueOf() <= 1000 * 60 * 60 * 24 * 7;
      });
      setFilteredOrder(showOrder);
    } else if (period === "lastThreeMonths") {
      const showOrder = filterByPreviousMonth(3);
      setFilteredOrder(showOrder);
    } else if (period === "lastSixMonths") {
      const showOrder = filterByPreviousMonth(6);
      setFilteredOrder(showOrder);
    } else {
      setFilteredOrder(orderList);
    }
  };


  useEffect(() => {
    setFilteredOrder(orderList);
  }, []);

  return (
    <section>
      <div className="flex gap-1.5 border-b border-gray-300 p-2.5 items-center md:flex md:justify-between md:pl-8 md:pr-8">
        <img className="w-6" src={image} alt="" />

        <h1 className="text-base text-gray-800 font-bold">Order summary</h1>
      </div>

      <Month
        handleChange={handleChange}
        handleFilter={handleFilter}
        period={period}
      />

      {/* section to set day of the week starts */}

      <div className="bg-red-50  p-2.5 flex flex-col gap-[8px] mt-[5px] md:ml-7 md:mr-7">
        <select
          className="outline-none"
          onChange={handleBrandChange}
          id=""
          value={day}
        >
          <option value="all">All</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>
      {/* section to set day of the week ends*/}

      {/* section for map starts*/}
      <div className="pl-[10px] pr-[10px] flex flex-col gap-[20px] mt-[20px] md:ml-5 md:mr-5">
        {filteredOrder
          // orders
          .filter((order) => {
            if (day === "all") {
              return true;
            } else {
              return Days[(new Date(order.orderDate).getDate())].toLowerCase() === day.toLowerCase()
              // return order.orderDay.toLowerCase() === day.toLowerCase();
            }
          })
          .map((list, index) => {
            return (
              <div
                key={index}
                className="bg-red-50  p-2.5 flex flex-col gap-[8px] shadow-md"
              >
                <div className="border-b border-white text-sm font-bold flex  items-center justify-between">
                  <span>Order ID:</span>
                  <h1>{list.orderId}</h1>
                </div>
                <div className="border-b border-white text-sm font-bold flex  items-center justify-between">
                  <span>Order day:</span>
                  <h1>{Days[new Date(list.orderDate).getDay()]}</h1>
                  {/* <h1>{list.orderDay}</h1> */}
                </div>

                {list.orderedItems.map((type, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b border-white text-sm font-bold flex  items-center justify-between"
                    >
                      <span>Order item:</span>
                      <h1>{type.item}</h1>
                      <span>{type.quantity}</span>
                    </div>
                  );
                })}

                <div className="border-b border-white text-sm font-bold flex items-center justify-between ">
                  <span>Customer's:</span>
                  <h1>{list.customerName}</h1>
                </div>
                <div className="border-b border-white text-sm font-bold flex items-center justify-between">
                  <span>Restaurant:</span>
                  <p>{list.restaurant}</p>
                </div>

                <div className="border-b border-white text-sm font-bold flex items-center justify-between">
                  <span>OrderDate:</span>
                  <p>{list.orderDate}</p>
                </div>
                <div className="border-b border-white text-sm font-bold flex items-center justify-between">
                  <span className="text-black">Status:</span>{" "}
                  <span
                    className={
                      list.status === "delivered"
                        ? "text-green-400"
                        : list.status === "pending"
                        ? "text-red-500"
                        : "text-green-200"
                    }
                  >
                    <p>{list.status}</p>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {/* section for map ends*/}

      {/* section for download starts*/}
      <div className="flex items-center space-x-2 p-2 mt-4 pl-8">
        <img src={image2} alt="" />
        <p className="font-bold">Download order summary</p>
      </div>
      {/* section for download ends*/}
    </section>
  );
}
export default Order;
