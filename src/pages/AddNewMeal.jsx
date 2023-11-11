import React from 'react';
import Layout from '../components/Layout';
import AddDataComponent from '../components/AddData';

const AddMeal = () => {
  const initialMealData = {
    name: '',
    category: '',
    currency: '',
    cost: '',
    status: '',
  };

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
    <Layout>
      <div className="sm:max-w-lg mx-auto pt-12 px-4 bg-white shadow-md rounded pb-36">
        <AddDataComponent
          collectionPath="meals" 
          initialData={initialMealData}
          style="p-4" 
          storagePath="meal-images"
          categoryOptions={categoryOptions}
          currencyOptions={currencyOptions}
          statusOptions={statusOptions}
          
        />
      </div>
    </Layout>
  );
};

export default AddMeal;
