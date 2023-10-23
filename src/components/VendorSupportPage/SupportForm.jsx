import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ComplaintArea from "./ComplaintArea"
import BackArrow from '../../assets/icons/arrow_back.png';

export default function SupportForm() {
    return (
        <div className="font-body text-words font-normal">
            <Navbar />
            <Link to="/">
                <img src={BackArrow}></img>
            </Link>
            <div className="mx-4">
                <div className="leading-5 text-sm lg:text-xl md:mx-32 lg:mx-50 lg:p-7">
                    <div className="lg:text-center lg:my-6">
                        <p>
                            For any complaint or feedback, please fill out the following
                            details.
                        </p>
                        <p>Our support team will respond within 1-2 working days.</p>
                    </div>

                    <form className="my-4 flex flex-col lg:gap-5 justify-start py-2 sm:mb-10 lg:mb-20">
                        <div className="flex flex-col">
                            <label>
                                Name <span className="text-red-700 text-xl">*</span>
                            </label>
                            <input
                                type="text"
                                htmlFor="Name"
                                className="border border-words h-12 my-2"
                                required
                            ></input>
                        </div>

                        <div className="flex flex-col">
                            <label>
                                Email <span className="text-red-700 text-xl">*</span>
                            </label>
                            <input
                                type="Email"
                                htmlFor="Name"
                                className="border  border-words h-12 my-2"
                                required
                            ></input>
                        </div>

                        <div className="flex gap-x-1 my-3">
                            <input type="checkbox"></input>{" "}
                            <label className="font-medium text-base lg:text-2xl">
                                Save details
                            </label>
                        </div>

                        <div className="flex flex-col justify-start">
                            <label>Subject</label>
                            <input
                                type="text"
                                className="border border-words h-12 my-2"
                            ></input>
                        </div>



                        <ComplaintArea />

                        <Link to="./supportsuccess" className="flex justify-end">
                            <button className="pb-2 px-5 font-medium text-base bg-primary mt-6">
                                SEND
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}


