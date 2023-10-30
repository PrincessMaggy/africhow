import NewNavbar from '../NewNav/NewNavBar';
import {Link} from 'react-router-dom';
import BackArrow from '../../assets/icons/arrow_back.png';
import Box from '../../assets/icons/checker.jpg';

export default function SupportSuccess() {
    return (
        <div>
            <NewNavbar />
            <hr className='h-0.5'></hr>
            <Link to='/supportform'>
                <img src={BackArrow} className='mx-5 mt-4 p-1 '></img>
            </Link>
            <div className='flex flex-col justify-center items-center h-screen font-body text-words'>
                <img src={Box} className='mb-4'></img>
                <p className='text-base font-semibold'>
                    Submitted successfully!
                </p>
                <Link to='/vendors-dashboard'>
                    <div className='h-44 w-48 '>
                        <button className='py-2 px-6 font-medium text-base bg-primary hover:bg-emerald-200 mt-6 mx-1 rounded'>
                            Go to homepage
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}
