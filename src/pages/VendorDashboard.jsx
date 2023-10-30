import VendorsDashboard from '../components/vendorsPayment/vendorsDashboard';
import {useAuth} from '../components/auth/AuthContext';
import {useNavigate} from 'react-router-dom';

const VendorDashboard = () => {
    const {loggedIn} = useAuth();
    const navigate = useNavigate();

    if (!loggedIn) {
        navigate('/login');
        // return null;
    }
    return <VendorsDashboard />;
};

export default VendorDashboard;
