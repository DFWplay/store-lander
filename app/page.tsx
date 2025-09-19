import TestPosthog from './components/TestPosthog'

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Apparel Junction Landing</h1>
      <p className="mt-2">If you click the button below, we’ll send a custom PostHog event.</p>
      <TestPosthog />
    </main>
  )
}

