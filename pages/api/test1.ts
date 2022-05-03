import { withSentry } from '@sentry/nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const doAsyncWork = () => Promise.reject(new Error('API Test 1'))
doAsyncWork()

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export default withSentry(handler)
