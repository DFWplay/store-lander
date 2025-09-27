// lib/ph.ts
"use client";

import posthog from "posthog-js";

/**
 * Initialize PostHog on the client with a *full* api_host.
 * If NEXT_PUBLIC_POSTHOG_HOST is a full https:// URL, we use it.
 * Otherwise we fall back to the official US cloud host.
 */
export function initPH() {
  // already initialized guard
  // @ts-ignore
  if ((posthog as any).__aj_init) return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;

  const envHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  const api_host =
    envHost && envHost.startsWith("http")
      ? envHost
      : "https://us.i.posthog.com";

  posthog.init(key, {
    api_host,
    capture_pageview: false,
    autocapture: true,
  });

  // mark as initialized so we don't re-init on hot reloads
  // @ts-ignore
  (posthog as any).__aj_init = true;
}

export function PHEvent(name: string, props?: Record<string, any>) {
  try {
    posthog.capture(name, props);
  } catch {}
}

