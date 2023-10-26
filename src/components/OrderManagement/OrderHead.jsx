import { Link, useLocation } from "react-router-dom";
import React from "react";

const OrderNav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex items-center justify-between px-6 py-2 my-5 text-sm text-gray-500 bg-bg-order-nav">
        <li
          className={
            location.pathname === "/incoming"
              ? "text-white bg-bg-order-active"
              : " text-gray-500 bg-bg-order-nav"
          }
        >
          <Link to="/incoming" className="flex items-center justify-center gap-1 px-2 py-2">
            <p>Incoming</p>
            <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100">
            8
          </div>
          </Link>
          
        </li>
        <li
          className={
            location.pathname === "/outgoing"
              ? "text-white bg-bg-order-active"
              : " text-gray-500 bg-bg-order-nav"
          }
        >
          <Link to="/outgoing" className="flex items-center justify-center gap-1 px-2 py-2">
           <p>Outgoing</p>
           <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100">
            8
          </div>
          </Link>
        </li>
        <li
          className={
            location.pathname === "/history"
              ? "text-white bg-bg-order-active py-3"
              : " text-gray-500 bg-bg-order-nav py-3"
          }
        >
          <Link to="/history" className="gap-1 px-5 py-3">
            History
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default OrderNav;
