'use client'

import { usePostHog, useFeatureFlagVariantKey } from '@posthog/react'

export default function TestPosthog() {
  const posthog = usePostHog()
  const variant = useFeatureFlagVariantKey('lp_hero_variant') ?? 'control'

  const handleClick = () => {
    posthog?.capture('clicked_test_button', {
      variant,
      ts: new Date().toISOString(),
      page: typeof window !== 'undefined' ? window.location.pathname : '/',
    })
  }

  return (
    <div className="mt-8">
      <button
        onClick={handleClick}
        className="rounded-lg border px-4 py-2 hover:bg-gray-100"
      >
        Send Test Event to PostHog
      </button>
      <p className="text-sm text-gray-500 mt-2">
        (Flag variant: <strong>{variant}</strong>)
      </p>
    </div>
  )
}

