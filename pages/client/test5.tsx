import * as Sentry from '@sentry/nextjs'
import { NextPage } from 'next'

const Test5: NextPage = () => {
  const handleClick = () => {
    const transaction = Sentry.startTransaction({
      name: 'Testing performance',
    })
    Sentry.configureScope((scope) => {
      scope.setSpan(transaction)
    })

    try {
      // Some operation the button does, but fails
      throw new Error('Client Test 5')
    } catch (error) {
      Sentry.captureException(error)
    } finally {
      transaction.finish()
    }
  }

  return (
    <>
      <h1>Client Test 5</h1>
      <button onClick={handleClick}>
        Click me to create a transaction and throw an Error.
      </button>
    </>
  )
}

export default Test5
