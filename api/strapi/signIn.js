import axios from 'axios'

export const signIn = async user => {
  try {
    const body = { identifier: user.email, password: user.password }
    const { status, data } = await axios.post(
      'http://localhost:1337/auth/local',
      body
    )
    return { status, data }
  } catch (error) {}
}
