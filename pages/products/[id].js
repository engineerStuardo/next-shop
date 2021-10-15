import React from 'react'
import Image from 'next/image'

import { product } from '../../lib/api/products'
import Page from '../../components/Page'

const Product = ({ product }) => {
  return (
    <Page title={product.title}>
      <div className='grid grid-cols-1 gap-10 mx-10 md:grid-cols-2'>
        <Image src={`${product.pictureUrl}`} alt='' width='640' height='480' />
        <div className='space-y-5'>
          <p className='leading-7 tracking-wider text-justify text-gray-600'>
            {product.description}
          </p>
          <p className='text-2xl font-bold tracking-widest text-gray-700'>
            {product.price}
          </p>
        </div>
      </div>
    </Page>
  )
}

export const getServerSideProps = async ({ query: { id } }) => {
  try {
    const data = await product(id)
    return { props: { product: data } }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default Product
