import getProduct from '../../../api/strapi/get-product'

const handler = async (req, res) => {
  const id = req.query.id
  const strapiResp = await getProduct(id)
  res.status(strapiResp.status).json(strapiResp.data)
}

export default handler
