const API_ENDPOINT = 'https://darvoz.herokuapp.com/api/darvoz/'

export const sendMessage = (data) => {
  return fetch(API_ENDPOINT + 'quadra', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...data, timestamp: Date.now() })
  })
}
