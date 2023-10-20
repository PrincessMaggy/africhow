import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import './App.css';
import Footer from './components/Footer'
import Nav from "./components/Nav"
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
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;