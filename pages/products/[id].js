import React from 'react'
import Image from 'next/image'

import { product } from '../../lib/api/products'
import Page from '../../components/Page'
import { addToCart } from '../../lib/api/cart'

const Product = ({ product }) => {
  const addToCartFn = async (quantity, productId) => {
    await addToCart(quantity, productId)
  }

  return (
    <Page title={product.title}>
      <div className='grid grid-cols-1 gap-10 mx-10 md:grid-cols-2'>
        <Image src={`${product.pictureUrl}`} alt='' width='640' height='480' />
        <div className='space-y-5 mb-14'>
          <p className='leading-7 tracking-wider text-justify text-gray-600'>
            {product.description}
          </p>
          <p className='text-2xl font-bold tracking-widest text-gray-700'>
            {product.price}
          </p>
          <select
            name='quantity'
            id=''
            className='w-1/2 p-1 text-green-600 border border-green-400'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button
            onClick={() => addToCartFn(10, product.id)}
            className='w-full p-3 font-bold tracking-widest text-green-100 duration-500 bg-green-600 rounded-md hover:bg-green-400'
          >
            Add To Cart
          </button>
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
