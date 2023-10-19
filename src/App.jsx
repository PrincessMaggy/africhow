
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import './App.css';
import Footer from './components/Footer'
import Nav from "./components/nav"
import {useState, useEffect} from 'react';
import './index.css';
import fetchRestaurantData from './lib/fetchData';
import EmailForm from './components/emailHandler';
import Allroutes from './Allroutes';


function App() {

    return (
        <Router>
         
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </Router>
        <>
        <Allroutes />
            {/* Vendor Support */}
            {/* <h1>Vendor support</h1>
            <EmailForm />
            <div>
                <h1>Meals</h1>
            </div>
            <div className='card'>
                <div>
                    <ul>
                        {data.map((menuItem, index) => (
                            <div key={index}>
                                <img src={menuItem.strCategoryThumb} />

                                <p>Name: {menuItem.strCategory}</p>
                                <p>
                                    Description:{' '}
                                    {menuItem.strCategoryDescription}
                                </p>
                                <p>Cost: ${menuItem.cost}</p>
                                <p>Location: {menuItem.location}</p>
                                <p>Status: {menuItem.status}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            </div> */}
        </>
    );
}

export default App;