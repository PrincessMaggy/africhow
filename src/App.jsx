import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

// importing pages
import Home from './pages/Home';
import Support from './pages/Support';
import Rewards from './pages/Rewards';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Community from './pages/Community';
import './App.css';
import './index.css';

// importing components
import Achievements from './components/Rewards/Achievements';
import Catalog from './components/Rewards/catalog/Catalog';
import EarnStars from './components/Rewards/EarnStars';
import CatalogDetails from './components/Rewards/catalog/CatalogDetails';
import VendorsDashboard from './components/vendorsPayment/vendorsDashboard';
import VendorsTransaction from './components/vendorsPayment/vendorsTransaction';
import StoreOverview from './components/storePerformance/StoreOverview';
import StorePerformance from './components/storePerformance/StorePerformance';
import VendorSupport from './components/VendorSupportPage/VendorSupport';
import SupportForm from './components/VendorSupportPage/SupportForm';
import Order from './components/Order/order';
import Nav from './components/nav';
import Footer from './components/Footer';

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
            <Nav
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                toggleDropdown={toggleDropdown}
            />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='community' element={<Community />} />
                <Route path='signup' element={<Signup />} />
                <Route path='login' element={<Login />} />
                <Route path='contact-us' element={<Support />} />

                <Route path='rewards' element={<Rewards />} />
                <Route path='rewards/my-rewards' element={<Achievements />} />
                <Route path='rewards/earn-stars' element={<EarnStars />} />
                <Route path='rewards/catalog' element={<Catalog />} />
                <Route
                    path='rewards/reward-details/:itemId'
                    element={<CatalogDetails />}
                />
                <Route
                    path='vendors-dashboard'
                    element={<VendorsDashboard />}
                />
                <Route
                    path='vendors-transaction'
                    element={<VendorsTransaction />}
                />
                <Route path='store-overview' element={< StoreOverview />} />
                <Route
                    path='store-performance'
                    element={<StorePerformance />}
                />
                <Route path='order-summary' element={<Order />} />
                <Route path='vendorsupport' element={<VendorSupport />} />
                <Route path='supportform' element={<SupportForm />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
