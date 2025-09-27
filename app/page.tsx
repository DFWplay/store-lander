// app/page.tsx
import Link from "next/link";
import { allPresets } from "@/lib/storePresets";

export default function Home() {
  return (
    <main className="container-narrow py-6">
      <h1 className="text-3xl font-semibold">Store-Lander</h1>
      <p className="mt-2 text-neutral-600">
        Choose a campaign below. Visiting a page will automatically split traffic A/B.
      </p>

      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {allPresets.map((p) => (
          <li key={p.slug} className="rounded-2xl border bg-white p-4 shadow-sm">
            <h2 className="text-lg font-medium">{p.brand}</h2>
            <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{p.tagline}</p>
            <Link
              className="mt-3 inline-flex rounded-xl border px-3 py-1 text-sm hover:bg-neutral-50"
              href={`/${p.slug}`}
            >
              Open {p.slug} &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

