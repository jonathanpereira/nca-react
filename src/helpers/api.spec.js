import axios from 'axios'

import {apiGet, API_URL} from './api'

jest.mock('axios')

describe('apiGet', () => {
  it('should fetches successfully data from an API', async () => {
    const data = {
      data: []
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(data))

    await expect(apiGet('/events')).resolves.toEqual(data)

    expect(axios.get).toHaveBeenCalledWith(`${API_URL}/events`)
  })

  it('should fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error'
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))

    await expect(apiGet('/events')).rejects.toThrow(errorMessage)
  })
})
