import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase';

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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {allDocs.map((meal) => (
                <div
                    key={meal.id}
                    className='bg-white rounded-lg overflow-hidden shadow-md'
                >
                    <div className='meal-image'>
                        <img
                            src=''
                            alt='Meal'
                            className='w-full h-32 object-cover'
                        />
                    </div>
                    <div className='p-4'>
                        <strong className='text-gray-800 text-lg font-semibold mb-2 block'>
                            {meal.name}
                        </strong>
                        <p className='text-gray-600 mb-2'>
                            <strong>Cost:</strong> ${meal.cost}
                        </p>
                        <p className='text-gray-600 mb-2'>
                            <strong>Location:</strong> {meal.location}
                        </p>
                        <p className='text-gray-600'>
                            <strong>Status:</strong> {meal.status}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FetchMealItem;
