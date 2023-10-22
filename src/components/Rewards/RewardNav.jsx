import { Link, useLocation } from 'react-router-dom'
import './rewards.css'


const RewardNav = () => {
    const location = useLocation();
    console.log(location.pathname)
    console.log(location)

  return (
    <nav>
        <div className="reward-nav flex justify-between px-8 py-4 w-full border-b border-#D9D9D9 ">
            <div>
              <Link to='/rewards' >
                <a className={location.pathname === '/rewards' ? 'active-link' : 'font-normal text-base text-#808080'}>Overview</a>
            </Link>  
            </div>
            <div>
              <Link to='/rewards/catalog'>
                <a className={location.pathname === '/rewards/catalog' ? 'active-link' : 'font-normal text-base text-#808080'} >
                
                Catalog</a>
            </Link>  
            </div>
            <div>
              <Link to='/rewards/earn-stars'>
                <a className={location.pathname === '/rewards/earn-stars' ? 'active-link' : 'font-normal text-base text-#808080'} >
                  Earn Stars</a>
            </Link>  
            </div>

            
            
            
        </div>
    </nav>
  )
}

export default RewardNav