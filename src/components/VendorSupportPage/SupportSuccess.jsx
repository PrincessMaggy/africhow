import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import BackArrow from '../../assets/icons/arrow_back.png';
import Box from "../../assets/icons/checker.jpg";


export default function SupportSuccess() {
    return (
        /*This pops up immediately the user sends an email for vendor support 
        to alert that the email has been successfully sent */

        <div>
            <Navbar />
            <Link to="/supportform">
                <img src={BackArrow} className="mx-5 mt-4 p-1 "></img>
            </Link>
                <div className="flex flex-cols justify-center items-center h-screen font-body text-words">
                    <img src={Box}></img>
                    <p className="text-base font-semibold">Submitted successfully!</p>
                    <Link to="/">
                        <div className="h-44 w-48 ">
                            <button className="py-2 px-6 font-medium text-base bg-primary mt-6 mx-1">Go to homepage</button>
                        </div>
                    </Link>
                </div>
            </div>
            )

}
