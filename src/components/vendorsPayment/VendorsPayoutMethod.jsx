import React, { useState } from 'react';

import Paypal from '../../assets/icons/paypal.png';
import Close from '../../assets/icons/close.png';
import CheckCircle from '../../assets/icons/check_circle.png';
import NewNavbar from '../NewNav/NewNavBar';


const VendorsPayoutMethod = () => {
    const [showButtons, setShowButtons] = useState(true);

  const toggleButtons = () => {
    setShowButtons(false);
  };
      
     return(
        <>
           
            <NewNavbar />
            <div className='sm:px-8 px-4 min-h-screen'>
                <div role="list" className="flex justify-between sm:pt-6 sm:pb-4 pt-4 pb-2 bg-[#F9FFFD] border border-[#145062]">
                    
                    <div className="flex">    
                        <img className="h-10 w-10 " src={Paypal} alt='' />
                        <div className="sm:ml-4 ml-3 flex justify-center items-center ">
                            <p className="md:text-lg text-sm sm:text-lg font-medium text-start text-slate-900">PayPal</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        {showButtons ? (
                            <button onClick={toggleButtons} className='rounded text-sm bg-white border border-[#145062]' >Connect</button>
                        ) : (
                            <div>
                            <button><img className="h-6 w-6 me-4" src={CheckCircle} alt='CheckCircle' /></button>
                            <button><img className="h-6 w-6 " src={Close} alt='Close' /></button>
                            
                            </div>
                        )}
                    
                    </div>
                            
                </div>
            </div>
        </>
     )
     
 
     
 };
 
 export default VendorsPayoutMethod;