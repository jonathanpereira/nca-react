import axios from 'axios'

export const API_URL = process.env.REACT_APP_API_URL

export const getApiUrl = (path) => {
  return `${API_URL}${path}`
}

export const apiGet = async (path) => {
  const url = getApiUrl(path)

  return await axios.get(url)
}
