// components/ScheduleLink.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import posthog from "posthog-js";

// build a server-safe base URL (no window / no PostHog) to avoid hydration diffs
function buildScheduleUrlBase({
  slug,
  variant,
  base = "https://calendar.appareljunction.com/index.php/",
  utmSource = "store.appareljunction.com",
}: {
  slug: string;
  variant: "a" | "b";
  base?: string;
  utmSource?: string;
}) {
  const url = new URL(base);
  url.searchParams.set("provider", "5");
  url.searchParams.set("service", "5");
  url.searchParams.set("utm_source", utmSource);
  url.searchParams.set("utm_medium", "landing");
  url.searchParams.set("utm_campaign", slug.split("/")[0]);     // e.g. independent-contractors
  url.searchParams.set("utm_content", `${slug}-${variant}`);    // e.g. independent-contractors-a
  return url;
}

export function ScheduleLink({
  slug,
  variant,
  children,
  className,
  onClick,
}: {
  slug: string;
  variant: "a" | "b";
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  // initial href matches SSR output
  const initialHref = useMemo(
    () => buildScheduleUrlBase({ slug, variant }).toString(),
    [slug, variant]
  );
  const [href, setHref] = useState(initialHref);

  // upgrade href on the client with window hostname + PostHog distinct id
  useEffect(() => {
    const url = buildScheduleUrlBase({
      slug,
      variant,
      utmSource:
        typeof window !== "undefined" ? window.location.hostname : undefined,
    });

    try {
      const id = posthog?.get_distinct_id?.();
      if (id) url.searchParams.set("ph_distinct_id", id);
    } catch {
      /* noop */
    }

    const upgraded = url.toString();
    if (upgraded !== href) setHref(upgraded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, variant]);

  return (
    <a
      href={href}
      className={className}
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export function ScheduleButton({
  slug,
  variant,
  children = "Schedule a Demo",
  className,
  onClick,
}: {
  slug: string;
  variant: "a" | "b";
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-medium shadow-sm";

  // If caller supplies their own color utilities, don't force our default skin
  const callerSetsColor = /\b(bg-|text-|border-)/.test(className ?? "");

  const defaultSkin =
    "bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800";

  return (
    <ScheduleLink
      slug={slug}
      variant={variant}
      onClick={onClick}
      className={[base, callerSetsColor ? "" : defaultSkin, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </ScheduleLink>
  );
}

