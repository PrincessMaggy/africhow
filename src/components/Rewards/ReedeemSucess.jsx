import catalogs from "../../lib/catalog"
import { useParams } from "react-router-dom";
import './rewards.css'
import fb from '../../assets/images/facebook.png';
import Ig from '../../assets/images/Ig.png';
import twitter from '../../assets/images/twitter.png';
import HomeNav from '../homeNav';
import { Link } from "react-router-dom";

import { shareOnFacebook } from '../../utils/socialShare';
import { shareOnTwitter } from '../../utils/socialShare';
import { shareOnInstagram } from '../../utils/socialShare';

const ReedeemSucess = () => {
    const { id } = useParams()
    const item = catalogs.find((item) => item.id == id);

  return (
    <>
        <NewNavBar />
        <div className="item-details ">
               
                <div className="body px-4 ">

                    <div className="py-4 rounded-md flex justify-center flex-col card mt-4 md:w-1/3 mx-auto">
                        <img src={item.img} alt={item.name} />
                        <p className="text-xs font-medium">{item.rate}</p>
                    </div>
                    <h3 className="font-bold my-6">CONGRATULATIONS</h3>
                    <p className="text-center text-lg">You have successfully  unlocked {item.title} for {item.points} five star ratings.</p> 
                    <p className="text-center text-lg">Keep up the good work and unlock the next tier!</p>

                   
                </div>
                <div className='share_section share_success'>
                       
                        <div className='social_share flex  w-4/6 mx-auto gap-6 justify-around mt-4'>
                        <img src={fb} alt='facebook' onClick={shareOnFacebook}/>
              <img src={Ig} alt='Ig'  onClick={shareOnInstagram} />
              <img src={twitter} alt='twitter' onClick={shareOnTwitter} />
                        </div>
                    </div>
                <div className="mx-4">
                <Link to='/rewards'>
                     <input 
                type="button" 
                value={`Back To Homepage`} 
                className="py-3 my-8 font-medium text-base sucess_btn w-full md:w-64 cursor-pointer" 
                /> 
                </Link>
               
                
                </div>
               
            </div>

        
    </>
  )
}

export default ReedeemSucess