import axios from 'axios'

export const addToCart = async (quantity, product) => {
  const add = { quantity, product }
  const response = await axios.post('http://localhost:3000/api/addToCart', add)
}

export const getCart = async () => {
  const { data } = await axios.post('http://localhost:3000/api/cart')
  return data
}
