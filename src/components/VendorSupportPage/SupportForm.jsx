import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import BackArrow from '../../assets/icons/arrow_back.png';
import EmailForm from "../emailHandler";

export default function SupportForm() {
    return (
        //This contains the layout of the vendor support/ complaint form.
        <div className="font-body text-words font-normal">
            <Navbar />
            <Link to="/">
                <img src={BackArrow}></img>
            </Link>
            <EmailForm />
        </div>
    );
}


