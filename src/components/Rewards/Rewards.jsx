import Nav from '../nav';
import RewardNav from './RewardNav';
import rewards from '../../../public/images/rewards.png'
import './rewards.css'
import { Link } from 'react-router-dom';
const Rewards = () => {
    return (
        <div>
            <Nav />
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
                        <img src='/images/right-arrow.png' alt='forward' /> 
                        </div>
                            </a> 
                        </Link>
                        
                       
                        
                    </div>
                    <div className="card flex my-2 rounded-md border border-#000f08 items-center">
                            <div className="left_side">
                                <img src='/images/bronze.svg'/>
                            </div>
                            <div className="right-side flex w-full justify-between">
                                <div className="text-left">
                                  <h3 className='text-lg font-semibold'>Bronze</h3>
                                <p className='text-base'>(50) 5 Star Achieved so far</p>  
                               
                                </div>
                                 <span>
                                    <img src='/images/beenhere.png' />
                                </span>
                            </div>
                        </div>
                    <div className="share_section mt-12">
                        <p className='text-small font-medium'>Share your wins and progress with your friends on social media</p>
                        <div className="social_share flex  w-4/6 mx-auto gap-6 justify-around">
                            <img src='/images/facebook.png'  alt='facebook'/>
                            <img src='/images/Ig.png'  alt='Ig'/>
                            <img src='/images/twitter.png'  alt='facebook'/>
                        </div>
                    </div>
                </div>
            </div>
               
   
        </div>
    );
};

export default Rewards;
