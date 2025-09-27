// ============================================================================
// FILE: app/providers.tsx
// PostHog init (client‑side) + context provider
// ============================================================================
"use client";


import { PostHogProvider } from "@posthog/react";
import posthog, { type PostHogConfig } from "posthog-js";
import { useEffect } from "react";


export default function Providers({ children }: { children: React.ReactNode }) {
useEffect(() => {
if (typeof window === "undefined") return;
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
if (!key) {
if (process.env.NODE_ENV !== "production") {
console.warn("PostHog: NEXT_PUBLIC_POSTHOG_KEY is not set.");
}
return;
}
const config: Partial<PostHogConfig> = {
api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
capture_pageview: true,
capture_pageleave: true,
person_profiles: "identified_only",
// cookie_domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || ".appareljunction.com",
};
posthog.init(key, config);
}, []);
return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
