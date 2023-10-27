import VendorsPayoutMethod from '../components/vendorsPayment/VendorsPayoutMethod'
import { useAuth } from '../components/auth/AuthContext'
import { useNavigate } from 'react-router-dom';

const VendorPayout = () => {
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    if(!loggedIn){
        navigate('/login');
        // return null;
    } 
  return (
    <VendorsPayoutMethod />
  )
}

export default VendorPayout