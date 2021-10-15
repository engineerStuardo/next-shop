import React from 'react'

function Button({ type, children }) {
  return (
    <button
      type={type}
      className='w-full px-6 py-2 mt-5 tracking-wide text-green-100 duration-500 bg-green-500 rounded hover:bg-green-400'
    >
      {children}
    </button>
  )
}

export default Button
