import { getCart } from '../../../api/strapi/getCart'

const stripCartItem = cartItem => {
  return {
    id: cartItem.id,
    product: {
      id: cartItem.product.id,
      title: cartItem.product.title,
      price: cartItem.product.price,
    },
    quantity: cartItem.quantity,
  }
}

const handler = async (req, res) => {
  const { jwt } = req.cookies
  const { data, status } = await getCart(jwt)
  res.status(status).json(data.map(stripCartItem))
}

export default handler
