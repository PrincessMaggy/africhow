import dollar from "../../assets/dollar.png";
import cart from "../../assets/cart.png";
import favorite from "../../assets/favorite.png";
import visibility from "../../assets/visibility.png";
import image2 from "../../assets/image2.png";
import image1 from "../../assets/image1.png";
import image3 from "../../assets/image3.png";
import "./Style.css";

function StorePerformance() {
  return (
    <section>

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

            <div className="overview-grid-item border pt-10 pb-10 p-5 mt-8 bg-light-green">
            <img src={favorite} alt="favorite-image" className="favorite w-10 h-10 mb-2"/>
                <p className="p text-start text-2xl mb-8">Impressions</p>
                <h3 className="h3 text-start text-4xl font-semibold">0</h3>
            </div>

            <div className="overview-grid-item border pt-10 pb-10 p-5 mt-8 bg-light-green">
                <img src={visibility} alt="visibility-image" className="visibility w-10 h-10 mb-2"/>
                <p className="p text-start text-2xl mb-8">Most ordered meal</p>
                <h3 className="h3 text-start text-4xl font-semibold">-</h3>
            </div>
        </section>

        <h2 className="recent-orders text-start mt-10 text-2xl font-semibold">Recent orders</h2>
        <section className="orders-section"></section>

        <h2 className="top-meals text-start mt-10 mb-6 text-2xl font-semibold">Top meals in your store</h2>
        <section className="top-meals-section grid grid-cols-3">
            <section>
                <img src={image2} alt="Jollof Rice" />
                <p className="text-start">Jollof Rice</p>
            </section>

            <section>
                <img src={image3} alt="Pepper Soup" />
                <p className="text-start">Pepper Soup</p>
            </section>

            <section>
                <img src={image1} alt="Nkwobi" />
                <p className="text-start">Nkwobi</p>
            </section>
        </section>
    </section>
  );
}

export default StorePerformance;
