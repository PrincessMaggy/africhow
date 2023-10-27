import RewardsPage from "../components/Rewards/Rewards";
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const Rewards = () => {
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    if(!loggedIn){
        navigate('/login');
        // return null;
    } 
    return (
        <>
            <RewardsPage />
        </>
    );
};

export default Rewards;
