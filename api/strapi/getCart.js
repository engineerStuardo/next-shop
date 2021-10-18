import axios from 'axios'

export const getCart = async jwt => {
  const headers = { headers: { Authorization: `Bearer ${jwt}` } }
  const { data, status } = await axios.get(
    'http://localhost:1337/cart-items',
    headers
  )
  return { data, status }
}
