import { type } from 'os'
import React, { InputHTMLAttributes, ChangeEvent } from 'react'
import '../index.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    settings: {
        name: string,
        type:string,
        label:string,
        value?:string
    },
    changeHandler: any
}

const Input = ({settings, changeHandler}: IInputProps) => {
    return (
        <div className='customInp'>
            <label htmlFor={settings.name}>{settings.label}</label>
            <input type={settings.type} name={settings.name} onChange={changeHandler} />
        </div>
    )
}

export default Input