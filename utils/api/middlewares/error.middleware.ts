import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorHandler, NextHandler } from 'next-connect'

export const errorMiddleware = (
  error: ErrorHandler<NextApiRequest, NextApiResponse>,
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  console.error('[API_ERROR_MIDDLEWARE]', '[Error]', error)

  return res.status(500).json({ message: res.statusMessage || 'Something went wrong' })
}
