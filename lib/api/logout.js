import axios from 'axios'

export const logout = async () => {
  await axios.get('http://localhost:3000/api/logout')
}
