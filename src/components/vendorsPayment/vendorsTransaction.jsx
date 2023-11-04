import { useState } from "react";
//imports css file
import './vendorspayment.css';
//imports object for filtered transaction according to transactionstatus
import transactions from '../../lib/vendorsTransList';
import Layout from "../Layout";
//import NewNavbar from '../NewNav/NewNavBar';


//creates component
const VendorsTransaction = () => {
      
   //check for active tab and switch tabs on click
    const [activeindex, setActiveIndex] = useState(1);
    const handleclick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeindex === index ? className : "";

    return(
        <div>
        <Layout>
            <div className="bg-[#f7f7f7] text-[#909090] sm:px-8 px-4 sm:py-6 py-2 border-t border-[#D1D1D6] flex justify-between  ">
                {/*Tab title */}
                {transactions.map((item) => (
                    <button key={item.id} onClick={() => handleclick(item.id)} className={`sm:w-44 w-24 sm:py-3 py-2 sm:text-lg text-sm hover:bg-[#145062] hover:text-white ${checkActive(item.id, "bg-[#145062] text-white")}`}  >{item.tabtitle}</button>
                ))}
            </div>
            <div>
                {/*Tab content */}
                {transactions.map((item) => (
                    <div key={item.id} className={`tabcontent sm:px-8 px-4 sm:py-6 py-2 ${checkActive(item.id, "active")}`}>
                    
                        {item.content.map((item)=> (
                            
                            <div key={item.id} role="list" className="flex justify-between sm:pt-6 sm:pb-4 pt-4 pb-2 border-b border-[#EAEAEA]">
                            
                            <div className="flex">    
                            <img className="h-10 w-10 rounded-full" src={item.image} alt={item.payouttitle} />
                            <div className="sm:ml-4 ml-3 ">
                                <p className="sm:text-lg text-sm font-medium text-slate-900">{item.payouttitle}</p>
                                <p className="sm:text-base text-sm text-start text-slate-500">{item.date}</p>
                            </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="sm:text-lg text-sm font-medium text-slate-900">{item.amount}</p>
                            
                            </div>
                        
                        
                
                            </div>
                        ))}
                    
                    </div>
                
                ))}
            </div>
        </Layout>
        </div>
    )
    

    
};

export default VendorsTransaction;