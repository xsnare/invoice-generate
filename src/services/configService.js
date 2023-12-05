const API_URL = 'http://localhost:5000'
const endpoint = 'config'

const getConfig = () => {
  return fetch(`${API_URL}/${endpoint}`)
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    })
}

const updateConfig = (data) => {
  return fetch(`${API_URL}/${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    })
}

export const configService = {
  getConfig,
  updateConfig
}
