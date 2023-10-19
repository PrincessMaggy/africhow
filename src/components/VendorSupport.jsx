import { Link } from "react-router-dom"
import Navbar from "./Navbar";



export default function VendorSupport() {
    return (
        <div>
            <Navbar />
            <img src="./src/assets/arrow_back.png" className="mx-5"></img>
            <div className="mx-4 mt-4 font-body md:text-center">
                <h1 className="font-bold text-3xl md:text-5xl md:mt-16 ">Help desk</h1>
                <p className="py-2 text-xs font-normal md:text-lg">
                    We are here to help! Reach out to our dedicated support team for
                    personalized assistance.
                </p>
                <div>
                    <Link to="./notification" className="flex m-auto items-center md:justify-center">
                        <p className="py-7 font-medium text-base text-secondary md:font-bold md:text-xl">Send us an email</p>
                        <img src="./src/assets/arrow_forward_ios.png" className="w-6 h-6 ml-4"/>
                    </Link>
                </div>
            </div>

        </div>
    );
}

