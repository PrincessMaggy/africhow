import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="flex py-3 px-6 text-gray-500 my-5 justify-between bg-bg-order-nav">
                    <li className="flex justify-center items-center gap-1 ">
                        <Link to='/incoming'>Incoming</Link> <div className="text-xs bg-bg-order-notify text-slate-100 w-6 leading-6 rounded-full text-center">3</div>
                    </li>
                    <li>
                        <Link to='/outgoing'>Outgoing</Link>
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