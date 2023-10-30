import {Route, Routes} from 'react-router-dom';
import './App.css';
import './index.css';

// importing pages

// importing pages

import Home from './pages/Home';
import Support from './pages/Support';
import Rewards from './pages/Rewards';
import Signup from './pages/Signup';
import OnBoardingSignUpForm from './pages/OnBoardingSignUpForm';

//import Cancelprofilecard from './pages/Cancelprofilecard';
//import Profilesavedsuccess from './pages/Profilesavedsuccess';
//import Profileerrormessage from './pages/Profileerrormessage';

import FormSuccess from './pages/FormSuccess';
import ConfirmPassword from './pages/ConfirmPassword';
import ForgotPassword from './pages/ForgotPassword';

//import Vendorworkhour from './pages/Vendorworkhour';
import Achievements from './pages/Achievements';
import Catalog from './pages/Catalog';
import CatalogDetails from './pages/CatalogDetails';
import EarnStars from './pages/EarnStars';
import VendorDashboard from './pages/VendorDashboard';
import VendorTransactions from './pages/VendorTransactions';
import VendorPayout from './pages/VendorPayout';
import Listings from './pages/MealListing';
import Login from './pages/Login';
import SuccessRewards from './pages/SuccessRewards';
import NewMeal from './pages/AddNewMeal';

// importing components
import StoreOverview from './components/storePerformance/StoreOverview';
import StorePerformance from './components/storePerformance/StorePerformance';
import VendorSupport from './components/VendorSupportPage/VendorSupport';
import SupportForm from './components/VendorSupportPage/SupportForm';
import SupportSuccess from './components/VendorSupportPage/SupportSuccess';
import Order from './components/Order/order';

import TrendingComponent from './components/community/trending';
import Post from './components/community/post';

import Blog from './components/community/blog';
import Recipes from './components/community/recipes';

function App() {
    return (
        <>
            <Routes>
                <Route path='/trending' element={<TrendingComponent />} />
                <Route path='/post' element={<Post />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/recipes' element={<Recipes />} />
                <Route path='/recipes/:recipe' element={<Recipes />} />

                <Route path='/' element={<Home />} />
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

                <Route path='/store-overview' element={<StoreOverview />} />
                <Route path='/success/:id' element={<SuccessRewards />} />
                <Route
                    path='/vendors-dashboard'
                    element={<VendorDashboard />}
                />
                <Route
                    path='/vendors-transaction'
                    element={<VendorTransactions />}
                />
                <Route
                    path='vendors-payout-method'
                    element={<VendorPayout />}
                />
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
                {/* <Route path='/passwordsuccess' element={<Pass} /> */}
                <Route path='/meallisting/:userId' element={<Listings />} />
                <Route path='/add-new-meal' element={<NewMeal />} />
                <Route
                    path='/account setup'
                    element={<OnBoardingSignUpForm />}
                />
                <Route
                    path='/login successful'
                    element={
                        <FormSuccess
                            text="Welcome back! You're in. Let the food journey begin."
                            buttonText='Go to dashboard'
                            title='Login Successful'
                            onNavigate={'/vendors-dashboard'}
                        />
                    }
                />
                <Route
                    path='/account created successfully'
                    element={
                        <FormSuccess
                            text="Congratulations! You're officially part of our delicious community. Let's get started!"
                            buttonText='Go to dashboard'
                            title='Your account has been created successfully!'
                            onNavigate={'/vendors-dashboard'}
                        />
                    }
                />
                <Route
                    path='/password reset successful'
                    element={
                        <FormSuccess
                            text='You have successfully changed your password. Please use the new password when logging in.'
                            buttonText='Login Now'
                            title='Password Reset Successful'
                            onNavigate={'/login'}
                        />
                    }
                />
                <Route path='/forgot password' element={<ForgotPassword />} />
                <Route path='/reset password' element={<ConfirmPassword />} />
                {/* <Route path='/incoming' element={<Incoming />} /> */}
                {/* <Route path='/outgoing' element={<Outgoing />} /> */}
                {/* <Route path='/history' element={<History />} /> */}
                {/* <Route path='/vendorprofile' element={<Vendorprofile />} /> */}
                {/* <Route path='/vendorworkhour' element={<Vendorworkhour/> }/> */}
                {/* <Route */}
                {/* path='/vendorprofilechange' */}
                {/* // element={<Vendorprofilechange />} */}
                {/* /> */}
                {/* <Route */}
                {/* path='/cancelprofilecard' */}
                {/* element={<Cancelprofilecard />} */}
                {/* /> */}
                {/* <Route path='/trending' element={<TrendingComponent />} /> */}
                {/* <Route path='/post' element={<Post />} /> */}
                {/* <Route path='/review card' element={<ReviewCard />} /> */}
                {/* <Route path='/review-reply' element={<ReviewReply />} /> */}
            </Routes>

            {/* the rewards page doesn't use this footer, can we import them in individual components insatead? */}
        </>
    );
}

export default App;
