import React from 'react'
import Canada from "../assets/meals/Onay.jpg"

const homeSectionThree = () => {
  return (
    <div className='w-full min-h-full bg-opacity-25'>
        <div className='relative flex flex-col justify-center px-8'>
            <section className=' section-header w-full flex flex-col'>
                <div className='text-center'>
                    <h3 className='text-4xl font-black mt-2'>TOP FEATURES</h3>
                    <hr className='border-b-2 border-black w-12 mx-auto mt-4' />
                    <p className='text-xs py-4'>Simplify and track accepted orders, access bills and customer contacts with ease for an efficient delivery workflow</p>
                </div>
            </section>
            <div className='flex-basis [379px] mb-10'>
                <div className=' location-canada flex flex-col justify-center font-bold'>
                    <img src= {Canada} alt="" srcset="" />
                    <h3 className='-mt-12 flex justify-center bg-green-100 bg-opacity-50 py-3 text-xl'>Canada</h3>
                </div>
                <section className=' location-canada flex flex-col justify-center font-bold'>
                    <img src= {Canada} alt="" srcset="" />
                    <h3 className='-mt-12 flex justify-center bg-green-100 bg-opacity-50 py-3 text-xl'>Canada</h3>
                </section>
                <section className=' location-canada flex flex-col justify-center font-bold'>
                    <img src= {Canada} alt="" srcset="" />
                    <h3 className='-mt-12 flex justify-center bg-green-100 bg-opacity-50 py-3 text-xl '>Canada</h3>
                </section>
            </div>
        </div>
    </div>
  )
}

export default homeSectionThree