import {Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/nav';
import './index.css';
import Rewards from './components/Rewards/Rewards';
import Achievements from './components/Rewards/Achievements';
import EarnStars from './components/Rewards/EarnStars';
import Catalog from './components/Rewards/catalog/Catalog';
import CatalogDetails from './components/Rewards/catalog/CatalogDetails';
import VendorsDashboard from './components/vendorsPayment/vendorsDashboard';
import VendorsTransaction from './components/vendorsPayment/vendorsTransaction';
import StoreOverview from './components/storePerformance/StoreOverview';
import StorePerformance from './components/storePerformance/StorePerformance';
<<<<<<< HEAD
import VendorSupport from './components/VendorSupport';
import SupportForm from './components/SupportForm';
=======
import Order from './components/Order/order';
>>>>>>> 870740245f0ce07d9d59c89b18cb04adec1f9f30

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleDropdown = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            {/* <Nav
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                toggleDropdown={toggleDropdown}
            /> */}
            <Routes>
                <Route path='/' element={<Home />} />
                    <Route path='/rewards' element={<Rewards />} />
                    <Route path='/rewards/my-rewards' element={<Achievements />} />
                    <Route path='/rewards/earn-stars' element={<EarnStars />} />
                    <Route path='/rewards/catalog' element={<Catalog />} />
                    <Route path='/rewards/reward-details' element={<CatalogDetails />} />
                <Route
                    path='/vendorDashboard'
                    element={<VendorsDashboard />}
                />
                <Route
                    path='/vendors-transaction'
                    element={<VendorsTransaction />}
                />
                <Route path='/store-overview' element={<StoreOverview />} />
                <Route path='/store-performance' element={<StorePerformance />} />
<<<<<<< HEAD
                <Route path='/vendor-support' element={<VendorSupport />} />
                <Route path='/support-form' element={<SupportForm />} />
=======
                <Route path='/order-summary' element={<Order/>} />
>>>>>>> 870740245f0ce07d9d59c89b18cb04adec1f9f30
            </Routes>            
            {/* <Footer /> */}
        </>
    );
}

export default App;
