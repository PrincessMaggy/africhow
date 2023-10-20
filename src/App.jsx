import {Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/nav';
import './index.css';
import Rewards from './components/Rewards/Rewards.jsx';
import Achievements from './components/Rewards/Achievements.jsx';
import EarnStars from './components/Rewards/EarnStars.jsx';
import Catalog from './components/Rewards/catalog/Catalog.jsx';
import CatalogDetails from './components/Rewards/catalog/CatalogDetails.jsx';
import VendorsDashboard from './components/vendorsPayment/vendorsDashboard.jsx';
import VendorsTransaction from './components/vendorsPayment/vendorsTransaction.jsx';
import StoreOverview from './components/storePerformance/StoreOverview.jsx';
import StorePerformance from './components/storePerformance/StorePerformance.jsx';

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
                <Route path='/rewards' element={<Rewards />} />
                <Route path='/my-rewards' element={<Achievements />} />
                <Route path='/earn-stars' element={<EarnStars />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/reward-details' element={<CatalogDetails />} />
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
            </Routes>            
            <Footer />
        </>
    );
}

export default App;
