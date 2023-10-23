import React from 'react'
import img from './location_pin.jpg'

function Incoming() {
  return (
    <div>
        <div>
            <div className='flex items-center bg-bg-order-header m-6 px-3 py-2 gap-4'>
                <h1 className='text-lg w-10 leading-10 bg-bg-order-nav rounded-full'>
                    HA
                </h1>
                <div className='text-left'>
                    <p>
                        Order #24078
                    </p>
                    <p className='text-sm'>
                        Hafsat Abdul
                    </p>
                </div>
            </div>

            <div>
                <p>
                    12-08-2023
                </p>
                <p>
                •
                </p>
                <p>
                    11:28 PM
                </p>
            </div>

            <div>
                <img src={img} alt="location-pin" />
            </div>
        </div>
    </div>
  )
}

export default Incoming