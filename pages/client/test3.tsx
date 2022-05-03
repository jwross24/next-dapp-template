import { NextPage } from 'next'
import { useEffect } from 'react'

const Test3: NextPage = () => {
  useEffect(() => {
    throw new Error('Client Test 3')
  }, [])

  return <h1>Client Test 3</h1>
}

export default Test3
