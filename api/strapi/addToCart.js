import axios from 'axios'

export const addToCart = async (body, token) => {
  const headers = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  const response = await axios.post(
    'http://localhost:1337/cart-items',
    body,
    headers
  )
  console.log(response)
}
