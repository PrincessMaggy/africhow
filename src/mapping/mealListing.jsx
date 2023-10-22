import {useState, useEffect} from 'react';
import restaurantData from '../lib/restaurantData';
import EmailForm from '../components/emailHandler';
import AddMealItem from '../components/addMealItem';

function Listings() {
    const [data, setData] = useState([]);

    useEffect(() => {
        restaurantData()
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            {/* Vendor Support */}
            <h1>Vendor support</h1>
            <EmailForm />
            <div>
                <h1>Meals</h1>
            </div>
            <AddMealItem />
            <div className='card'>
                <div>
                    <ul>
                        {data.map((menuItem, index) => (
                            <div key={index}>
                                <img src={menuItem.strCategoryThumb} />

                                <p>Name: {menuItem.strCategory}</p>
                                <p>
                                    Description:{' '}
                                    {menuItem.strCategoryDescription}
                                </p>
                                <p>Cost: ${menuItem.cost}</p>
                                <p>Location: {menuItem.location}</p>
                                <p>Status: {menuItem.status}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Listings;
