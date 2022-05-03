import { NextPage } from 'next'

const env = process.env
const isProd = env.NODE_ENV === 'production'

const Test2: NextPage = () => (
  <>
    <h1>Client Test 2</h1>
    <p>isProd: {isProd}</p>
  </>
)

export default Test2
