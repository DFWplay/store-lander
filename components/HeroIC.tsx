// components/HeroIC.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ScheduleLink } from "@/components/ScheduleLink";
import SmartButton from "@/components/ui/SmartButton";
import DemoForm from "@/components/DemoForm";
import { PHEvent } from "@/lib/ph";
import { type Preset } from "@/lib/storePresets";

export function HeroIC({
  preset,
  variant = "a",
  gifSrc = "/media/brand.gif",
}: {
  preset: Preset;
  variant?: "a" | "b";
  gifSrc?: string;
}) {
  // 👇 bring back the GIF → form toggle
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative isolate py-10 sm:py-14">
      {/* Background image + dark overlay for readability */}
      <Image
        src={(preset as any).heroImage ?? "/img/roofingteam.png"}
        alt=""
        fill
        priority
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-neutral-900/65" />

      <div className="container-max grid grid-cols-1 gap-8 px-6 sm:grid-cols-2">
        {/* Left: copy + CTAs */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {preset.badge}
          </div>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {preset.headline}
          </h1>
          <p className="mt-3 text-lg text-white/90">{preset.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ScheduleLink slug={preset.slug} variant={variant}>
              <SmartButton
                variant="primary"
                surface="dark"
                onClick={() =>
                  PHEvent("lp_primary_cta_click", { slug: preset.slug, variant })
                }
              >
                {preset.primaryCta.label || "Book a 30-min demo"}
              </SmartButton>
            </ScheduleLink>

            {/* 👇 restored secondary CTA that swaps GIF -> form */}
            <SmartButton
              variant="ghost"
              surface="dark"
              onClick={() => {
                PHEvent("lp_contact_sales_click", { slug: preset.slug, variant });
                setShowForm(true);
              }}
            >
              Contact sales
            </SmartButton>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-y-2 text-sm text-white/90 sm:grid-cols-2 sm:gap-x-8">
            {preset.benefits.slice(0, 4).map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: panel that shows GIF first, then swaps to form */}
        <div className="relative rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
          {showForm ? (
            <DemoForm slug={preset.slug} />
          ) : (
            <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
              {/* Use unoptimized to keep animated GIF smooth */}
              <Image
                src={gifSrc}
                alt="Brand animation"
                fill
                unoptimized
                priority
                className="object-contain"
              />
              <div className="absolute bottom-2 left-3 right-3 rounded-md bg-black/50 px-3 py-2 text-xs text-white/80">
                Click “Contact sales” to request info
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

