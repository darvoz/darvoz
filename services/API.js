export const blobToBase64 = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  return new Promise((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result.replace(/^data:.+;base64,/, ''))
    }
  })
}
const API_ENDPOINT = 'https://limitless-journey-69923.herokuapp.com/api/darvoz/'
export const getToken = () => {
  const token = localStorage.getItem('darvoz.pt-id')
  if (token) {
    return Promise.resolve(token)
  }
  return fetch(API_ENDPOINT + 'token', {
    method: 'GET'
  }).then((response) => response.text())
}

export const uploadFile = (content, data, token) => {
  return fetch(API_ENDPOINT + 'upload?token=' + token, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content, ...data })
  })
}
