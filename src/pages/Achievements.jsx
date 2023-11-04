import AchievementsPage from '../components/Rewards/Achievements';
import { UserAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const Achievements = () => {
    const { loggedIn } = UserAuth();
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
