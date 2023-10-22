import { Link } from "react-router-dom";
import Nav from "../../nav";
import RewardNav from "../RewardNav";
import stars from '../../../assets/images/stars.png';
import catalogs from "../../../lib/catalog";
import '../rewards.css'

const CatalogPage = () => {
    return (
        <>
            <Nav />
            <RewardNav />
            <div className="catalog_wrapper mx-2 mt-14">
                {catalogs.map((item, i) => (
                    <Link to={`/rewards/reward-details/${item.id}`} key={i}>
                        <a>
                           <div className="catalog-card flex my-8 p-2 gap-6 rounded-md border border-#000f08 items-center">
                            <div className="left_side">
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div className="right-side">
                                <div className="text-left">
                                  <h3 className='text-lg font-semibold'>{item.name}</h3>
                                <p className='text-sm'>{item.header}</p> 
                                <p className='text-sm'>{item.task}<img src={stars} alt="rating"/></p>  
                                </div>
                            </div>
                    </div> 
                        </a>
                     
                    </Link>
                   
                ))}
                </div> 
            
        </>
    )
};

export default CatalogPage;
