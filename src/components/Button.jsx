import React from 'react'

const Button = ({styles}) => {
  return (
    <div>
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg ${styles} hover:transform hover:scale-125 hover:skew-y-1`}>
        Get Started
      </button>
    </div>
  )
}

export default Button