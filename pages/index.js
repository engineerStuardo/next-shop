import Head from 'next/head'
import Page from '../components/Page'
import ProductCard from '../components/ProductCard'

import Title from '../components/Title'
import { products } from '../lib/api/products'

const HomePage = ({ products }) => {
  return (
    <Page title='Indoor Plants'>
      <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10 2xl:grid-cols-4'>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </Page>
  )
}

export const getServerSideProps = async () => {
  const data = await products()
  return {
    props: { products: data },
  }
}

export default HomePage
