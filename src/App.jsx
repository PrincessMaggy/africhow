import {useState, useEffect} from 'react';
import './App.css';
import './index.css';

// importing components
import Achievements from './components/Rewards/Achievements';
import EarnStars from './components/Rewards/EarnStars';
import Catalog from './components/Rewards/catalog/Catalog';
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
import Header from './components/Header';
import LoginForm from './pages/LoginForm';
import { Route, Routes } from 'react-router-dom';
import OnBoardingSignUpForm from './pages/OnBoardingSignUpForm';
import FormSuccess from './components/FormSuccess';
import Loader from './components/LoaderOnboarding';
import ConfirmPassword from './pages/ConfirmPassword';
import ForgotPassword from './pages/ForgotPassword';

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
            {/* <Nav
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                toggleDropdown={toggleDropdown}
            /> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/community' element={<Community />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contact-us' element={<Support />} />

                <Route path='/rewards' element={<Rewards />} />
                <Route path='/rewards/my-rewards' element={<Achievements />} />
                <Route path='/rewards/earn-stars' element={<EarnStars />} />
                <Route path='/rewards/catalog' element={<Catalog />} />
                <Route
                    path='/rewards/reward-details/:itemId'
                    element={<CatalogDetails />}
                />
                <Route path='/vendors-dashboard' element={<VendorsDashboard />} />
                <Route
                    path='/vendors-transaction'
                    element={<VendorsTransaction />}
                />
                <Route path='/store-overview' element={<StoreOverview />} />
                <Route
                    path='/store-performance'
                    element={<StorePerformance />}
                />
                <Route path='/order-summary' element={<Order />} />
                <Route path='/vendorsupport' element={<VendorSupport />} />
                <Route path='/supportform' element={<SupportForm />} />
            </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;
