import { NextPage } from 'next'
import { useEffect } from 'react'

const Test4: NextPage = () => {
  useEffect(() => {
    const doTest = async () => {
      const doAsyncWork = () => Promise.reject(new Error('Client Test 4'))
      await doAsyncWork()
    }
    doTest()
  }, [])

  return <h1>Client Test 4</h1>
}

export default Test4
