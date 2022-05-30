import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorHandler, NextHandler } from 'next-connect'
import { HttpRequestError } from '../../errors/HttpRequestError'
import { getErrorMessage } from '../../getErrorMessage'

export const errorMiddleware = (
  error: ErrorHandler<NextApiRequest, NextApiResponse>,
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  let log = `[API_ERROR_MIDDLEWARE] ${getErrorMessage(error)}`

  if (error instanceof HttpRequestError) {
    log += ` [URL: ${error.url}]`
    log += ` [Status: ${error.status}]`
    log += ` [StatusText: ${error.statusText}]`
  }

  console.error(log, error)
  return res.status(500).json({ message: 'Internal Server Error' })
}
