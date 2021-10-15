import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({ product }) => {
  return (
    <li>
      <div className='my-8 border shadow-md w-80 hover:shadow-xl'>
        <Link href={`/products/${product.id}`}>
          <a>
            <Image
              src={`${product.pictureUrl}`}
              alt=''
              width={320}
              height={240}
            />
            <div className='flex items-center justify-between p-3'>
              <h2 className='text-lg font-bold tracking-wide'>
                {product.title}
              </h2>
              <span>{product.price}</span>
            </div>
          </a>
        </Link>
      </div>
    </li>
  )
}

export default ProductCard
