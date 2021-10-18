import cookie from 'cookie'

import { signIn } from '../../../api/strapi/signIn'

const handler = async (req, res) => {
  const {
    data: { user, jwt },
    status,
  } = await signIn(req.body)
  res
    .status(status)
    .setHeader(
      'Set-Cookie',
      cookie.serialize('jwt', jwt, {
        path: '/api',
        httpOnly: true,
      })
    )
    .json({ id: user.id, name: user.username })
}

export default handler
