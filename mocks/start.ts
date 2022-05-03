import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

if (typeof window === 'undefined') {
  const server = setupServer(...handlers)
  server.listen({ onUnhandledRequest: 'bypass' })
  console.info('🔶 Mock server running')

  process.once('SIGINT', () => server.close())
  process.once('SIGTERM', () => server.close())
} else {
  const worker = setupWorker(...handlers)
  worker.start({ onUnhandledRequest: 'bypass' })
  console.info('🔶 Mock worker started')
}
