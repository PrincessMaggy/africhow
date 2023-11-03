import {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import PasswordEye from '../assets/eye-slash.png';
import PasswordEye2 from '../assets/Icon.png';
import '../onboardingloginsignup.css';
import OnboardingWelcome from '../components/OnboardingWelcome';
import Loader from '../components/LoaderOnboarding';
import {auth} from '../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
   

    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState, reset} = useForm();
    const {errors} = formState;
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    function onSubmit(data) {
        const {email, password} = data;
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential, 'userCredential');
                navigate('/login%20successful');
                navigate(`/meallisting/${userId}`);

            })
            .catch((err) => {
                console.log(err, 'err');
                let customErrorMessage = 'An error occurred';
                if (err.code === 'auth/invalid-login-credentials') {
                    customErrorMessage =
                        'User not found. Please check your email address or password.';
                }
                toast(customErrorMessage);
            })
            .finally(() => mounted.current && setIsLoading(false));

        reset();
    }

    function onError(errors) {
        toast.error('Please check your email address or password.');
        console.log(errors, 'errors');
    }

    return (
        <>
            <div>
                <ToastContainer />
                <div className='grid gap-6 min-[391px]:w-4/5 max-[398px]:w-[358px] mx-auto relative'>
                    <div className='grid items-end'>
                        <OnboardingWelcome
                            title={'Welcome Back!'}
                            text={'Join the AfriChow community now ...'}
                            className={'welcome'}
                        />
                        <form className='grid gap-3 '>
                            <div className='grid gap-2'>
                                <label className='label text flex gap-2'>
                                    Email Address{' '}
                                    <span className='text-[#CB0000]'>*</span>
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='sarahjohn@gmail.com'
                                    {...register('email', {
                                        required: 'Required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'invalid email address',
                                        },
                                    })}
                                    className='input'
                                />
                            </div>

                            <span className='text-red-500 text-[12px]'>
                                {errors?.email && errors?.email?.message}
                            </span>
                            <div className='grid gap-2'>
                                <label className='label text-[12px] flex gap-2'>
                                    Password{' '}
                                    <span className='text-[#CB0000]'>*</span>
                                </label>
                                <div className='input flex gap-2 items-center'>
                                    <input
                                        className='w-full focus:outline-none appearance-none bg-transparent'
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        id='password'
                                        {...register('password', {
                                            required: 'Required',
                                            pattern: {
                                                value: /^(?=.*[A-Za-z\d])(?=.*[!@#$%^&*.,><*])[A-Za-z\d!@#$%^&*,.><*]{8,}$/,
                                                // message: 'Invalid password',
                                            },
                                        })}
                                    />

                                    <span
                                        className='w-[16.41px] h-[11.67px]'
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <img src={PasswordEye2} />
                                        ) : (
                                            <img src={PasswordEye} />
                                        )}
                                    </span>
                                </div>
                            </div>

                            <span className='text-red-500 text-[12px]'>
                                {errors?.password && errors?.password?.message}
                            </span>
                            <span className='flex text-[#145062] text-[12px] justify-center max-[398px]:justify-end'>
                                <Link to='/forgot password'>
                                    Forgot Password ?
                                </Link>
                            </span>
                            <button
                                className='
    bg-[#33CC9F] text-[#000F08] mx-auto text-[16px] w-[358px] rounded-[8px] py-[16px] px-[32px]'
                                onClick={handleSubmit(onSubmit, onError)}
                            >
                                Login
                            </button>

                            <span
                                className={
                                    'underline text-[15px] font-medium mx-auto w-[250px] text-[#145062]'
                                }
                                onClick={() => navigate('/signup')}
                            >
                                Do not have an Account?
                                <span className='cursor-pointer'>Sign up</span>
                            </span>
                        </form>
                    </div>
                </div>
                {isLoading && <Loader />}
            </div>
        </>
    );
}
