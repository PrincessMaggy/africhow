import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import right_icon from '../../assets/images/right-arrow.png';
import bronze from '../../assets/images/bronze.svg';
import arrow from '../../assets/images/beenhere.png';
import fb from '../../assets/images/facebook.png';
import Ig from '../../assets/images/Ig.png';
import twitter from '../../assets/images/twitter.png';
import RewardNav from './RewardNav';
import Layout from '../Layout';
import {shareOnFacebook} from '../../utils/socialShare';
import {shareOnTwitter} from '../../utils/socialShare';
import {shareOnInstagram} from '../../utils/socialShare';
//import NewNavBar from '../NewNav/NewNavBar';
const RewardsPage = () => {
    const startPoint = 200;
    const endPoint = 700;
    const speed = 200;

    const [progressValue, setProgressValue] = useState(startPoint);
    const progressPercentage = (progressValue / endPoint) * 100;

    useEffect(() => {
        const progressBar = document.querySelector('.circular_progress');
        const ValueContainer = document.querySelector('.count');

        const progress = setInterval(() => {
            setProgressValue((prevValue) => {
                if (prevValue < endPoint) {
                    return prevValue + 1;
                } else {
                    clearInterval(progress);
                    return prevValue;
                }
            });

            ValueContainer.textContent = `${progressValue}`;
            progressBar.style.background = `conic-gradient(
                #33CC9F ${progressPercentage}deg,
                #000 ${progressPercentage}deg
            )`;
        }, speed);

        return () => {
            clearInterval(progress);
        };
    }, [endPoint]);

    return (
        <>
            {/*<NewNavBar />*/}
            <Layout>
                <RewardNav />
                <div className='earn_wrapper px-4'>
                    <div className='rewards_wrapper '>
                        <div className='circular_progress'>
                            <div className='value_container'>
                                <span className='count'></span> <br />{' '}
                                <span className='count-text'>{`of ${endPoint} points`}</span>
                            </div>
                        </div>
                        <p className='text-lg'>
                            Yaay! You are doing great, earn more
                            <br /> Points to get great rewards
                        </p>
                    </div>
                    <div className='achievements_wrapper'>
                        <div className='flex w-full justify-between'>
                            <p>Here are your achievements so far</p>
                            <Link to='/rewards/my-rewards'>
                                <div className='flex items-center cursor-pointer'>
                                    <span className='mr-1 text-base font-bold text-#145062'>
                                        View all{' '}
                                    </span>
                                    <img src={right_icon} alt='forward' />
                                </div>
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
                                Share your wins and progress with your friends
                                on social media
                            </p>
                            <div className='social_share flex  w-4/6 mx-auto gap-6 justify-around mt-4'>
                                <img
                                    src={fb}
                                    alt='facebook'
                                    onClick={shareOnFacebook}
                                />
                                <img
                                    src={Ig}
                                    alt='Ig'
                                    onClick={shareOnInstagram}
                                />
                                <img
                                    src={twitter}
                                    alt='twitter'
                                    onClick={shareOnTwitter}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default RewardsPage;
