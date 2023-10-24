import {Route, Routes} from 'react-router-dom';


// importing pages
import Home from './pages/Home';
import Support from './pages/Support';
import Rewards from './pages/Rewards';
import Signup from './pages/Signup';
// import Login from './pages/Login';
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
import SupportSuccess from './components/VendorSupportPage/SupportSuccess';
import Order from './components/Order/order';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginForm from './pages/LoginForm';
import OnBoardingSignUpForm from './pages/OnBoardingSignUpForm';
import FormSuccess from './pages/FormSuccess';
// import Loader from './components/LoaderOnboarding';
import ConfirmPassword from './pages/ConfirmPassword';
import ForgotPassword from './pages/ForgotPassword';

// for sample
import Listings from './mapping/mealListing';

// import OrderManagement from './pages/OrderManagement';
import Outgoing from './components/OrderManagement/Outgoing'
import Incoming from './components/OrderManagement/Incoming'
import History from './components/OrderManagement/History'
import Layout from './components/OrderManagement/Layout/Layout'



import NewMeal from './components/addMealItem';
import ReviewCard from './pages/ReviewCard';

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/community' element={<Community />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/login' element={<Login />} /> */}
                <Route path='/contact-us' element={<Support />} />
                <Route path='/community' element={<Community />} />
                {/* <Route path='/signup' element={<Signup />} /> */}
                {/* <Route path='/login' element={<Login />} /> */}

                <Route path='/contact-us' element={<Support />} />

                <Route path='/rewards' element={<Rewards />} />
                <Route path='/rewards/my-rewards' element={<Achievements />} />
                <Route path='/rewards/earn-stars' element={<EarnStars />} />
                <Route path='/rewards/catalog' element={<Catalog />} />
                <Route
                    path='/rewards/reward-details/:itemId'
                    element={<CatalogDetails />}
                />
                <Route
                    path='/vendors-dashboard'
                    element={<VendorsDashboard />}
                />
                <Route
                    path='/vendors-transaction'
                    element={<VendorsTransaction />}
                />
                <Route path='/store-overview' element={< StoreOverview />} />
                <Route
                    path='/store-performance'
                    element={<StorePerformance />}
                />
                <Route path='/order-summary' element={<Order />} />
                <Route path='/vendorsupport' element={<VendorSupport />} />
                <Route path='/supportform' element={<SupportForm />} />
                <Route path='/order-summary' element={<Order />} />
                <Route path='/vendorsupport' element={<VendorSupport />} />
                <Route path='/supportform' element={<SupportForm />} />
                <Route path='/supportsuccess' element={<SupportSuccess />} />

                {/*   sample  */}
                <Route path='/meallisting' element={<Listings />} />
                <Route path='/add-new-meal' element={<NewMeal />} />


                <Route path='/header' element={<Header />} />
                <Route path='/login' element={<LoginForm />} />
                <Route
                    path='/account setup'
                    element={<OnBoardingSignUpForm />}
                />
                <Route path='/login successful' element={<FormSuccess />} />
                <Route path='/forgot password' element={<ForgotPassword />} />
                <Route path='/confirm password' element={<ConfirmPassword />} />

                <Route path='/' element={<Layout/>}>
                    <Route path='/incoming' element={<Incoming/>} />
                    <Route path='/outgoing' element={<Outgoing />} />
                    <Route path='/history' element={<History />} />
                    
                </Route>
                <Route path='/review card' element={<ReviewCard />} />

                
            </Routes>
            <Footer />
        </>
    );
}

export default App;
