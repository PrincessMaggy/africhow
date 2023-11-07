import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchIcon from '../assets/icons/Search Icon.svg';
import { Link } from 'react-router-dom';
import FirebaseDataFetcher from '../components/fet'; // Import the FirebaseDataFetcher component

const Listings = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Layout>
        <hr className="border-gray-400 -mt-6" />
        <div className="flex flex-col">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="search-box relative flex justify-between items-center mx-8 mt-4 gap-4"
          >
            <img
              src={SearchIcon}
              alt="search-box"
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

        <div className='grid xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 mb-10 flex-wrap'>
          {/* Use the FirebaseDataFetcher component here */}
          <FirebaseDataFetcher
            collectionPath="meals" // Adjust the collection path as needed
            searchQuery={searchQuery}
            render={(meals) => (
              meals.map((meal) => (
                <div
                  key={meal.id}
                  className='bg-white rounded-lg overflow-hidden shadow-md flex items-center gap-3 mx-8 '
                >
                  <div className='meal-image flex-basis-[33%]'>
                    {
                      <img
                        src={meal.imageUrl}
                        alt='Meal'
                        className='h-32 object-cover ml-4 py-3'
                      />
                    }
                  </div>
                  <div className='p-4 text-left flex-basis-[66%]'>
                    <strong className='text-gray-500 text-[0.7rem] capitalize font-semibold mb-2 block '>
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
                          meal.status === 'Available'
                            ? 'bg-green-500'
                            : 'bg-red-500'
                        } mr-2`}
                      ></div>
                      <p className='text-gray-600 text-[0.6rem] md:base sm:text-xs'>
                        {meal.status}
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>
              ))
            )}
          />
        </div>
      </Layout>
    </div>
  );
};

export default Listings;

