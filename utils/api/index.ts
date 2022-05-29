type Endpoint = string

/**
 * Inspired on https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
 * and https://github.com/kentcdodds/bookshelf/blob/main/src/utils/api-client.js
 * @param endpoint
 * @param RequestConfig
 * @returns Promise
 */

const apiClient = <T>(endpoint: Endpoint, requestConfig: RequestInit = {}): Promise<T> => {
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

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, config).then(async (response) => {
    if (response.ok) {
      return await response.json()
    } else {
      const errorMessage = await response.text()
      return Promise.reject(new Error(errorMessage))
    }
  })
}

export { apiClient }
