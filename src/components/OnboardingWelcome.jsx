import React from 'react'

export default function OnboardingWelcome({title,text, className, style}) {
  return (
    <div className={className}>
        <p className='font-[700] text-[24px] text-[#000F08] mt-3 mb-3'>{title}</p>
        <span className={`${style} text-[rgb(82,83,82)]`}>{text}</span>
    </div>
  )
}
