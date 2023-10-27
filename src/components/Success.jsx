import React from 'react'
import OnboardingWelcome from './OnboardingWelcome'
import OnboardingButton from './OnboardingButton'

export default function Success({text, buttonText, title, onNav}) {
  return (
    <>
        <OnboardingWelcome 
            className={'flex flex-col justify-center items-center'} 
            text={text} 
            title={title}
            style={'text-center'}
        />
        <OnboardingButton 
            text={buttonText}
            onNav={onNav}
        />
    </>
  )
}