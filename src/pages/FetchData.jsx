import { useState, useEffect } from 'react';
import { collection, getDocs, doc, query } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { useParams } from 'react-router-dom';

function FirebaseDataFetcher({ collectionPath, searchQuery, render }) {
  const { userId } = useParams();
  console.log(userId, 'userId');
  const [currentUser, setCurrentUser] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const userData = window.localStorage.getItem('user');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }

    const fetchData = async () => {
      try {
        if (currentUser) {
          const userCollectionRef = collection(db, 'users', currentUser.uid, collectionPath);
          const q = query(userCollectionRef);

          const querySnapshot = await getDocs(q);
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
          });

          setData(items);
          setFilteredData(items);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [collectionPath, currentUser]);

  useEffect(() => {
    if (searchQuery) {
      const filteredItems = data.filter(
        (item) =>
          item.name &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredItems);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  return render(filteredData);
}

export default FirebaseDataFetcher;
