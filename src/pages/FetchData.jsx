import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { filterItemsBySearch } from '../utils/search';

function DataFetcher({ collectionPath, render }) {

  const currentUser = auth.currentUser;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser) {
          const userCollectionRef = collection(db, 'users', currentUser.uid, collectionPath);
          const q = query(userCollectionRef, where('userId', '==', currentUser.uid));

          const querySnapshot = await getDocs(q);
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
          });

          setData(items);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionPath, currentUser]);

  // Apply the search filter using the custom function
  const filteredData = filterItemsBySearch(data, searchQuery, 'name');

  if (loading) {
    // You can render a loading indicator here if needed.
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle the error state.
    return <div>Error: {error.message}</div>;
  }

  // Render the data using the render function provided in props.
  return render(data, filteredData);
}

export default DataFetcher;
