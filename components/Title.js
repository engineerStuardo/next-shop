import React from 'react'

const Title = ({ children }) => {
  return (
    <div className='px-20 py-10'>
      <h1 className='mb-5 text-4xl font-bold tracking-wider text-gray-600'>
        {children}
      </h1>
    </div>
  )
}

export default Title
