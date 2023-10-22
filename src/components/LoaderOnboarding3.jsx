import React from 'react'
import Loading from '../assets/Loader.png'
export default function Loader() {
  return (
    <div className='h-screen w-full grid place-items-center absolute top-0 backdrop-blur-sm'>
        <img className='animate-spin w-[188px] h-[188px]' src={Loading} alt="loader" />
    </div>
  )
}
