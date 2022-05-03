import { withSentry } from '@sentry/nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

function work() {
  throw new Error('API Test 3')
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  work()

  res.status(200).json({ name: 'John Doe' })
}

export default withSentry(handler)
