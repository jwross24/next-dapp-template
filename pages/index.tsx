import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import InfoCard from '../components/InfoCard'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/about" passHref>
            <InfoCard
              title="About Page &rarr;"
              description="Cypress will test if this link is working."
            />
          </Link>

          <InfoCard
            href="https://nextjs.org/docs"
            title="Documentation &rarr;"
            description="Find in-depth information about Next.js features and its API."
          />

          <InfoCard
            href="https://nextjs.org/learn"
            title="Learn &rarr;"
            description="Learn about Next.js in an interactive course with quizzes!"
          />

          <InfoCard
            href="https://github.com/vercel/next.js/tree/canary/examples"
            title="Examples &rarr;"
            description="Discover and deploy boilerplate example Next.js projects."
          />

          <InfoCard
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy &rarr;"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>

        <div className="mx-auto max-w-[700]">
          <h2>Sentry Simple Example 🚨</h2>
          <p>
            This example demonstrates how to record unhandled exceptions in your
            code with Sentry. There are several test pages below that result in
            various kinds of unhandled exceptions.
          </p>
          <div>
            It also demonstrates the performance monitoring the SDK is able to
            do:
            <ol>
              <li>
                A front-end transaction is recorded for each pageload or
                navigation.
              </li>
              <li>
                A backend transaction is recorded for each API or page route.
                (Note that currently only API routes are traced on Vercel.)
              </li>
              <li>
                Errors which occur during transactions are linked to those
                transactions in Sentry and can be found in the [trace
                navigator](https://docs.sentry.io/product/sentry-basics/tracing/trace-view/).
              </li>
              <li>
                Manual performance instrumentation is demonstrated in the final
                example below (throwing an error from an event handler).
              </li>
            </ol>
          </div>
          <p>
            <strong>Important:</strong> exceptions in development mode take a
            different path than in production. These tests should be run on a
            production build (i.e. &apos;next build&apos;).{' '}
            <a href="https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-error-page">
              Read more
            </a>
          </p>
          <ol>
            <li>API route exceptions/transactions</li>
            Note that 1 and 2 are not expected to work if deployed to Vercel
            yet.
            <ol>
              <li>
                API has a top-of-module Promise that rejects, but its result is
                not awaited. Sentry should record Error(&apos;API Test 1&apos;).{' '}
                <a href="/api/test1" target="_blank">
                  Open in a new tab
                </a>
              </li>
              <li>
                API has a top-of-module exception. Sentry should record
                Error(&apos;API Test 2&apos;).{' '}
                <a href="/api/test2" target="_blank">
                  Open in a new tab
                </a>
              </li>
              <li>
                API has has an exception in its request handler. Sentry should
                record Error(&apos;API Test 3&apos;).{' '}
                <a href="/api/test3" target="_blank">
                  Open in a new tab
                </a>
              </li>
              <li>
                API uses a try/catch to handle an exception and records it.
                Sentry should record Error(&apos;API Test 4&apos;).{' '}
                <a href="/api/test4" target="_blank">
                  Open in a new tab
                </a>
              </li>
            </ol>
            <li>SSR exceptions/transactions</li>
            Note that there are currently two known bugs with respect to SSR
            transactions: they don&apos;t get recorded on Vercel, and ones that
            are recorded and have an error are grouped in the Sentry UI by the
            error page name rather than the requested page name.
            <ol>
              <li>
                getServerSideProps throws an Error. This should cause _error.js
                to render and record Error(&apos;SSR Test 1&apos;) in Sentry.{' '}
                <a href="/ssr/test1" target="_blank">
                  Open in a new tab
                </a>{' '}
                or{' '}
                <Link href="/ssr/test1">
                  <a>Perform client side navigation</a>
                </Link>
              </li>
              <li>
                getServerSideProps returns a Promise that rejects. This should
                cause _error.js to render and record Error(&apos;SSR Test
                2&apos;) in Sentry.{' '}
                <a href="/ssr/test2" target="_blank">
                  Open in a new tab
                </a>
              </li>
              <li>
                getServerSideProps calls a Promise that rejects, but does not
                handle the rejection or await its result (returning
                synchronously). Sentry should record Error(&apos;SSR Test
                3&apos;), but <strong>will not</strong> when deployed to Vercel
                because the serverless function will already have exited.{' '}
                <a href="/ssr/test3" target="_blank">
                  Open in a new tab
                </a>
              </li>
              <li>
                getServerSideProps manually captures an exception from a
                try/catch. This should record Error(&apos;SSR Test 4&apos;) in
                Sentry.{' '}
                <a href="/ssr/test4" target="_blank">
                  Open in a new tab
                </a>
              </li>
            </ol>
            <li>Client exceptions</li>
            <ol>
              <li>
                There is a top-of-module Promise that rejects, but its result is
                not awaited. Sentry should record Error(&apos;Client Test
                1&apos;).{' '}
                <Link href="/client/test1">
                  <a>Perform client side navigation</a>
                </Link>{' '}
                or{' '}
                <a href="/client/test1" target="_blank">
                  Open in a new tab
                </a>
              </li>
              <li>
                There is a top-of-module exception. _error.js should render and
                record ReferenceError(&apos;process is not defined&apos;) in
                Sentry.{' '}
                <Link href="/client/test2">
                  <a>Perform client side navigation</a>
                </Link>{' '}
                or{' '}
                <a href="/client/test2" target="_blank">
                  Open in a new tab
                </a>
              </li>
              <li>
                There is an exception during React lifecycle that is caught by
                Next.js&apos;s React Error Boundary. In this case, when the
                component mounts. This should cause _error.js to render and
                record Error(&apos;Client Test 3&apos;) in Sentry.{' '}
                <Link href="/client/test3">
                  <a>Perform client side navigation</a>
                </Link>{' '}
                or{' '}
                <a href="/client/test3" target="_blank">
                  Open in a new tab
                </a>
              </li>
              <li>
                There is an unhandled Promise rejection during React lifecycle.
                In this case, when the component mounts. Sentry should record
                Error(&apos;Client Test 4&apos;).{' '}
                <Link href="/client/test4">
                  <a>Perform client side navigation</a>
                </Link>{' '}
                or{' '}
                <a href="/client/test4" target="_blank">
                  Open in a new tab
                </a>
              </li>
              <li>
                An Error is thrown from an event handler. Sentry should record
                Error(&apos;Client Test 5&apos;). (This page also demonstrates
                how to manually instrument your code for performance
                monitoring.){' '}
                <Link href="/client/test5">
                  <a>Perform client side navigation</a>
                </Link>{' '}
                or{' '}
                <a href="/client/test5" target="_blank">
                  Open in a new tab
                </a>
              </li>
            </ol>
          </ol>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
