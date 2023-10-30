import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import OnboardingButton from '../components/OnboardingButton';
import '../onboardingloginsignup.css';
import Prev from '../components/Prev';
import {sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../../firebase';
import {ToastContainer} from 'react-toastify';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
    const [errorMessage, setErrorMessage] = useState(null);
    const {register, handleSubmit, reset, formState} = useForm();
    const {errors} = formState;
    const navigate = useNavigate();

    const resetLink = async (email) => {
        return sendPasswordResetEmail(auth, email, {
            url: 'http://localhost:5174/login',
        })
            .then(() => {
                //toast.success('Password reset email sent successfully');
            })
            .catch((error) => {
                setErrorMessage(error.message);

                toast.error(error);
            });
    };

    function onSubmit(data) {
        const {email} = data;
        sendPasswordResetEmail(auth, email, {
            url: 'http://localhost:5174/login',
        })
            .then((userCredential) => {
                console.log(userCredential);
                // navigate("/login%20successful");
                toast('Email sent successfully');
                reset();
            })
            .catch((err) => {
                let customErrorMessage = 'An error occurred';
                if (err.code === 'auth/user-not-found') {
                    customErrorMessage =
                        'User not found. Please check your email address.';
                }
                toast(customErrorMessage);
            });
    }

    function handlePrev() {
        navigate('/login');
    }

    return (
        <div className='grid gap-5 min-[391px]:w-[90%] max-[398px]:w-[358px]'>
            <Prev onClick={handlePrev} />
            <ToastContainer />
            <div className='font-[700] text-[24px] text-[#000F08] mt-3 mb-3'>
                <p className='font-[700] text-[24px] text-[#000F08] mt-3 mb-3'>
                    Forgot Password?
                </p>
                <span className='font-[700] text-[16px] text-[rgb(82,83,82)]'>
                    A link will be sent to your email to reset your password.
                </span>
            </div>

            {!errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            <form className='grid gap-3' onSubmit={handleSubmit(onSubmit)}>
                <label className='label text grid gap-2'>
                    Email Address
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
                </label>

                <span className='text-red-500 text-[12px]'>
                    {errors?.email && errors?.email?.message}
                </span>
                <OnboardingButton text={'Next'} />
            </form>
        </div>
    );
}
