import VendorsTransaction from '../components/vendorsPayment/vendorsTransaction'
import { useAuth } from "../components/auth/AuthContext";
import { useNavigate } from 'react-router-dom';

const VendorTransactions = () => {
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    if(!loggedIn){
        navigate('/login');
        // return null;
    } 
  return (
    <VendorsTransaction />
  )
}

export default VendorTransactions