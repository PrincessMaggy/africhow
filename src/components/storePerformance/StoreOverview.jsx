import { Link } from "react-router-dom";
import Smartphone from "../../assets/Smartphone.png";
import arrow_forward from "../../assets/arrow_forward.png";
import dollar from "../../assets/dollar.png";
import cart from "../../assets/cart.png";
import favorite from "../../assets/favorite.png";
import visibility from "../../assets/visibility.png";
import "./Style.css";

function StoreOverview() {
  return (
    <section >
        <section className="section flex items-center justify-between gap-30 bg-custom-blue text-white text-center pt-2 px-8">
        <img src={Smartphone} alt="Phone-Security-image" className="security w-40 h-30" />
        <section className="flex ">
            <h2 className="KYC "><span className="span text-2xl font-bold">Complete KYC</span><br></br> <span className="span text-2xl ">To ensure security of your store</span></h2>
        </section>
        <img src={arrow_forward} alt="arrow_forward" className="arrow" />
        </section>

        <h2 className="overview text-start mt-10 text-2xl font-semibold">Overview</h2>
        <section className="grid grid-cols-2 gap-6">
            <div className="overview-grid-item border pt-10 pb-10 p-5 mt-8 bg-light-green">
                <img src={dollar} alt="dollar-image" className="dollar w-10 h-10 mb-2"/>
                <p className="p text-start text-2xl mb-8">Total income</p>
                <h3 className="h3 text-start text-4xl font-semibold">0</h3>
            </div>

            <div className="overview-grid-item border pt-10 pb-10 p-5 mt-8 bg-light-green">
                <img src={cart} alt="cart-image" className="cart w-10 h-10 mb-2"/>
                <p className="p text-start text-2xl mb-8">Total order</p>
                <h3 className="h3 text-start text-4xl font-semibold">0</h3>
            </div>

            <div className="overview-grid-item border pt-10 pb-10 p-5 bg-light-green">
            <img src={favorite} alt="favorite-image" className="favorite w-10 h-10 mb-2"/>
                <p className="p text-start text-2xl mb-8">Impressions</p>
                <h3 className="h3 text-start text-4xl font-semibold">0</h3>
            </div>

            <div className="overview-grid-item border pt-10 pb-10 p-5 bg-light-green">
                <img src={visibility} alt="visibility-image" className="visibility w-10 h-10 mb-2"/>
                <p className="p text-start text-2xl mb-8">Most ordered meal</p>
                <h3 className="h3 text-start text-4xl font-semibold">-</h3>
            </div>
        </section>

        <h2 className="recent-orders text-start mt-10 text-2xl font-semibold">Recent orders</h2>
        <section className="orders-section text-center mt-10">
            <p className="mb-6 text-2xl">You have no sales record yet.</p>
            <Link to="/storeperformance" className="button text-black text-2xl border bg-custom-green px-12 py-2">Start selling</Link>
        </section>

        <h2 className="top-meals text-start mt-10 mb-6 text-2xl font-semibold">Top meals in your store</h2>
        <section className="top-meals-section text-2xl">
            <p>Your bestsellers would appear <br></br> here once you start selling.</p>
        </section>
    </section>
  );
}

export default StoreOverview;
