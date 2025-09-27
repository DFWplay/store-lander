// components/HeroICMessage.tsx
"use client";

import Image from "next/image";
import { ScheduleLink } from "@/components/ScheduleLink";
import SmartButton from "@/components/ui/SmartButton"; // <-- default import
import { type Preset } from "@/lib/storePresets";

export function HeroICMessage({
  preset,
  variant = "b",
}: {
  preset: Preset;
  variant?: "a" | "b";
}) {
  return (
    <section className="relative isolate py-16 sm:py-20">
      {/* Full-bleed background with a soft dark overlay */}
      <Image
        src={preset.heroImage ?? "/img/roofingteam.png"}
        alt=""
        fill
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-neutral-900/60" />

      <div className="mx-auto max-w-5xl px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white/90 px-3 py-1 text-xs text-neutral-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          {preset.badge}
        </div>

        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">{preset.headline}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">{preset.tagline}</p>

        <ul className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-y-2 text-sm text-white/90 sm:grid-cols-2 sm:gap-x-8">
          {preset.benefits.slice(0, 4).map((b) => (
            <li key={b} className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <ScheduleLink slug={preset.slug} variant={variant}>
            <SmartButton variant="primary" surface="dark">
              {preset.primaryCta.label}
            </SmartButton>
          </ScheduleLink>
        </div>
      </div>
    </section>
  );
}

