import RewardNav from './RewardNav';

import './rewards.css';
import NewNavbar from '../NewNav/NewNavBar';

const EarnStarsPage = () => {
    return (
        <div>
            <NewNavbar />
            <RewardNav />
            <div className='earn_wrapper text-left px-10 py-8 min-h-screen'>
                <p className='text-lg font-semibold 	'>
                    A guide on how to earn more stars
                </p>
                <ul className='list-disc pl-6 text-base'>
                    <li>
                        Star ratings earned can be used to earn Rewards and make
                        upgrades
                    </li>
                    <li>Bonus points for achieving 100 orders</li>
                    <li>
                        Bonus points for achieving 100 orders Maintain a five
                        star rating from customers in order to unlock amazing
                        rewards.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EarnStarsPage;
