import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const [headerBg, setHeaderBg] = useState()

    return (
        <>
            <div>
                Order Management
            </div>
            <nav>
                <ul className="flex justify-between px-6 py-2 my-5 text-sm text-gray-500 bg-bg-order-nav items-center">
                    <li className="flex items-center justify-center gap-1">
                        <Link to='/incoming' className="py-2">Incoming</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>
                    <li className="flex items-center justify-center gap-1 ">
                        <Link to='/outgoing'>Outgoing</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>
                    <li>
                        <Link to='/history'>History</Link>
                    </li>

                
                    <li>
                        <Link to='/pending'>Delivery Enroute</Link>
                    </li>
                    <li>
                        <Link to='/complete'>Delivery Completed</Link>
                    </li>
                    <li>
                        <Link to='/cancelled'>Delivery Cancelled</Link>
                    </li>
                    <li>
                        <Link to='/delivered'>Delivered</Link>
                    </li>
                   
                   
                </ul>
                
            </nav>

            <Outlet/>
        
        </>
    )
}

export default Layout