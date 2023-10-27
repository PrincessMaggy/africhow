import ReedeemSucess from "../components/Rewards/ReedeemSucess"
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const SuccessRewards = () => {
  const { loggedIn } = useAuth();
    const navigate = useNavigate();

    if(!loggedIn){
        navigate('/login');
        // return null;
    }
  return (
    <ReedeemSucess />
  )
}

export default SuccessRewards