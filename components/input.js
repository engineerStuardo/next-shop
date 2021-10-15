import React from 'react'

function Input({ type, value, required, onChange }) {
  return (
    <input
      type={type}
      value={value}
      required={required}
      onChange={onChange}
      className='px-3 py-1 border rounded w-80'
    />
  )
}

export default Input
