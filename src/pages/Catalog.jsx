import CatalogPage from '../components/Rewards/catalog/Catalog'
import { UserAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
  const { loggedIn } = UserAuth();
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