import React from 'react'

const Button = ({styles, children}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-popins font-medium text-[18px] text-primary
    outline-none rounded-[10px] ${styles}`}>
         {children}   
    </button>
  )
}

export default Button
