import axios from 'axios'

const CMS_URL = process.env.CMS_URL
const IMAGE_URL = process.env.IMAGE_URL

export const products = async () => {
  const { data } = await axios.get(`${CMS_URL}/api/products`)
  return data.map(stripProduct)
}

export const product = async id => {
  const { data } = await axios.get(`${CMS_URL}/api/products/${id}`)
  return stripProduct(data)
}

const stripProduct = product => {
  return {
    id: product.id,
    title: product.title,
    price: '$' + product.price.toFixed(2),
    pictureUrl: IMAGE_URL + product.picture.url,
    description: product.description,
  }
}
