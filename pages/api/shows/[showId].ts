import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { recommendationsClient } from '../../../utils/api'

import { errorMiddleware } from '../../../utils/api/middlewares/error.middleware'
import { loggerMiddleware } from '../../../utils/api/middlewares/logger.middleware'

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onError: errorMiddleware,
})

const getShow = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { showId },
  } = req

  const showResponse = await recommendationsClient(`/users/1/shows/${showId}`)
  return res.status(200).json(showResponse)
}

handler.use(loggerMiddleware)
handler.get(getShow)

export default handler
