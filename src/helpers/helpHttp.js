
const API_URL = 'http://localhost:5000'
const helpFetch = (endpoint, options = {}) => {
  options.methods = options.methods || 'GET'
  options.headers = { 'Content-Type': 'application/json' }

  if (options.body) { options.body = JSON.stringify(options.body) }

  return fetch(`${API_URL}/${endpoint}`, options).then(res => {
    return res.ok
      ? res.json()
      : Promise.reject({
        err: true,
        status: res.status || '00',
        statusText: res.statusText || 'There was an error'
      })
  })
}

export const helpHttp = {
  get: (endpoint) => helpFetch(endpoint),
  put: (endpoint, data) => helpFetch(endpoint, {
    method: 'PUT',
    body: data
  })
}
