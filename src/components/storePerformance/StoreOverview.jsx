import { Link } from "react-router-dom";
import Smartphone from "../../assets/banners/Smartphone.png";
import arrow_forward from "../../assets/icons/arrow_forward.png";
import dollar from "../../assets/icons/dollar.png";
import cart from "../../assets/icons/cart.png";
import favorite from "../../assets/icons/favorite.png";
import visibility from "../../assets/icons/visibility.png";
import NewNavbar from "../NewNav/NewNavBar";

// Define a React functional component named StoreOverview
function StoreOverview() {
  return (
    <section className="font-manrope mx-10">
      <NewNavbar />
      <hr />
      {/* Section for completing KYC (Know Your Customer) */}
      <section className="flex items-center justify-between gap-30 bg-secondary text-white text-center mt-5 lg:pt-2 lg:px-8 pt-2 px-2">
        <img
          src={Smartphone}
          alt="Phone-Security-image"
          className="lg:w-40 lg:h-40 w-10 h-10"
        />
        {/* Title for completing KYC */}
        <section className="flex ">
          <h2>
            <span className="lg:text-2xl text-base font-bold">
              Complete KYC
            </span>
            <br></br>{" "}
            <span className="lg:text-2xl text-base">
              To ensure security of your store
            </span>
          </h2>
        </section>
        <img src={arrow_forward} alt="arrow_forward" />
      </section>

      {/* Overview section */}
      <h2 className="text-start mt-10 lg:text-base text-base font-semibold">
        Overview
      </h2>

      {/* Grid items for displaying store overview data */}
      <section className="grid lg:grid-cols-2 grid-cols-2 lg:gap-6 gap-2">
        <div className="border-none lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 mt-8 bg-light-green">
          <img
            src={dollar}
            alt="dollar-image"
            className="lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="text-start lg:text-base text-base mb-8">Total income</p>
          <h3 className="text-start lg:text-base text-base font-semibold">0</h3>
        </div>

        <div className="border-none lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 mt-8 bg-light-green">
          <img
            src={cart}
            alt="cart-image"
            className="lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="text-start lg:text-base text-base mb-8">Total order</p>
          <h3 className="text-start lg:text-base text-base font-semibold">0</h3>
        </div>

        <div className="border-none lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 bg-light-green">
          <img
            src={favorite}
            alt="favorite-image"
            className="lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="text-start lg:text-base text-base mb-8">Impressions</p>
          <h3 className="text-start lg:text-base text-base font-semibold">0</h3>
        </div>

        <div className="border-none lg:pt-10 pt-4 lg:pb-10 pb-4 p-5 bg-light-green">
          <img
            src={visibility}
            alt="visibility-image"
            className="lg:w-10 lg:h-10 w-8 h-8 mb-2"
          />
          <p className="text-start lg:text-base text-base mb-8">
            Most ordered meal
          </p>
          <h3 className="text-start lg:text-base text-base font-semibold">-</h3>
        </div>
      </section>

      {/* Recent orders section */}
      <h2 className="text-start lg:mt-10 mt-10 lg:text-base text-base font-semibold">
        Recent orders
      </h2>

      {/* Message for when there are no sales records */}
      <section className="text-center lg:mt-10 mt-2">
        <p className="mb-8 lg:text-base text-base">
          You have no sales record yet.
        </p>

        {/* Button to navigate to the store performance page to start selling */}
        <Link
          to="/store-performance"
          className="text-black lg:text-base text-base border-none bg-primary lg:px-12 px-8 py-2"
        >
          Start selling
        </Link>
      </section>

      {/* Top meals section */}
      <h2 className="text-start lg:mt-10 mt-10 mb-6 lg:text-base text-base font-semibold">
        Top meals in your store
      </h2>
      <section className="mt-4 lg:text-base text-base mb-10">
        <p>
          Your bestsellers would appear <br></br> here once you start selling.
        </p>
      </section>
    </section>
  );
}

export default StoreOverview;
