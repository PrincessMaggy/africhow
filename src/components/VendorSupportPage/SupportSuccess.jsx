import Navbar from "./Navbar"
import { Link } from "react-router-dom"

export default function SupportSuccess() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-screen font-body text-words">

            <Link to="/">
                <div className="h-44 w-48 ">
                    <p className="text-base font-semibold">Submitted successfully!</p>
                    <button className="py-2 px-6 font-medium text-base bg-primary mt-6 mx-1">Go to homepage</button>
                </div>
                </Link>
            </div>
        </div>
    )

}
