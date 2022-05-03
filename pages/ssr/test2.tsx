import { NextPage } from 'next'

const Test2: NextPage = () => <h1>SSR Test 2</h1>

export function getServerSideProps() {
  return Promise.reject(Error('SSR Test 2'))
}

export default Test2
