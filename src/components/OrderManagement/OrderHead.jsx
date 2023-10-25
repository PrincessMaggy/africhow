import { Link, useLocation } from 'react-router-dom'
import React from 'react';


const OrderNav = () => {
    const location = useLocation();

  return (
    <nav>
        <ul className="flex items-center justify-between px-6 py-2 my-5 text-sm text-gray-500 bg-bg-order-nav">
            <li className="flex items-center justify-center gap-1">
                <Link to='/incoming' className="py-2">Incoming</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
            </li>
            <li className="flex items-center justify-center gap-1 ">
                <Link to='/outgoing'>Outgoing</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
            </li>
            <li>
                <Link to='/history'>History</Link>
            </li>
        </ul>
    </nav>

  )
}

export default OrderNav