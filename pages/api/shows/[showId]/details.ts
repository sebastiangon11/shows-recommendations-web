import { response } from 'msw'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Show } from '../../../../types'
import { getErrorMessage } from '../../../../utils/getErrorMessage'

interface ErrorResponse {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Show | ErrorResponse>
) {
  const {
    query: { showId },
  } = req

  try {
    const apiResponse = await fetch(`https://backend.com/shows/${showId}/details`)

    if (!apiResponse.ok) {
      const errorJson = await apiResponse.json()
      return res.status(apiResponse.status).json(errorJson)
    }

    const showResponse = await apiResponse.json()
    return res.status(200).json(showResponse)
  } catch (error) {
    return res.status(500).json({ message: getErrorMessage(error) })
  }
}
