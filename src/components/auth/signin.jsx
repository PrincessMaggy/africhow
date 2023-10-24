import {useState} from 'react';
import {auth} from '../../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import AuthDetails from './authDetails';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((err) => {
                console.log(err, 'err');
            });
    };

    return (
        <>
            <h4>sign in</h4>
            <AuthDetails />
            <div className='w-full max-w-xs'>
                <form
                    className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                    onSubmit={handleSignIn}
                >
                    <div className='mb-4'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='email'
                        >
                            Email
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            type='email'
                            placeholder='Input your email'
                            value={email}
                            autoComplete='current-email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='password'
                        >
                            Password
                        </label>
                        <input
                            className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                            id='password'
                            type='password'
                            placeholder='***********'
                            value={password}
                            autoComplete='current-password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className='text-red-500 text-xs italic'>
                            Please choose a password.
                        </p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            type='submit'
                        >
                            Sign In
                        </button>
                        <a
                            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                            href='#'
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignIn;
