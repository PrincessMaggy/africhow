import {useState, useEffect} from 'react';
import FetchMeal from '../components/fetchMealItem';
import Layout from '../components/Layout';
import SearchIcon from '../assets/icons/Search Icon.svg';
import {collection, query, onSnapshot, doc} from 'firebase/firestore';

import {db, auth} from '../../firebase';
import {Link, useParams} from 'react-router-dom';

const Listings = () => {
    const {userId} = useParams();
    console.log(userId, 'userId');
    const [meals, setMeals] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    // Load user data and meals data from local storage on initial render
    useEffect(() => {
        const userData = window.localStorage.getItem('user');
        if (userData) {
            setCurrentUser(JSON.parse(userData));
        }

        const mealsData = window.localStorage.getItem('meallisting');
        if (mealsData) {
            setMeals(JSON.parse(mealsData));
        }
    }, []);

    useEffect(() => {
        if (currentUser) {
            const userRef = doc(db, 'users', currentUser.uid);
            const mealsRef = collection(userRef, 'meals');
            const q = query(mealsRef);

            // Subscribe to the query and update the state
            const unsubscribeMeals = onSnapshot(q, (snapshot) => {
                const mealData = [];
                snapshot.forEach((doc) => {
                    mealData.push({id: doc.id, ...doc.data()});
                });
                setMeals(mealData);

                // Save updated meals data to local storage
                window.localStorage.setItem(
                    'meallisting',
                    JSON.stringify(mealData),
                );
            });

            // Create a user snapshot to update user data in real-time
            const userSnapshot = onSnapshot(userRef, (snapshot) => {
                const userData = {id: snapshot.id, ...snapshot.data()};
                setCurrentUser(userData);

                // Save updated user data to local storage
                window.localStorage.setItem('user', JSON.stringify(userData));
            });

            return () => {
                unsubscribeMeals();
                userSnapshot();
            };
        }
    }, [currentUser]);

    return (
        <div>
            <Layout>
                <hr className='border-gray-400 -mt-6' />
                <div className='flex flex-col'>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className='search-box relative flex justify-between items-center mx-8 mt-4 gap-4'
                    >
                        <img
                            src={SearchIcon}
                            alt='search-box'
                            className='absolute left-2 top-1/2 transform -translate-y-1/2 w-9 h-9 pl-4'
                        />
                        <input
                            type='text'
                            name='query'
                            placeholder='Search'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full pl-14 pr-4 py-2 rounded-lg text-gray-700 border-2 border-gray-200'
                        />
                    </form>
                    <Link to='/add-new-meal'>
                        <button className='w-40 ml-8 mt-4 px-5 py-1 bg-[#33cc9f] flex items-center gap-3 mb-12'>
                            <p className='text-[1.5rem]'>+</p>
                            <h3>Add meal</h3>
                        </button>
                    </Link>
                </div>

                {meals && <FetchMeal searchQuery={searchQuery} />}
            </Layout>
        </div>
    );
};

export default Listings;
