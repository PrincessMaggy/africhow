import React from 'react'
import Accordion from "../lib/faqData"
import FAQs from "../lib/faqs"


const homeSectionTwo = () => {
    const specificIDs = [1, 2, 3, 4, 5, 6,7,8,9]
    const filteredData = FAQs.filter(item => specificIDs.includes(item.id));

    return (
        <div className='w-full min-h-full bg-opacity-25'>
            <div className='relative flex flex-col justify-center px-8 md:mx-20 mx-4 ]'>
                <section className='text-center'>
                <h3 className='text-4xl font-black '>FAQS</h3>
                <hr className='border-b-2 border-black w-12 mx-auto my-4' />
                <p className='text-xs mb-6'>Simplify and track accepted orders, access bills and customer contacts with ease for an efficient delivery workflow</p>
                </section>
                <section className='section-banner bkground w-full rounded-2xl lg:h-[250px] md:h-[200px] object-center '>
                    <div className='py-3 px-5 font-bold text-left lg:pt-12 md:pt-8 md:px-24 lg:px-28'>
                        <h1 className='text-5xl text-white lg:text-7xl md:text-7xl'>100%</h1>
                        <h1 className='text-sm lg:text-2xl md:text-2xl'>payout</h1>
                        <button className='banner-btn text-white px-2 py-1 rounded-sm -pt-6 bg-black lg:text-base md:text-base '>first 30 days</button>
                    </div>
                </section>
                <section className='flex justify-center text-left w-full lg:'>
                    <div className=' w-full flex flex-col justify-center mb-28 pt-12 lg:mx-16'>
                    {
                        filteredData.map((item, key) => (
                            <Accordion key={key} data={item}/>
                        ))
                    }
                    </div>
                </section>
                        
            </div>
        </div>
    )
    
}

export default homeSectionTwo
