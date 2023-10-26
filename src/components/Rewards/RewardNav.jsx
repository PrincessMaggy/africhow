import { Link, useLocation } from 'react-router-dom';
import './rewards.css';

const RewardNav = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="reward-nav flex justify-between px-8 py-4 w-full border-b border-#D9D9D9">
        <div className={location.pathname === '/rewards' ? 'active-link' : ''}>
          <Link to='/rewards'>Overview</Link>
        </div>
        <div className={location.pathname === '/rewards/catalog' ? 'active-link' : ''}>
          <Link to='/rewards/catalog'>Catalog</Link>
        </div>
        <div className={location.pathname === '/rewards/earn-stars' ? 'active-link' : ''}>
          <Link to='/rewards/earn-stars'>Earn Stars</Link>
        </div>
      </div>
    </nav>
  );
};

export default RewardNav;
