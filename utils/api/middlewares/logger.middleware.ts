import type { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'

export const loggerMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  console.log('In :>>', req.url)
  next()
  console.log('Out <<:', req.url, 'Status:', res.statusCode)
}
