import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>
                Order Management
            </div>
            <nav>
                <ul className="flex justify-between px-6 py-3 my-5 text-sm text-gray-500 bg-bg-order-nav">
                    <li className="flex items-center justify-center gap-1 ">
                        <Link to='/incoming'>Incoming</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100">8</div>
                    </li>
                    <li className="flex items-center justify-center gap-1 ">
                        <Link to='/outgoing'>Outgoing</Link> <div className="w-6 text-xs leading-6 text-center rounded-full bg-bg-order-notify text-slate-100"></div>
                    </li>
                    <li>
                        <Link to='/history'>History</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        
        </>
    )
}

export default Layout