// components/HeroDemo.tsx
"use client";

import { type Preset } from "@/lib/storePresets";
import DemoForm from "@/components/DemoForm";
import { PHEvent } from "@/lib/ph";

export function HeroDemo({ preset }: { preset: Preset }) {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 via-white to-white" />
      <div className="container-max grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:py-16">
        {/* Left copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {preset.badge}
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Request a demo
          </h1>
          <p className="mt-3 text-lg text-neutral-700">
            See how your {preset.brand?.toLowerCase?.() || "team"} can run a
            brand-correct, 1099-friendly company store—complete with on-demand
            production, budget controls, and real-time reporting.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-neutral-700">
            <li>• 15–30 minute live walkthrough</li>
            <li>• Tailored to your roles, sizes, and brand standards</li>
            <li>• No obligation</li>
          </ul>
        </div>

        {/* Right: form card */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5">
          <DemoForm
            slug={preset.slug}
            onSubmit={() => PHEvent("demo_request_submit", { slug: preset.slug, variant: "n" })}
          />
          <p className="mt-3 text-xs text-neutral-500">
            We respect your privacy. By submitting, you agree to be contacted about Apparel Junction.
          </p>
        </div>
      </div>
    </section>
  );
}

