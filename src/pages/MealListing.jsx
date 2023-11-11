
import React, { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { MdSearch } from 'react-icons/md'
import { db } from '../../firebase';
import { UserAuth } from '../components/auth/AuthContext';
import { Link } from 'react-router-dom';
import { filterItemsBySearch } from '../utils/search';
import Layout from '../components/Layout';

const MealListing = () => {
  const { user } = UserAuth();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (user?.uid) {
        const mealsCollection = collection(db, `users/${user.uid}/meals`);

        try {
        const querySnapshot = await getDocs(mealsCollection);

        const mealData = [];
        querySnapshot.forEach((doc) => {
          mealData.push({ id: doc.id, ...doc.data() });
        });

        setMeals(mealData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meals:', error);
        setLoading(false);
      }
    }
  };

    fetchData();
  }, [user]);

  const filteredData = filterItemsBySearch(meals, searchQuery, 'name'); 

  return (
    <div>
      <Layout>
      <hr className="border-gray-400 -mt-6" />
        <div className="flex flex-col">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="search-box relative flex justify-between items-center mx-8 mt-4 gap-4"
          >
            <MdSearch
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-9 h-9 pl-4"
            />
            <input
              type="text"
              name="query"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-2 rounded-lg text-gray-700 border-2 border-gray-200"
            />
          </form>
          <Link to="/add-new-meal">
            <button className="w-40 ml-8 mt-4 px-5 py-1 bg-[#33cc9f] flex items-center gap-3 mb-12">
              <p className="text-[1.5rem]">+</p>
              <h3>Add meal</h3>
            </button>
          </Link>
        </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='grid xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 mb-10 flex-wrap'>
          {filteredData.map((meal) => (
            <div key={meal.id} className='bg-white rounded-lg overflow-hidden shadow-md flex items-center gap-3 mx-8'>
             <div className='meal-image flex-basis-[33%]'>
              {meal.imageUrl && (
                  <img src={meal.imageUrl} alt="Meal Image" style={{ maxWidth: '200px' }} />
                )}
             </div>
             <div className='p-4 text-left flex-basis-[66%]'>
                <strong className='text-gray-500 text-[0.7rem] capitalize font-semibold mb-2 block'>
                  <Link to={`/meallisting/${meal.id}/edit`}>
                    {meal.name}
                  </Link>
                </strong>
                <p className='text-gray-400 mb-2 text-[0.6rem] md:text-xs lg:text-sm uppercase'>
                  {meal.category}
                </p>
                <p className='text-black mb-2 flex items-center'>
                  <span className='mr-1'>{meal.currency}</span>
                  {meal.cost}
                </p>
                <div className='flex items-center'>
                <div
                  className={`w-2 h-2 md:w-3 md:h-3 sm:w-2 sm:h-2 rounded-full ${
                    meal.status === 'Available' ? 'bg-green-500' : 'bg-red-500'
                  } mr-2`}
                ></div>
                  <p className='text-gray-600 text-[0.6rem] md:base sm:text-xs'>
                    {meal.status}
                  </p>
                </div>
            </div>
              
            </div>
          ))}
        </div>
      )}
      </Layout>
    </div>
  )
  };

export default MealListing;
