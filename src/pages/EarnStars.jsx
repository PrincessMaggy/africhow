import EarnStarsPage from '../components/Rewards/EarnStars'
import { UserAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const EarnStars = () => {
  const { loggedIn } = UserAuth();
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