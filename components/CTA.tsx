// components/CTA.tsx
"use client";

import { PHEvent } from "@/lib/ph";
import { type Preset } from "@/lib/storePresets";

export function CTA({ preset, variant }: { preset: Preset; variant?: "a" | "b" }) {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-50" />
      <div className="relative container-narrow text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          Ready to outfit your 1099 workforce?
        </h2>
        <p className="mt-2 text-base text-neutral-700">
          We will map SKUs to your roles and sizes in minutes.
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href={preset.primaryCta.href ?? "#"}
            onClick={() => PHEvent("lp_primary_cta_click", { slug: preset.slug, variant, source: "cta" })}
            className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            aria-label={preset.primaryCta.label || "Book a 30-min demo"}
          >
            {preset.primaryCta.label || "Book a 30-min demo"}
          </a>
        </div>

        <p className="mt-3 text-xs text-neutral-500">No obligation. 15–30 min live walk-through.</p>
      </div>
    </section>
  );
}

