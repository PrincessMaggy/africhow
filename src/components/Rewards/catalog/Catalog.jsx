import Nav from "../../nav";
import RewardNav from "../RewardNav";
import bronze from '../../../assets/images/bronze.svg';
import catalogs from "../../../lib/catalog";
import '../rewards.css'
const Catalog = () => {
    return (
        <>
            <Nav />
            <RewardNav />
            <div className="catalog_wrapper mx-8 mt-14">
                {catalogs.map((item, i) => (
                    <div className="card catalog-card flex my-8  gap-6 rounded-md border border-#000f08 items-center">
                            <div className="left_side">
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div className="right-side">
                                <div className="text-left">
                                  <h3 className='text-lg font-semibold'>{item.name}</h3>
                                <p className='text-base'>{item.header}</p> 

                                <p className='text-base'>{item.task}</p>  
                               
                                </div>
                                 
                            </div>
                    </div>
                ))}
                </div> 
           
        </>
    )
};

export default Catalog;
