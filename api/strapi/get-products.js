import axios from 'axios'

const getProducts = async () => {
  try {
    const { data, status } = await axios.get('http://localhost:1337/products')
    return {
      data,
      status,
    }
  } catch (error) {
    return {
      status: 500,
    }
  }
}

export default getProducts
