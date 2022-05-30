import { HttpRequestError } from '../errors/HttpRequestError'

type Endpoint = string

/**
 * Inspired on https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
 * and https://github.com/kentcdodds/bookshelf/blob/main/src/utils/api-client.js
 * @param endpoint
 * @param RequestConfig
 * @returns Promise
 */

const httpClient =
  (baseURL: string) =>
  async <T>(endpoint: Endpoint, requestConfig: RequestInit = {}): Promise<T> => {
    const { method, headers, body } = requestConfig

    const config = {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...requestConfig,
    }

    const url = `${baseURL}${endpoint}`
    console.log('↗️', url)

    return fetch(url, config).then(async (response) => {
      if (response.ok) {
        return await response.json()
      } else {
        const message = await response.text()
        const error = new HttpRequestError(message, url, response.status, response.statusText)
        return Promise.reject(error)
      }
    })
  }

const apiClient = httpClient('')
const recommendationsClient = httpClient(process.env.RECOMMENDATIONS_BACKEND || '')

export { apiClient, recommendationsClient }
