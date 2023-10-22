import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="flex mx-10 justify-between">
                    <li className="flex justify-center items-center gap-2 bg-[#f3ff4]">
                        <Link to='/incoming' className="h-5">Incoming</Link> <div className="text-xs bg-red-800 text-slate-100 w-5 h-5 text-center">3</div>
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