import axios from 'axios'

export const userInfo = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/signIn/user')
    return data
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
