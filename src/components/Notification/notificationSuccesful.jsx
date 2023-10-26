import { Link } from "react-router-dom";
import Box from "../../assets/icons/checker.jpg";

function UpdatedSuccessfully() {
  return (<div className="lg:mt-40 mt-80 text-center flex inline-flex flex-col items-center justify-center">
  <img src={Box} alt="checkedbox" />
  <p className="text-base lg:mt-4 mt-4">Updated successfully!</p>
  <Link
    to="/"
    className="text-words lg:text-base text-base lg:mt-10 mt-8 lg:mb-4 mb-4 border bg-primary lg:px-10 px-8 py-2"
  >
    Go to homepage
  </Link>
</div>);
}

export default UpdatedSuccessfully;