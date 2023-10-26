import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import FetchMealItem from '../components/fetchMealItem';
import HomeNav from "../components/homeNav";
import SearchIcon from "../assets/icons/Search Icon.svg";
import Footer from "../components/Footer";


function Listings() {

    const [searchQuery, setSearchQuery] = useState('');
    const [userMeals, setUserMeals] = useState([]);
    const [userHasListings, setUserHasListings] = useState(false);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                // Check if the user is authenticated
                if (auth.currentUser) {
                    const mealsRef = collection(db, 'meals');
                    const q = query(mealsRef, where('userId', '==', auth.currentUser.uid));
                    const querySnapshot = await getDocs(q);

                    const mealData = [];
                    querySnapshot.forEach((doc) => {
                        mealData.push({ id: doc.id, ...doc.data() });
                    });
                    setUserMeals(mealData);

                    if (mealData.length > 0) {
                        setUserHasListings(true);
                    }
                } else {
                    // User is not authenticated; handle this case (e.g., redirect to login)
                }
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        fetchMeals();
    }, []);

    const filteredMeals = userMeals.filter((meal) =>
        meal.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <>
            <div>
                <HomeNav />
                <hr className='border-gray-400 -mt-6' />
                <div className='flex flex-col'>
                    <form onSubmit={(e) => e.preventDefault()} className="search-box relative flex justify-between items-center mx-8 mt-4 gap-4 ">
                        <img 
                            src={SearchIcon} 
                            alt="search-box" 
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-9 h-9 pl-4" />
                        <input 
                            type="text" 
                            name="query" 
                            placeholder="Search"
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className=" w-full pl-14 pr-4 py-2 rounded-lg text-gray-700 border-2 border-gray-200 " />
                    </form>
                    {auth.currentUser ? (
                        <Link to='/add-new-meal'>
                            <button className='w-40 ml-8 mt-4 px-5 py-1 bg-[#33cc9f] flex items-center gap-3 mb-12'>
                                <p className='text-[1.5rem]'>+</p>
                                <h3>Add meal</h3>
                            </button>
                        </Link>
                    ) : (
                        <p className='text-3xl text-center mt-12 mb-20 px-8 ' >
                            Oops! You need to be signed in to add a meal.
                        </p>
                    )}
                </div>
            </div>
            {userHasListings ? (
                <FetchMealItem allDocs={filteredMeals} />
            ) : (
                <p className='text-2xl text-center mt-8 mb-24 '>
                    Hurray, add your first meal!
                </p>
            )}
            <Footer />
        </>
    );
}

export default Listings;
