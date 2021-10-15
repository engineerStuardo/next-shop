import getProducts from '../../../api/strapi/get-products'

const handler = async (req, res) => {
  const strapiResp = await getProducts()
  res.status(strapiResp.status).json(strapiResp.data)
}

export default handler
