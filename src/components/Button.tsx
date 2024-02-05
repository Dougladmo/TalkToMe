import React from 'react'

interface IButton {
    title: string;
    type: 'button' |'submit' | 'reset';
}

const Button = ({title, type}: IButton) => {
  return (
    <button className='w-full py-3 font-medium text-black transition duration-300 rounded-md bg-primary hover:text-primary hover:bg-black' type={type}>
        <span>
            {title}
        </span>
    </button>
  )
}

export default Button