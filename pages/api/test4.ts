import * as Sentry from '@sentry/nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    throw new Error('API Test 4')
  } catch (error) {
      Sentry.captureException(error)
  }

  // Flushing before returning is necessary if deploying to Vercel, see
  // https://vercel.com/docs/platform/limits#streaming-responses
  await Sentry.flush(2000)
  res.status(200).json({ name: 'John Doe' })
}

export default Sentry.withSentry(handler)
