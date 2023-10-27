import AchievementsPage from '../components/Rewards/Achievements';
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const Achievements = () => {
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    if(!loggedIn){
        navigate('/login');
        // return null;
    }
    return (
        <>
            <AchievementsPage />
        </>
    );
};

export default Achievements;
