// components/Testimonials.tsx
import { type Preset } from "@/lib/storePresets";

export function Testimonials({ preset }: { preset: Preset }) {
  const ts = preset.testimonials ?? [
    { quote: "Setup was fast and painless.", author: "Ops Leader", title: "National Franchise" },
    { quote: "Helped us stay compliant while looking consistent.", author: "HR Director", title: "Contractor Network" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">What teams say</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {ts.map((t, i) => (
            <blockquote key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-neutral-800">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-neutral-600">
                — {t.author}, {t.title}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

