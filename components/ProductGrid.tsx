// components/ProductGrid.tsx
import Image from "next/image";
import { type Preset } from "@/lib/storePresets";
import LogoCloud from "@/components/LogoCloud";

export function ProductGrid({ preset }: { preset: Preset }) {
  const items = preset.sampleProducts ?? [];

  return (
    <section className="bg-white py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">Popular items</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <article key={p.sku} className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="relative h-40 w-full overflow-hidden rounded-lg bg-neutral-50">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-3 text-sm font-medium">{p.name}</div>
              <div className="text-xs text-neutral-600">{p.subtitle}</div>
            </article>
          ))}
        </div>
      </div>

      {/* brand strip */}
      <LogoCloud />
    </section>
  );
}

