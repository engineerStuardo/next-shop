import Head from 'next/head'

import NavBar from '../components/NavBar'
import { useCart } from '../hooks/cart'

function Cart() {
  const { isLoading, data } = useCart()

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Cart - Next Shop</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.product.title}</td>
                <td>{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>{parseInt(item.quantity) * parseInt(item.price)}</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Cart
