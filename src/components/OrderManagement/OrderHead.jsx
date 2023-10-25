import { Link, useLocation } from 'react-router-dom'
import React from 'react';


const OrderNav = () => {
    const location = useLocation();

    {location.pathname === '/rewards' ? 'active-link' : 'font-normal text-base text-#808080'}

  return (
    <nav>
        <ul className="flex items-center justify-between px-6 py-2 my-5 text-sm text-gray-500 bg-bg-order-nav">
                <li className={location.pathname === '/incoming' ? 'text-white bg-bg-order-active flex items-center justify-center gap-1 px-2' : ' text-gray-500 bg-bg-order-nav flex items-center justify-center gap-1 px-2'}>
                <Link to='/incoming' className="py-2">Incoming</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100">8</div>
            </li>
            <li className={location.pathname === '/outgoing' ? 'text-white bg-bg-order-active flex items-center justify-center gap-1 px-2' : ' text-gray-500 bg-bg-order-nav flex items-center justify-center gap-1 px-2'}>
                <Link to='/outgoing' className='py-2'>Outgoing</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100">8</div>
            </li>
            <li className={location.pathname === '/history' ? 'text-white bg-bg-order-active flex items-center justify-center gap-1 px-6' : ' text-gray-500 bg-bg-order-nav flex items-center justify-center gap-1 px-2'}>
                <Link to='/history' className='py-2'>History</Link>
            </li>
        </ul>
    </nav>

  )
}

export default OrderNav