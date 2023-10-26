import React from 'react';
import {Link} from 'react-router-dom';
//imports tags for barchart
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
//imports weeklytransaction data object
import weeklyTransaction from '../../lib/weeklyTransaction';
//imports transaction data object
import transactionsdata from '../../lib/vendorsTransData';
import HomeNav from "../homeNav";


const VendorsDashboard = () => {

    //adds dollar sign to y-axis of barchart
    const formatDollar = (value) => `$${value}`;
    //filters first 3 transactions
    const firstthreeData = transactionsdata.slice(0, 3);

    return (
        <>
        <HomeNav />
        <div className='sm:px-8 px-4'>
            <div className='text-start sm:p-10 p-4 bg-[#145062]'>
                <div className=''>
                    <p className='text-white sm:text-sm text-xs sm:font-light font-extralight'>Total Earnings</p>
                    <p className='sm:my-4 my-2 text-white sm:text-2xl text-xl font-semibold '>$ 82,570.00</p>
                </div>
                <div>
                    <Link to='/vendors-payout-method'>
                    <button className='rounded text-sm p-2 bg-[#33CC9F]'>Payout method</button>
                    </Link>
                    <Link to='/vendors-transaction'>
                    <button className='rounded text-sm p-2 sm:ms-6 sm:ms-4 ms-2 bg-white'>Transactions</button>
                    </Link>
                </div>

            </div>
            <div className='flex sm:flex-row flex-col'>
                <div className='rounded-[20px] md:px-4 px-2 sm:py-8 py-4 sm:w-1/2 w-full relative z-[-1] bg-[#F9FFFD]'>
                    <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyTransaction} margin={{ top: 20, right: 10, left: 0, bottom: 5 }} barSize={20} barCategoryGap="20%" barGap={0}>
                    <XAxis  dataKey="name"  tickLine={false} />
                    <YAxis   tickFormatter={formatDollar} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#33CC9F" radius={[5, 5, 0, 0]} />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='sm:py-8 py-4 md:px-4 px-2 sm:w-1/2 w-full'>
                    <p className='text-start text-lg'>Weekly Transaction</p>
                    <div>
                    {firstthreeData.map((item)=> (
                        
                        <div key={item.id} role="list" className="flex justify-between sm:pt-6 sm:pb-4 pt-4 pb-2 border-b border-[#EAEAEA]">
                        
                        <div className="flex">    
                        <img className="h-10 w-10 rounded-full" src={item.image} alt={item.payouttitle} />
                        <div className="sm:ml-4 ml-3 ">
                            <p className="md:text-lg text-sm sm:text-lg font-medium text-start text-slate-900">{item.payouttitle}</p>
                            <p className="md:text-base text-sm text-start text-slate-500">{item.date}</p>
                        </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="md:text-lg text-sm font-medium text-slate-900 text-start">{item.amount}</p>
                           
                        </div>
                       
                    
            
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default VendorsDashboard;

