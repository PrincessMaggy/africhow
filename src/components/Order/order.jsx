import Calender from "../Calender/calender";
import Month from "../Month/month";
import orders from "../../lib/orders";

function Order() {
  return (
    <section>
      <div className="flex gap-1.5 border-b border-gray-300 p-2.5 items-center">
        <div class="space-y-2 bg-black p-1">
          <div class="w-6 h-0.5 bg-white"></div>
          <div class="w-6 h-0.5 bg-white"></div>
          <div class="w-6 h-0.5 bg-white"></div>
        </div>
        <h1 className="text-base text-gray-800">Order summary</h1>
      </div>
      <Month />
      <Calender />
      <div className="pl-[10px] pr-[10px] ">
        {orders.map((list, index) => {
          return (
            <div
              key={index}
              className="bg-red-50  p-2.5 flex flex-col gap-[8px] "
            >
              <div className="border-b border-white text-sm font-bold flex  items-center justify-between">
                <span>OrderId:</span>
                <h1>{list.orderId}</h1>
              </div>
              <div className="border-b border-white text-sm font-bold flex  items-center justify-between">
                <span>Order_day:</span>
                <h1>{list.orderDay}</h1>
              </div>
              <div className="border-b border-white text-sm font-bold flex items-center justify-between">
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
                <span>Status:</span>
                <p>{list.status}</p>
              </div>

              {/* <p>{list.orderedItems}</p> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Order;
