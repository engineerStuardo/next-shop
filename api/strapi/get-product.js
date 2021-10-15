import axios from 'axios'

const getProduct = async id => {
  try {
    const { data, status } = await axios.get(
      `http://localhost:1337/products/${id}`
    )

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

export default getProduct
