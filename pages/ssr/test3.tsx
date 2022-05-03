import { NextPage } from 'next'

const Test3: NextPage = () => <h1>SSR Test 3</h1>

export function getServerSideProps() {
  const doAsyncWork = () => Promise.reject(Error('SSR Test 3'))

  doAsyncWork()

  return { props: {} }
}

export default Test3
