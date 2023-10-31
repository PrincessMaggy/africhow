import {useState, useEffect} from 'react';
import {collection, getDocs, where, query} from 'firebase/firestore';
import {db, auth} from '../../firebase';
import { useParams, Link } from 'react-router-dom';
import HomeNav from '../components/homeNav';
import SearchIcon from '../assets/icons/Search Icon.svg';
import Footer from '../components/Footer';
import {useAuth} from '../components/auth/AuthContext';
import NewNavbar from '../components/NewNav/NewNavBar';
import FetchMealItem from '../components/FetchMealItem';

function Listings() {
    const [searchQuery, setSearchQuery] = useState('');
    const [userMeals, setUserMeals] = useState([]);
    const [userHasListings, setUserHasListings] = useState(false);

    const {userId} = useParams();
    const { loggedIn } = useAuth();

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                // Check if the user is authenticated
                if (auth.currentUser) {
                    const mealsRef = collection(
                        db,
                        'users',
                        auth.currentUser.uid,
                        'meals',
                    );
                    const q = query(
                        mealsRef,
                        where('userId', '==', auth.currentUser.uid),
                    );
                    const querySnapshot = await getDocs(q);

                    const mealData = [];
                    querySnapshot.forEach((doc) => {
                        mealData.push({id: doc.id, ...doc.data()});
                    });
                    setUserMeals(mealData);
                    setUserHasListings(mealData.length > 0);

                    if (mealData.length > 0) {
                        setUserHasListings(true);
                    }

                    console.log('Fetched meals:', mealData);
                }
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        if (loggedIn) {
          fetchMeals();
      }
  }, [loggedIn]);

    const filteredMeals = userMeals.filter((meal) => {
        if (meal && meal.name) {
            return meal.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
    });
  

    return (
        <>
          <div>
              <NewNavbar />
              {/* <HomeNav /> */}
              {/*<hr className='border-gray-400 -mt-6' />*/}
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
          </div>
          {loggedIn ? (
                userHasListings ? (
                    <FetchMealItem userHasListings={userHasListings} allDocs={filteredMeals} />
                ) : (
                    <p className='text-2xl text-center mt-8 mb-24'>Hurray, add your first meal!</p>
                )
            ) : (
                <p className='text-2xl text-center mt-8 mb-24 p-12 bg-white rounded-sm border-2 shadow-md mx-12'>
                    Please <Link to='/login' className='text-[#33cc9f]'>log in</Link> to see your listings.
                </p>
            )}
              
              {/*<p className='h-full text-2xl text-center mt-8 mb-24 p-12 bg-white rounded-sm border-2 shadow-md mx-12'>
                  2-step Log in to see all listings. Kindly log in again.
              </p>
            )*/}
          <Footer />
      </>
    );
}

export default Listings;
