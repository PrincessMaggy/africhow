import ReedeemSucess from "../components/Rewards/ReedeemSucess"
import { UserAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const SuccessRewards = () => {
  const { loggedIn } = UserAuth();
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