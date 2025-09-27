// components/ICNSections.tsx
"use client";

import { ScheduleLink } from "@/components/ScheduleLink";
import SmartButton from "@/components/ui/SmartButton";
import { PHEvent } from "@/lib/ph";
import { type Preset } from "@/lib/storePresets";
import { useState } from "react";

/** simple helper to hide broken images */
function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setOk(false)}
    />
  );
}

function Section({
  eyebrow,
  title,
  copy,
  bullets,
  img,
  reverse = false,
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  bullets?: string[];
  img?: { src: string; alt: string };
  reverse?: boolean;
}) {
  return (
    <section className="py-12 sm:py-16">
      <div
        className={[
          "container-max grid items-center gap-8",
          reverse ? "sm:grid-cols-[1.15fr_1fr]" : "sm:grid-cols-[1fr_1.15fr]",
        ].join(" ")}
      >
        {/* Text */}
        <div className={reverse ? "order-1 sm:order-none" : ""}>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-neutral-700">{copy}</p>
          {bullets && bullets.length > 0 && (
            <ul className="mt-5 space-y-2 text-neutral-800">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image */}
        <div className={reverse ? "" : "order-1 sm:order-none"}>
          {img && (
            <div className="mx-auto w-full max-w-2xl">
              <Img
                src={img.src}
                alt={img.alt}
                className="w-full rounded-2xl border border-neutral-200 bg-white object-cover shadow-sm"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      t: "Ease of Access",
      d: "Streamline the procurement of branded merchandise.",
      i: "🔑",
    },
    {
      t: "Minimize Administration",
      d: "Leverage our platform to reduce your administrative cost.",
      i: "🧰",
    },
    {
      t: "Control Branding",
      d: "High-quality, corporate-approved merchandise.",
      i: "🖋️",
    },
    {
      t: "Control & Reduce Costs",
      d: "Use budgets and reporting to keep spend in line.",
      i: "💸",
    },
    {
      t: "Custom Web Functionality",
      d: "Tailored workflows and integrations to your needs.",
      i: "💻",
    },
    {
      t: "Same Day Shipping",
      d: "Ship in-stock items the same day the order is placed.",
      i: "🚚",
    },
  ];
  return (
    <section className="py-12 sm:py-16">
      <div className="container-max">
        <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Key Benefits
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ t, d, i }) => (
            <article
              key={t}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <div className="text-4xl">{i}</div>
              <h3 className="mt-4 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-neutral-700">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ready({ slug }: { slug: string }) {
  return (
    <section className="py-10 sm:py-14">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-2xl bg-[#0e1a22] px-6 py-10 text-white sm:px-10">
          {/* decorative screenshots (optional) */}
          <div className="pointer-events-none absolute -right-6 -top-12 hidden w-[520px] rotate-[2deg] sm:block">
            <Img
              src="/media/dashboard.png"
              alt=""
              className="w-full rounded-lg shadow-2xl ring-1 ring-white/10"
            />
            <div className="-mt-14 ml-16 w-[420px]">
              <Img
                src="/media/store-shot.png"
                alt=""
                className="w-full rounded-lg shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
            Get started
          </p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Let’s discuss your company store needs. Fill the form above or click
            below and we’ll be in touch quickly.
          </p>

          <div className="mt-6">
            <ScheduleLink slug={slug} variant="n">
              <SmartButton
                variant="primary"
                surface="dark"
                onClick={() =>
                  PHEvent("ready_cta_click", { slug, variant: "n" })
                }
              >
                Get started
              </SmartButton>
            </ScheduleLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Renders the 7 sections in the required order */
export function ICNSections({ preset }: { preset: Preset }) {
  return (
    <>
      {/* 1) Custom Online Company Store */}
      <Section
        eyebrow="Streamlined website"
        title="Custom Online Company Store"
        copy="Our platform offers a streamlined shopping experience with powerful features and apps you can tailor to your unique business needs."
        bullets={[
          "Mobile-optimized",
          "Streamlined, secure checkout",
          "Same-day order fulfillment",
          "On-demand production options",
          "Real-time data & reporting",
          "Professional photography included",
        ]}
        img={{ src: "/media/laptop.png", alt: "Company store website" }}
        reverse={false}
      />

      {/* 2) Custom Branded Merchandise */}
      <Section
        eyebrow="Your favorite merch"
        title="Custom Branded Merchandise"
        copy="Our merchandising and design teams help you select and design items that reflect your brand—while our company store handles seamless distribution."
        bullets={[
          "Items tailored to your audience & branding guidelines",
          "Premium and value options to fit any budget",
          "Delivered on time & on budget",
        ]}
        img={{ src: "/media/merch-kit.png", alt: "Branded merchandise set" }}
        reverse={true}
      />

      {/* 3) Product Storage & Fulfillment */}
      <Section
        eyebrow="Same day shipping"
        title="Product Storage & Fulfillment"
        copy="Your company store connects directly to our fulfillment center. Orders are picked, packed, and shipped quickly—often the same day—with tracking visibility."
        bullets={[
          "Secure warehouse with alarm/camera monitoring",
          "Real-time inventory visibility",
          "FedEx, UPS, and USPS options",
          "Use your own discounted carrier rates if desired",
        ]}
        img={{ src: "/media/warehouse.png", alt: "Warehouse and picking" }}
        reverse={false}
      />

      {/* 4) On-demand production */}
      <Section
        eyebrow="On-demand production"
        title="All of the items you need, quickly produced on-demand"
        copy="Offer a wide selection with no inventory or MOQ. Our production network is integrated to streamline approvals and decoration."
        bullets={[
          "Quick on-demand production times",
          "Eliminate stocking multiple sizes & colors",
          "More choice without upfront inventory",
        ]}
        img={{ src: "/media/embroidery.png", alt: "Embroidery / production" }}
        reverse={true}
      />

      {/* 5) World-class Support Team */}
      <Section
        eyebrow="Dedicated support"
        title="World-class Support Team"
        copy="Your store is supported by a dedicated team—account management, e-commerce support, and integrations specialists—all US-based."
        bullets={[
          "Dedicated merchandise account manager",
          "US-based e-commerce support",
          "Web development & integrations specialists",
        ]}
        img={{ src: "/media/support.png", alt: "Support specialist" }}
        reverse={false}
      />

      {/* 6) Key Benefits */}
      <Benefits />

      {/* 7) Ready to get started? */}
      <Ready slug={(preset as any).slug} />
    </>
  );
}

