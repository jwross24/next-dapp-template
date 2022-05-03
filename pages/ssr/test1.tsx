import { NextPage } from 'next'

const Test1: NextPage = () => <h1>SSR Test 1</h1>

export function getServerSideProps() {
  throw new Error('SSR Test 1')
}

export default Test1
