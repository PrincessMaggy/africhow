import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Rewards from "./pages/Rewards";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Community from "./pages/Community";
import './App.css';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import './index.css';


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
    );
}

export default App;