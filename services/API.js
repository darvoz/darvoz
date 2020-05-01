export const blobToBase64 = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  return new Promise((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result.replace(/^data:.+;base64,/, ''))
    }
  })
}
const API_ENDPOINT =
  'https://limitless-journey-69923.herokuapp.com/api/darvoz/upload'

export const uploadFile = (content, data) => {
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content, ...data })
  })
}
