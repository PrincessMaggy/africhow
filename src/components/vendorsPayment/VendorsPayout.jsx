import HomeNav from "../homeNav";
import Paypal from '../../assets/icons/Paypal.png';

const VendorsPayoutMethod = () => {
      
     return(
        <>
            <HomeNav />
            <div className='sm:px-8 px-4 min-h-screen'>
                <div role="list" className="flex justify-between sm:pt-6 sm:pb-4 pt-4 pb-2 bg-[#F9FFFD] border border-[#145062]">
                    
                    <div className="flex">    
                        <img className="h-10 w-10 " src={Paypal} alt='' />
                        <div className="sm:ml-4 ml-3 flex justify-center items-center ">
                            <p className="md:text-lg text-sm sm:text-lg font-medium text-start text-slate-900">PayPal</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                    <button className='rounded text-sm bg-white border border-[#145062]'>Connect</button>
                        
                    </div>
                            
                </div>
            </div>
        </>
     )
     
 
     
 };
 
 export default VendorsPayoutMethod;