import { userInfo } from '../../../lib/api/sign-in'

const handler = async (req, res) => {
  const { jwt } = req.cookies
  if (!jwt) {
    res.status(401).end()
    return
  }
  try {
    const { id, username } = await userInfo(jwt)
    res.status(200).json({ id, name: username })
  } catch (error) {
    res.status(401).end()
  }
}

export default handler
