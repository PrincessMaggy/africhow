import React from 'react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import weeklyTransaction from '../../lib/weeklyTransaction';



const VendorsDashboard = () => {
    const formatDollar = (value) => `$${value}`;
    return (
        <>
        <div className='sm:px-8 px-4'>
            <div className='text-start sm:p-10 p-4 bg-[#145062]'>
                <div className=''>
                    <p className='text-white sm:text-sm text-xs sm:font-light font-extralight'>Total Earnings</p>
                    <p className='sm:my-4 my-2 text-white sm:text-2xl text-xl font-semibold '>$ 82,570.00</p>
                </div>
                <div>
                    <button className='rounded text-sm p-2 bg-[#33CC9F]'>Payout method</button>
                    <button className='rounded text-sm p-2 sm:ms-6 sm:ms-4 ms-2 bg-white'>Transactions</button>
                </div>

            </div>
            <div className='flex sm:flex-row flex-col'>
                <div className='rounded-[20px] sm:py-8 py-4 sm:w-1/2 w-full relative z-[-1] bg-[#F9FFFD]'>
                    <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyTransaction} margin={{ top: 20, right: 10, left: 0, bottom: 5 }} barSize={20} barCategoryGap="20%" barGap={0}>
                    <XAxis  dataKey="name"  tickLine={false} />
                    <YAxis   tickFormatter={formatDollar} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#33CC9F" radius={[5, 5, 0, 0]} />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='sm:py-8 py-4 sm:w-1/2 w-full'>
                    <p className='text-start text-md'>Weekly Transaction</p>
                </div>
            </div>
        </div>
        </>
    )
};

export default VendorsDashboard;
