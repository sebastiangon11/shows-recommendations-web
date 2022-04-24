import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

import { errorMiddleware } from '../../../utils/api/middlewares/error.middleware'
import { loggerMiddleware } from '../../../utils/api/middlewares/logger.middleware'

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onError: errorMiddleware,
})

const getShow = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { showId },
  } = req

  // TODO: Encapsulate api service
  const apiResponse = await fetch(`http://localhost:8080/shows/${showId}`)

  if (!apiResponse.ok) {
    const errorJson = await apiResponse.json()
    res.status(apiResponse.status)
    res.statusMessage = errorJson.message || 'Error from backend'
    throw new Error('ToDo: Create BackendApiError')
  }

  const showResponse = await apiResponse.json()
  return res.status(200).json(showResponse)
}

handler.use(loggerMiddleware)
handler.get(getShow)

export default handler
