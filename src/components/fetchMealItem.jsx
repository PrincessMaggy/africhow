import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase';
import Meal1 from "../assets/meals/fishtacos.jpg"

function FetchMealItem() {
    const [allDocs, setAllDocs] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'meals'));
                const mealData = [];
                querySnapshot.forEach((doc) => {
                    mealData.push({id: doc.id, ...doc.data()});
                });
                setAllDocs(mealData);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        fetchMeals();
    }, []);

    return (
        <div className='grid xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 mb-10 flex-wrap'>
            {allDocs.map((meal) => (
                <div
                    key={meal.id}
                    className='bg-white rounded-lg overflow-hidden shadow-md flex items-center gap-3 mx-8 '>
                    <div className='meal-image flex-basis-[33%]'>
                        {<img
                            src= {meal.imageUrl}
                            alt='Meal'
                            className='h-32 object-cover ml-4 py-3'
                        />}
                    </div>
                    <div className='p-4 text-left flex-basis-[66%]'>
                        <strong className='text-gray-500 text-[0.7rem] capitalize font-semibold mb-2 block '>
                            {meal.name}
                        </strong>
                        <p className='text-gray-400 mb-2 text-[0.6rem] md:text-xs lg:text-sm uppercase'>
                            {meal.category}
                        </p>
                        <p className="text-black mb-2 flex items-center">
                            <span className="mr-1">{meal.currency}</span>{meal.cost}
                        </p>
                                                
                        <div className='flex items-center'>
                            <div className={`w-2 h-2 md:w-3 md:h-3 sm:w-2 sm:h-2 rounded-full ${
                            meal.status === 'Available' ? 'bg-green-500' : 'bg-red-500'} mr-2`}>
                            </div>
                            <p className='text-gray-600 text-[0.6rem] md:base sm:text-xs'>
                                {meal.status}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FetchMealItem;
