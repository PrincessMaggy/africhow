import {Route, Routes} from 'react-router-dom';


// importing pages
import Home from './pages/Home';
import Support from './pages/Support';
import Rewards from './pages/Rewards';
import Signup from './pages/Signup';

import './App.css';
import './index.css';

// importing components
import Achievements from './components/Rewards/Achievements';
import Catalog from './components/Rewards/catalog/Catalog';
import EarnStars from './components/Rewards/EarnStars';
import CatalogDetails from './components/Rewards/catalog/CatalogDetails';
import StoreOverview from './components/storePerformance/StoreOverview';
import StorePerformance from './components/storePerformance/StorePerformance';
import VendorSupport from './components/VendorSupportPage/VendorSupport';
import SupportForm from './components/VendorSupportPage/SupportForm';
import SupportSuccess from './components/VendorSupportPage/SupportSuccess';
import Order from './components/Order/order';
import Footer from './components/Footer';
import Notification from "./components/Notification/notification";
import NotificationSuccess from "./components/Notification/notificationSuccesful"
import Header from './components/Header';
//import LoginForm from './pages/LoginForm';
import OnBoardingSignUpForm from './pages/OnBoardingSignUpForm';
import FormSuccess from './pages/FormSuccess';
// import Loader from './components/LoaderOnboarding';
import ConfirmPassword from './pages/ConfirmPassword';
import ForgotPassword from './pages/ForgotPassword';
import TrendingComponent from './components/community/trending';
import Post from './components/community/post';
import Blog from './components/community/blog';
import Recipes from './components/community/recipes';



// for sample
import Listings from './mapping/mealListing';

// import OrderManagement from './pages/OrderManagement';
import Outgoing from './components/OrderManagement/Outgoing'
import Incoming from './components/OrderManagement/Incoming'
import History from './components/OrderManagement/History'
import Layout from './components/OrderManagement/Layout/Layout'



import NewMeal from './components/addMealItem';
import ReviewCard from './pages/ReviewCard';
import ReviewReply from './pages/ReviewReply';

function App() {

    return (
        <>
            <Routes>
        
 
                <Route path ="/trending" element = {<TrendingComponent/>}/>
                <Route path= "/post" element = {<Post/>}/>
                <Route path= "/blog" element = {<Blog/>}/>
                <Route path= "/recipes" element = {<Recipes/>}/>
    
                          
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/login' element={<Login />} /> */}
                <Route path='/contact-us' element={<Support />} />
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
                
                <Route path='/store-overview' element={< StoreOverview />} />
                <Route
                    path='/store-performance'
                    element={<StorePerformance />}
                />
                <Route path='/order-summary' element={<Order />} />
                <Route path='/vendorsupport' element={<VendorSupport />} />
                <Route path='/supportform' element={<SupportForm />} />

                <Route path='/notification' element={<Notification />} />
                <Route path='/updatedsuccesfully' element={<NotificationSuccess />} />

                <Route path='/order-summary' element={<Order />} />
                <Route path='/vendorsupport' element={<VendorSupport />} />
                <Route path='/supportform' element={<SupportForm />} />
                <Route path='/supportsuccess' element={<SupportSuccess />} />

                {/*   sample  */}
                <Route path='/meallisting' element={<Listings />} />
                <Route path='/add-new-meal' element={<NewMeal />} />


                <Route path='/header' element={<Header />} />
                <Route
                    path='/account setup'
                    element={<OnBoardingSignUpForm />}
                />
                <Route path='/login successful' element={<FormSuccess />} />
                <Route path='/forgot password' element={<ForgotPassword />} />
                <Route path='/confirm password' element={<ConfirmPassword />} />

                <Route path='/layout' element={<Layout/>}/>
                    <Route path='/incoming' element={<Incoming/>} />
                    <Route path='/outgoing' element={<Outgoing />} />
                    <Route path='/history' element={<History />} />
                    
             
                <Route path='/review card' element={<ReviewCard />} />
                <Route path='/review-reply' element={<ReviewReply />} />

                
            </Routes>

          
           
        </>
    );
}

export default App;
