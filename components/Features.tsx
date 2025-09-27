// components/Features.tsx
import { type Preset } from "@/lib/storePresets";

export function Features({ preset, title = "Platform Highlights" }: { preset: Preset; title?: string }) {
  return (
    <section className="relative bg-white py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-neutral-50 to-transparent" />
      <div className="container-max">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preset.features.map((f, i) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition hover:shadow-md"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-neutral-100 opacity-70 blur-2xl" />

              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900">
                {iconForTitle(f.title, i)}
              </div>

              <h3 className="mt-3 text-base font-semibold leading-6">{f.title}</h3>
              <p className="mt-1 text-sm leading-6 text-neutral-700">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function iconForTitle(title: string, _i: number) {
  const t = title.toLowerCase();
  const cls = "h-5 w-5 stroke-[1.8]";
  if (t.includes("kit")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor">
        <path d="M3 7l9 5 9-5" />
        <path d="M3 7l9-4 9 4v10l-9 4-9-4z" />
      </svg>
    );
  }
  if (t.includes("budget") || t.includes("control")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <path d="M12 14h6" />
        <path d="M8 12v4" />
        <path d="M6 14h4" />
      </svg>
    );
  }
  if (t.includes("stock") || t.includes("inventory")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor">
        <rect x="4" y="4" width="8" height="8" rx="2" />
        <rect x="12" y="12" width="8" height="8" rx="2" />
        <rect x="4" y="12" width="8" height="8" rx="2" />
      </svg>
    );
  }
  if (t.includes("logistics") || t.includes("shipping") || t.includes("fulfill")) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor">
        <path d="M3 12h12" />
        <path d="M15 12l-3-3" />
        <path d="M15 12l-3 3" />
        <path d="M18 8h3v8h-3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

