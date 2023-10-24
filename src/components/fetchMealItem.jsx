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
                    className='bg-white rounded-lg overflow-hidden shadow-md flex items-center gap-5 mx-8 '>
                    <div className='meal-image flex-basis-[33%]'>
                        <img
                            src= {Meal1}
                            alt='Meal'
                            className='h-32 object-cover ml-4'
                        />
                    </div>
                    <div className='p-4 text-left flex-basis-[66%]'>
                        <strong className='text-gray-500 text-[0.8rem] capitalize font-semibold mb-2 block '>
                            {meal.name}
                        </strong>
                        <p className='text-gray-400 mb-2 text-xs uppercase'>
                            <strong>Location:</strong> {meal.location}
                        </p>
                        <p className='text-black mb-2'>
                            <strong>Cost:</strong> ${meal.cost}
                        </p>
                        
                        <div className='flex items-center'>
                            <div className={`w-3 h-3 rounded-full ${
                            meal.status === 'Available' ? 'bg-green-500' : 'bg-red-500'} mr-2`}>
                            </div>
                            <p className='text-gray-600 text-xs'>
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
