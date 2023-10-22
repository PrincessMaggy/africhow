import {useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../firebase';

function AddMealItem() {
    const initialMealItem = {
        name: '',
        cost: '',
        location: '',
        status: '',
    };
    const [mealItem, setMealItem] = useState(initialMealItem);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMealItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addMealItem = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'meals'), {
                name: mealItem.name,
                cost: mealItem.cost,
                location: mealItem.location,
                status: mealItem.status,
            });

            console.log('Document written with ID: ', docRef.id);
            alert('Meal created successfully!');
            setMealItem(initialMealItem); // Reset fields after successful submission
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            onSubmit={addMealItem}
        >
            <div className='mb-4'>
                <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='name'
                >
                    Name of meal
                </label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline'
                    id='name'
                    name='name'
                    type='text'
                    value={mealItem.name}
                    onChange={handleChange}
                    placeholder='Input name of food item'
                    autoComplete='current-meal'
                />
            </div>

            <div className='mb-4'>
                <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='location'
                >
                    Location
                </label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='location'
                    type='text'
                    value={mealItem.location}
                    name='location'
                    placeholder='Input your store location'
                    onChange={handleChange}
                    autoComplete='current-location'
                />
            </div>

            <div className='mb-4'>
                <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='cost'
                >
                    Cost
                </label>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='cost'
                    type='number'
                    name='cost'
                    value={mealItem.cost}
                    onChange={handleChange}
                    placeholder='Input cost of food item'
                    autoComplete='current-cost'
                />
            </div>

            <label
                htmlFor='status'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
                Select an option
            </label>
            <select
                id='status'
                name='status'
                onChange={handleChange}
                value={mealItem.status}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
                <option value=''>Choose status</option>
                <option value='Available'>Available</option>
                <option value='Not Available'>Not Available</option>
            </select>

            <div className='flex items-center justify-between'>
                <button
                    className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                >
                    Add item
                </button>
            </div>
        </form>
    );
}

export default AddMealItem;
