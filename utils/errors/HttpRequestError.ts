const TAG = 'HTTP_REQUEST_ERROR'

export class HttpRequestError extends Error {
  constructor(message: string, public url: string, public status: number, public statusText: string) {
    super(message ? `[${TAG}: ${message}]` : `[${TAG}]`)
    Error.captureStackTrace(this, HttpRequestError)
  }
}
