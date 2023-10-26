import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export default function FormInputs({label,pattern,defaultValue,errorMessage,name, ...rest}) {
    ///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    //"sarahjohn@gmail.com"
    //"invalid email address",
    //Email Address
    // type={type}
    //                 id={type}
    //                 placeholder={placeholder}
    //                 {...{register}({type}, {
    //                 required: "Required",
    //                 pattern: {
    //                     value: {regex},
    //                     message: {message},
    //                 },
    //                 })}
    const {control} = useFormContext();
  return (
    <>
        <label className="label text flex gap-2">
            {label} <span className="text-[#CB0000]">*</span>
        </label>
        <Controller
            name={name}
            control={control}
            render={({field, fieldState}) => (
                <div>
                    <input 
                    {...field}
                    {...rest}
                    className="input"
                    value={field.value || defaultValue}
                    placeholder={placeholder}
                    autoComplete='true'
                />
                {fieldState.error && <p>{errorMessage || fieldState.error.message}</p>}
                </div>    
            )}
            rules = {{
                required: 'This field is required',
                pattern: pattern && {
                    value: pattern,
                    message: errorMessage,
                },
            }}
        />
        
    </>
  )
}
