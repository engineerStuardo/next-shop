import React from 'react'
import Head from 'next/head'

import Title from './Title'

const Page = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} - Next Shop</title>
      </Head>
      <Title>{title}</Title>
      <main className='flex items-center justify-center px-10'>{children}</main>
    </>
  )
}

export default Page
