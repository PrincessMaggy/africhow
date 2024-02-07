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
                <ul className="lg:flex justify-between px-6 py-2 my-5 text-sm text-gray-500 bg-bg-order-nav items-center md:block">
                    <li className="flex items-center justify-center gap-1">
                        <Link to='/incoming' className="py-2">Incoming</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>
                    <li className="flex items-center justify-center gap-1 ">
                        <Link to='/outgoing' className="py-2">Outgoing</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>
                    <li className="flex items-center justify-center gap-1 ">
                        <Link to='/history' className="py-2">History</Link>  <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>

                
                    <li className="flex items-center justify-center gap-1">
                        <Link to='/pending className="py-2"'>Delivery Enroute</Link>  <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>
                    <li className="flex items-center justify-center gap-1">
                        <Link to='/complete' className="py-2">Delivery Completed</Link>  <div className="w-6 text-xs  leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>
                    <li className="flex items-center justify-center gap-1">
                        <Link to='/cancelled' className="py-2">Delivery Cancelled</Link>  <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>
                    <li className="flex items-center justify-center gap-1">
                        <Link to='/delivered' >Delivered</Link>  <div className="w-2 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>
                   
                   
                </ul>
                
            </nav>

            <Outlet/>
        
        </>
    )
}

export default Layout