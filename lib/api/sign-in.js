import axios from 'axios'

export const signIn = async user => {
  const { data } = await axios.post(`http://localhost:3000/api/signIn`, user)
  return data
}

export const userInfo = async jwt => {
  const headers = {
    headers: {
      Authorization: 'Bearer ' + jwt,
    },
  }
  try {
    const { data } = await axios.get('http://localhost:1337/users/me', headers)
    return data
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
