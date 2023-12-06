const API_URL = 'http://localhost:5000'
const endpoint = 'invoice'

export const getAllInvoices = () => {
  return fetch(`${API_URL}/${endpoint}`)
    .then(res => res.json())
}

export const createInvoice = (invoice) => {
  return fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(invoice)
  })
    .then(res => res.json())
}

export const deleteInvoice = (id) => {
  return fetch(`${API_URL}/${endpoint}/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
}
