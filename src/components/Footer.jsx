import React from 'react'

const Footer = () => {
  return (
    <div className='w-full pt-20 pb-4 px-10 bg-black '>
        <section className='flex justify-between'>
            <div className='flex flex-col md:text-lg text-white'>
                <h3 className='text-base md:text-lg lg:text-lg text-left font-bold text-[#33CC9F]'>AfriChow</h3>
                <p className='text-xs md:text-base lg:text-base text-left pr-16'>Join us today and experience a more efficient way to serve your customers</p>
            </div>
            <div className='flex justify-between gap-4 lg:px-16 md:px-16 text-base'>
                <div className='lg:px-10 flex flex-col text-left text-sm'>
                    <h3 className='pb-2 underline text-[#33CC9F]'>Links </h3>
                    <ul>
                        <li className='text-white'>About</li>
                        <li className='text-white'>Support</li>
                        <li className='text-white'>FAQs</li>
                    </ul>
                </div>
                <div className='flex flex-col text-left text-sm'>
                    <h3 className='pb-2 underline text-[#33CC9F]'>Socials</h3>
                    <ul>
                        <li className='text-white'>Meta</li>
                        <li className='text-white'>Instagram</li>
                        <li className='text-white'>X (Twitter)</li>
                    </ul>
                </div>
                
            </div>
        </section>
        <hr className='mt-12'/>
        <div className='flex mt-3 text-xs justify-between gap-2'>
            <h3 className='text-white '>All rights reserved <span>&copy;</span> AfriChow2023</h3>
            <p>Terms of Use</p>
        </div>
    </div>
  )
}

export default Footer