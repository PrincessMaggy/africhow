import CatalogDetailsPage from '../components/Rewards/catalog/CatalogDetails'
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const CatalogDetails = () => {
  const { loggedIn } = useAuth();
    const navigate = useNavigate();

    if(!loggedIn){
        navigate('/login');
        // return null;
    } 
  return (
    <>
        <CatalogDetailsPage />
    </>
  )
}

export default CatalogDetails