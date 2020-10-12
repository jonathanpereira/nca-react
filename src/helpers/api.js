import axios from 'axios'

export const getApiUrl = (path) => {
  return `http://api.ncaudio.local/api${path}`
}

export const apiGet = (path) => {
  const url = getApiUrl(path)

  return axios.get(url)
}
