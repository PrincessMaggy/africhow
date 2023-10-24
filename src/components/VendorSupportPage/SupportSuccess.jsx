import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import BackArrow from '../../assets/icons/arrow_back.png';

export default function SupportSuccess() {
    return (
        //This pops up immediately the user sends an email for vendor support
        <div>
            <Navbar />
            <Link to="/supportform">
                <img src={BackArrow} className="mx-5 mt-4 p-1 "></img>
            </Link>
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
