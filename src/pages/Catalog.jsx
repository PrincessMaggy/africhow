import CatalogPage from '../components/Rewards/catalog/Catalog'
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  if(!loggedIn){
      navigate('/login');
      // return null;
  }

  return (
    <>
        <CatalogPage />
    </>
  )
}

export default Catalog