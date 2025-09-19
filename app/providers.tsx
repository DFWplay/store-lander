'use client'

import { PostHogProvider } from '@posthog/react'
import posthog, { type PostHogConfig } from 'posthog-js'
import { useEffect } from 'react'

/**
 * Best-practice PostHog client init for Next.js (App Router)
 * - Uses env-driven config
 * - Safe in SSR (guards on window)
 * - Pageviews enabled
 * - Optional cookie_domain for cross-subdomain identity
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) {
      if (process.env.NODE_ENV !== 'production') {
        // Helpful in dev if key not set
        console.warn('PostHog: NEXT_PUBLIC_POSTHOG_KEY is not set.')
      }
      return
    }

    const config: Partial<PostHogConfig> = {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      capture_pageview: true,            // track route changes automatically
      capture_pageleave: true,           // useful for bounce/abandon analysis
      person_profiles: 'identified_only' // avoid accidental PII on anonymous users
      // If you want the cookie to work across *.appareljunction.com subdomains:
      // (does NOT share to entirely different domains)
      // cookie_domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || '.appareljunction.com',
    }

    posthog.init(key, config)
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

