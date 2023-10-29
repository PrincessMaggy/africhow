import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

const OrderHead = (props) => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex items-center justify-between px-6 py-2 text-sm text-gray-500 bg-bg-order-nav">
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
            {props.number}
          </div>
          </Link>
          
        </li>
        <li
          className={
            location.pathname === "/outgoing"
              ? "text-white bg-bg-order-active py-3"
              : " text-gray-500 bg-bg-order-nav py-3"
          }
        >
          <Link to="/outgoing" className="px-5 py-3">
           Outgoing
          </Link>
        </li>
        <li
          className={
            location.pathname === "/history"
              ? "text-white bg-bg-order-active py-3"
              : " text-gray-500 bg-bg-order-nav py-3"
          }
        >
          <Link to="/history" className="px-5 py-3">
            History
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default OrderHead;
