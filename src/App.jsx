import {useState, useEffect} from 'react';
import './App.css';
import fetchRestaurantData from './lib/fetchData';
import EmailForm from './components/emailHandler';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import { Route, Routes } from 'react-router-dom';
import OnBoardingSignUpForm from './components/onBoardingSignUpForm';
import FormSuccess from './components/FormSuccess';
import Loader from './components/LoaderOnboarding';
import ConfirmPassword from './components/ConfirmPassword';
import ForgotPassword from './components/ForgotPassword';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchRestaurantData()
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Routes>
                <Route path="/header" element={<Header />}/>
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/account setup" element={<OnBoardingSignUpForm/>}/>
                <Route path="/login successful" element={<FormSuccess/>}/>
                <Route path="/forgot password" element={<ForgotPassword/>}/>
                <Route path="/confirm password" element={<ConfirmPassword/>}/>
            </Routes>
            {/* <Loader /> */}
            {/* <Header/> */}
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
