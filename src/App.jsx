import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Support from "./pages/Support";
import Rewards from "./pages/Rewards";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Community from "./pages/Community";	
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
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
import Order from './components/Order/order';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleDropdown = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <Router>
            <Nav toggleMenu={toggleMenu} menuOpen={menuOpen} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/community' element={<Community />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/rewards' element={<Rewards />} />
                <Route path='/contact-us' element={<Support />} />
            </Routes>
            <Footer />
        </Router>
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
                <Route path='/order-summary' element={<Order/>} />
            </Routes>            
            {/* <Footer /> */}
        </>
    );
}

export default App;
