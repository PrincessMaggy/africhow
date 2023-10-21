import Nav from '../nav';
import RewardNav from './RewardNav';
import { useState } from 'react';
import './rewards.css'
import { Link } from 'react-router-dom';
import rewards from '../../assets/images/rewards.png'
import right_icon from '../../assets/images/right-arrow.png'
import bronze from '../../assets/images/bronze.svg'
import arrow from '../../assets/images/beenhere.png'
import fb from '../../assets/images/facebook.png'
import Ig from '../../assets/images/Ig.png'
import twitter from '../../assets/images/twitter.png'
const Rewards = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleDropdown = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <Nav
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
                toggleDropdown={toggleDropdown}
            />
            <RewardNav />
            <div className='earn_wrapper'>
                 <div className="rewards_wrapper ">
                    <img src={rewards} alt='rewards progress'/>
                    <p className='text-lg'>Yaay! You are doing great, earn more<br /> Points  to get great rewards</p>
                </div>
                <div className='achievements_wrapper px-6'>
                    <div className="flex w-full justify-between">
                        <p>Here are your achievements so far</p>
                        <Link to='/rewards/my-rewards'>
                           <a>
                            <div className="flex items-center cursor-pointer">
                        <span className='mr-1 text-base font-bold text-#145062'>View all </span>
                        <img src={right_icon} alt='forward' /> 
                        </div>
                            </a> 
                        </Link>
                        
                       
                        
                    </div>
                    <div className="card flex my-2 rounded-md border border-#000f08 items-center">
                            <div className="left_side">
                                <img src={bronze} alt='bronze'/>
                            </div>
                            <div className="right-side flex w-full justify-between">
                                <div className="text-left">
                                  <h3 className='text-lg font-semibold'>Bronze</h3>
                                <p className='text-base'>(50) 5 Star Achieved so far</p>  
                               
                                </div>
                                 <span>
                                    <img src={arrow} />
                                </span>
                            </div>
                        </div>
                    <div className="share_section mt-12">
                        <p className='text-small font-medium'>Share your wins and progress with your friends on social media</p>
                        <div className="social_share flex  w-4/6 mx-auto gap-6 justify-around">
                            <img src={fb} alt='facebook'/>
                            <img src={Ig}  alt='Ig'/>
                            <img src={twitter}  alt='facebook'/>
                        </div>
                    </div>
                </div>
            </div>
               
   
        </div>
    );
};

export default Rewards;
