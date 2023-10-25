import RewardNav from './RewardNav';
import './rewards.css';
import {Link} from 'react-router-dom';
import rewards from '../../assets/images/rewards.png';
import right_icon from '../../assets/images/right-arrow.png';
import bronze from '../../assets/images/bronze.svg';
import arrow from '../../assets/images/beenhere.png';
import fb from '../../assets/images/facebook.png';
import Ig from '../../assets/images/Ig.png';
import twitter from '../../assets/images/twitter.png';
import HomeNav from '../homeNav';

const RewardsPage = () => {
    // get circular progress
    // get value container

    // const [progressValue, setProgressValue] = useState(0);
    // const [endValue, setEndValue] = useState(700);
    // const [speed, setSpeed] = useState(0);

    // let progressBar = document.querySelector(".circular_progress");
    // let ValueContainer = document.querySelector(".value_container")

    // let progressValue = 0;
    // let endValue = 65;
    // let speed = 200;

    // let progress = setInterval(() => {
    //     progressValue++;
    //     ValueContainer.textContent = `${progressValue}%`;
    //     progressBar.style.background = `conic-gradient(
    //         #4d5bf9 ${progressValue * 3.6}deg,
    //         #cadcff ${progressValue * 3.6}deg,
    //     )`;
    //     if(progressValue == endValue) {
    //         clearInterval(progress)
    //     }
    // }, speed)

    return (
        <>
            <HomeNav />
            <RewardNav />
            <div className='earn_wrapper px-4'>
                <div className='rewards_wrapper '>
                        <div className="circular_progress">
                            <div className="value_container">
                                <span className='count'>700</span> <br /> <span className='count-text'>of 1000 points</span>
                            </div>
                        </div>
                    <img src={rewards} alt='rewards progress' />
                    <p className='text-lg'>
                        Yaay! You are doing great, earn more
                        <br /> Points to get great rewards
                    </p>
                </div>
                <div className='achievements_wrapper'>
                    <div className='flex w-full justify-between'>
                        <p>Here are your achievements so far</p>
                        <Link to='/rewards/my-rewards'>
                            <a>
                                <div className='flex items-center cursor-pointer'>
                                    <span className='mr-1 text-base font-bold text-#145062'>
                                        View all{' '}
                                    </span>
                                    <img src={right_icon} alt='forward' />
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className='px-4 py-8 flex my-2 rounded-md border border-#000f08  bronze_card'>
                        <div className='left_side '>
                            <img src={bronze} alt='bronze' />
                        </div>
                        <div className='right-side flex w-full justify-between'>
                            <div className='text-left ml-2'>
                                <h3 className='text-lg font-semibold'>
                                    Bronze
                                </h3>
                                <p className='text-base'>
                                    (50) 5 Star Achieved so far
                                </p>
                            </div>
                            <span>
                                <img src={arrow} />
                            </span>
                        </div>
                    </div>
                    <div className='share_section mt-12'>
                        <p className='text-small font-medium'>
                            Share your wins and progress with your friends on
                            social media
                        </p>
                        <div className='social_share flex  w-4/6 mx-auto gap-6 justify-around mt-4'>
                            <img src={fb} alt='facebook' />
                            <img src={Ig} alt='Ig' />
                            <img src={twitter} alt='facebook' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RewardsPage;
