import axios from 'axios'

export const signIn = async user => {
  const { data } = await axios.post(`http://localhost:3000/api/signIn`, user)
  return data
}
