import CatalogDetailsPage from '../components/Rewards/catalog/CatalogDetails'
import { UserAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const CatalogDetails = () => {
  const { loggedIn } = UserAuth();
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