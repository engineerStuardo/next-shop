import { addToCart } from '../../../api/strapi/addToCart'

const handler = async (req, res) => {
  const { jwt } = req.cookies
  console.log(jwt)
  const response = await addToCart(req.body, jwt)
  res.status(200).json({})
}

export default handler
