import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import FetchMealItem from '../components/fetchMealItem';
import HomeNav from "../components/homeNav";
import SearchIcon from "../assets/icons/Search Icon.svg";


function Listings() {

    const [searchQuery, setSearchQuery] = useState('');
    const [allDocs, setAllDocs] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'meals'));
            const mealData = [];
            querySnapshot.forEach((doc) => {
              mealData.push({ id: doc.id, ...doc.data() });
            });
            setAllDocs(mealData);
          } catch (error) {
            console.error('Error fetching meals:', error);
          }
        };
    
        fetchMeals();
      }, []);

    const filteredMeals = allDocs.filter((meal) =>
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
                    <Link to='/add-new-meal'>
                        <button className=' w-40 ml-8 mt-4 px-5 py-1 bg-[#33cc9f] flex items-center gap-3 mb-12'>
                            <p className='text-[1.5rem]'>+</p>
                            <h3>Add meal</h3>
                        </button>
                    </Link>
                </div>
            </div>
            <FetchMealItem allDocs={filteredMeals} />
        </>
    );
}

export default Listings;
