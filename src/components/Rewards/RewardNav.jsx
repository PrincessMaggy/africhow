import { Link, useLocation } from 'react-router-dom'
import './rewards.css'


const RewardNav = () => {
    const location = useLocation();

  return (
    <nav>
        <div className="reward-nav flex justify-between px-4 py-4 w-full border-b border-#D9D9D9 ">
            <div>
              <Link to='/rewards' >
                <a className={location.pathname.includes('/rewards') ? 'active-link' : 'font-normal text-base text-#808080'}>Overview</a>
            </Link>  
            </div>
            <div>
              <Link to='/rewards/catalog'>
                <a>
                
                Catalog</a>
            </Link>  
            </div>
            <div>
              <Link to='/rewards/earn-stars'>
                <a>Earn Stars</a>
            </Link>  
            </div>

            
            
            
        </div>
    </nav>
  )
}

export default RewardNav