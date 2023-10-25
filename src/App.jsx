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
import Order from './components/Order/order';
import Footer from './components/Footer';
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



// for sample
import Listings from './mapping/mealListing';
import NewMeal from './components/addMealItem';
function App() {

    return (
        <>
            <Routes>
        
          //
                <Route path ="/trending" element = {<TrendingComponent/>}/>
                <Route path= "/post" element = {<Post/>}/>
                <Route path= "/blog" element = {<Blog/>}/>
                            </Routes>
            <Footer />
           
        </>
    );
}

export default App;
