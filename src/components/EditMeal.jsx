{/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import UpdateDataForm from '../components/UpdateData';
import { UserAuth } from '../components/auth/AuthContext';
import { db, storage, auth } from '../../firebase';
import Layout from './Layout';

const EditMeal = () => {
  const { mealId } = useParams();
  const [mealData, setMealData] = useState(null);
  const [mealImageURL, setMealImageURL] = useState('');
  const { user } = UserAuth();

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        // Fetch the specific meal based on the mealId
        const mealRef = doc(db, 'users', user.uid, 'meals', mealId);
        const mealSnapshot = await getDoc(mealRef);
        if (mealSnapshot.exists()) {
          const meal = { id: mealSnapshot.id, ...mealSnapshot.data() };
          setMealData(meal);
          setUploadedImageUrl(mealData.imageUrl);
        }
      } catch (error) {
        console.error('Error fetching meal:', error);
      }
    };

    fetchMeal();
  }, [mealId, user]);*/}


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import UpdateDataForm from '../components/UpdateData';
import { UserAuth } from '../components/auth/AuthContext';
import { db, storage } from '../../firebase';
import Layout from './Layout';

const EditMeal = () => {
  const { mealId } = useParams();
  const [item, setItem] = useState(null);
  const { user } = UserAuth();

  useEffect(() => {
    // Fetch the user data to edit
    const fetchData = async () => {
      try {
        // Ensure user is not null before accessing uid
        if (user) {
          const mealRef = doc(db, 'users', user.uid, 'meals', mealId);
          const userSnapshot = await getDoc(mealRef);

          if (userSnapshot.exists()) {
            setItem({
              id: userSnapshot.id,
              ...userSnapshot.data(),
            });
          }
        } else {
          console.error('User is null.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();
  }, [mealId, user]);


  const categoryOptions = [
    { label: 'North African Cuisine', value: 'north african' },
    { label: 'South African Cuisine', value: 'south african' },
    { label: 'West African Cuisine', value: 'west african' },
    { label: 'East African Cuisine', value: 'east african' },
    { label: 'Central African Cuisine', value: 'central african' },
    { label: 'Special Dishes', value: 'special dishes' },
  ];

  const currencyOptions = [
    { label: 'USD', value: '$' },
    { label: 'CAD', value: 'CAD' },
    { label: 'Pounds', value: '£' },
  ];

  const statusOptions = [
    { label: 'Available', value: 'Available' },
    { label: 'Not Available', value: 'Not Available' },
  ];


  return (
    <div>
      <Layout>
      {item ? (
        <>
          <UpdateDataForm
            type="meal"
            itemData={item}
            storagePath="meal-images/"
            collectionPath="meals"
            style="px-8"
            categoryOptions={categoryOptions}
            currencyOptions={currencyOptions}
            statusOptions={statusOptions}
            
            mode="meal"
          />
        </>
      ) : (
        <p>Loading meal data...</p>
      )}
      </Layout>
    </div>
  );
};

export default EditMeal;

