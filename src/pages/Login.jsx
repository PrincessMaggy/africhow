import {Link} from 'react-router-dom';
import SignIn from '../components/auth/signin';

const Login = () => {
    return (
        <div>
            <SignIn />
            Do not have an account yet?
            <Link to='/signup'>create an account here.</Link>
        </div>
    );
};

export default Login;
