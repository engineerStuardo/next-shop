import React from 'react'

function Field({ label, children }) {
  return (
    <label className='block'>
      <span className='block p-3 text-lg tracking-widest text-gray-500'>
        {label}
      </span>
      {children}
    </label>
  )
}

export default Field
