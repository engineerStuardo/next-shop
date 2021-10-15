import { signIn } from '../../../api/strapi/signIn'

const handler = async (req, res) => {
  const resUser = await signIn(req.body)
  res.status(resUser.status).json(resUser.data)
}

export default handler
