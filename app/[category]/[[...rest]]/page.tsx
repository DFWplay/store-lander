// app/[category]/[[...rest]]/page.tsx
import { notFound } from "next/navigation";
import { getPresetBySlug } from "@/lib/storePresets";

// Heroes
import { Hero } from "@/components/Hero";
import { HeroIC } from "@/components/HeroIC";
import { HeroICMessage } from "@/components/HeroICMessage";

// Body sections
import { Features } from "@/components/Features";
import { ProductGrid } from "@/components/ProductGrid";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { ICNSections } from "@/components/ICNSections"; // 👈 new 7-part stack

// Utilities
import { Exposure } from "@/components/Exposure";
import { Compliance1099 } from "@/components/Compliance1099";

type Params = Promise<{ category: string; rest?: string[] }>;
type Variant = "a" | "b" | "n";

export default async function Landing({ params }: { params: Params }) {
  // Next 15: params are async
  const { category, rest } = await params;

  // Supported URL shapes:
  // /[category]/a
  // /[category]/b
  // /[category]/n
  // /[category]/[sub]/a|b|n
  const parts = rest ?? []; // [] | ["a"] | ["n"] | ["sub","a"] | ["sub","n"]
  const hasSub = parts.length >= 2;
  const maybeSub = hasSub ? parts[0] : undefined;
  const maybeVariant = hasSub ? parts[1] : parts[0];

  const slug = hasSub ? `${category}/${maybeSub}` : category;
  const variant: Variant =
    maybeVariant === "b" ? "b" : maybeVariant === "n" ? "n" : "a";

  const preset = getPresetBySlug(slug);
  if (!preset) return notFound();

  const isIC =
    slug === "independent-contractors" ||
    slug.startsWith("independent-contractors/");

  // Small copy tweaks for IC variant B
  const overrides =
    isIC && variant === "b"
      ? {
          headline: "Protect brand standards with a contractor-friendly store",
          primaryCta: { ...preset.primaryCta, label: "Schedule a Demo" },
          badge: "1099 compliant • Reporting",
          hideSecondaryCta: true as any,
        }
      : {};

  const merged = { ...preset, ...overrides } as typeof preset;

  return (
    <main>
      {/* Expose experiment to analytics */}
      <Exposure experiment={`lp-${slug}-v1`} variant={variant} slug={slug} />

      {/* === HERO ===
         n -> same hero as A (GIF + Contact Sales swap)
         IC:
           A -> HeroIC (GIF/form)
           B -> HeroICMessage (focused)
         non-IC -> generic Hero
      */}
      {variant === "n" ? (
        <HeroIC preset={merged} variant="a" gifSrc="/media/brand.gif" />
      ) : isIC ? (
        variant === "b" ? (
          <HeroICMessage preset={merged} variant={variant} />
        ) : (
          <HeroIC preset={merged} variant={variant} gifSrc="/media/brand.gif" />
        )
      ) : (
        <Hero preset={merged} />
      )}

      {/* === BODY ===
         n -> 7-part stack in requested order (ICNSections)
         A/B -> existing sections
      */}
      {variant === "n" ? (
        <ICNSections preset={merged} />
      ) : (
        <>
          <Features preset={merged} />
          {isIC && <Compliance1099 slug={slug} variant={variant} />}
          <ProductGrid preset={merged} />
          <Testimonials preset={merged} />
          <CTA preset={merged} variant={variant} />
        </>
      )}
    </main>
  );
}

