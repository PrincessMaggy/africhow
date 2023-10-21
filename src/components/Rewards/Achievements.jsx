import { useState } from 'react';

import Nav from '../nav';
import RewardNav from './RewardNav';
import './rewards.css'
import bronze from '../../assets/images/bronze.svg'
import fb from '../../assets/images/facebook.png'
import Ig from '../../assets/images/Ig.png'
import twitter from '../../assets/images/twitter.png'
import arrow from '../../assets/images/beenhere.png'


const AchievementsPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleDropdown = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <RewardNav />
            <div className='achievements_wrapper px-6'>
                    <div className="flex w-full justify-between">
                        <p className='font-semibold text-base my-6'>Here are your achievement so far</p>
                    </div>
                    <div className="card flex my-2 rounded-md border border-#000f08 items-center">
                            <div className="left_side">
                                <img src={bronze} alt='bronze medal'/>
                            </div>
                            <div className="right-side flex w-full justify-between">
                                <div className="text-left">
                                  <h3 className='text-lg font-semibold'>Bronze</h3>
                                <p className='text-base'>(50) 5 Star Achieved so far</p>  
                               
                                </div>
                                 <span>
                                    <img src={arrow}  alt='arrow'/>
                                </span>
                            </div>
                    </div>
                    <div className="share_section my-12">
                        <p className='text-small font-medium'>Share your wins and progress with your friends on social media</p>
                        <div className="social_share flex  w-4/6 mx-auto gap-6 justify-around my-4">
                            <img src={fb} alt='facebook'/>
                            <img src={Ig} alt='Ig'/>
                            <img src={twitter}  alt='twitter'/>
                        </div>
                        <span>
                            <img src='/images/beenhere.png' />
                        </span>
                    </div>
                <div className='share_section'>
                    <p className='text-small font-medium'>
                        Share your wins and progress with your friends on social
                        media
                    </p>
                    <div className='social_share flex  w-4/6 mx-auto gap-6 justify-around'>
                        <img src='/images/facebook.png' alt='facebook' />
                        <img src='/images/Ig.png' alt='Ig' />
                        <img src='/images/twitter.png' alt='facebook' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AchievementsPage;
