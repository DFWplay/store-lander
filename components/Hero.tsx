// components/Hero.tsx
"use client";

import { type Preset } from "@/lib/storePresets";
import SmartButton from "@/components/ui/SmartButton";
import { ScheduleLink } from "@/components/ScheduleLink";
import { PHEvent } from "@/lib/ph";

export function Hero({ preset }: { preset: Preset }) {
  return (
    <section className="bg-white py-12">
      <div className="container-max">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          {preset.badge}
        </div>
        <h1 className="mt-4 text-4xl font-bold">{preset.headline}</h1>
        <p className="mt-3 text-lg text-neutral-700">{preset.tagline}</p>

        <div className="mt-6 flex gap-3">
          <ScheduleLink slug={preset.slug} variant="a">
            <SmartButton
              variant="primary"
              onClick={() => PHEvent("lp_primary_cta_click", { slug: preset.slug })}
            >
              {preset.primaryCta.label || "Book a 30-min demo"}
            </SmartButton>
          </ScheduleLink>
        </div>
      </div>
    </section>
  );
}

