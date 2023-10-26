import EarnStarsPage from '../components/Rewards/EarnStars'
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const EarnStars = () => {
  const { loggedIn } = useAuth();
    const navigate = useNavigate();

    if(!loggedIn){
        navigate('/login');
        // return null;
    } 
  return (
    <>
        <EarnStarsPage />
    </>
  )
}

export default EarnStars