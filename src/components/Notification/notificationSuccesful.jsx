import { Link } from "react-router-dom";
import Box from "../../assets/icons/checker.jpg";

function UpdatedSuccessfully() {
  return (
    <div className="mt-40 text-center flex flex-col items-center justify-center">
      <img src={Box} alt="checkedbox" />
      <p className="text-2xl mt-4">Updated successfully!</p>
      <Link
        to="/notification"
        className="text-black lg:text-2xl text-xl mt-10 mb-4 border bg-primary lg:px-12 px-12 py-2"
      >
        Go to homepage
      </Link>
    </div>
  );
}

export default UpdatedSuccessfully;