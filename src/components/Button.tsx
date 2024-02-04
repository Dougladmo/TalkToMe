import React from 'react'

interface IButton {
    title: string;
    type: 'button' |'submit' | 'reset';
}

const Button = ({title, type}: IButton) => {
  return (
    <button className='w-full py-3 font-medium text-black rounded-md bg-primary' type={type}>
        <span>
            {title}
        </span>
    </button>
  )
}

export default Button