// components/LogoCloud.tsx
"use client";

import { useState } from "react";

type Logo = { src: string; alt: string };

const logos: Logo[] = [
  { src: "/logos/gnc.svg", alt: "GNC" },
  { src: "/logos/gm.svg", alt: "GM" },
  { src: "/logos/redcross.svg", alt: "American Red Cross" },
  { src: "/logos/salvationarmy.svg", alt: "The Salvation Army" },
  { src: "/logos/sixflags.svg", alt: "Six Flags" },
  { src: "/logos/ymca.svg", alt: "YMCA" },
];

function LogoItem({ src, alt }: Logo) {
  const [failed, setFailed] = useState(false);
  return (
    // no border/box; taller container to fit bigger logos
    <li className="flex h-28 items-center justify-center px-2">
      {failed ? (
        <span className="text-base text-neutral-500 md:text-lg">{alt}</span>
      ) : (
        // ~2x bigger than before (was h-10 md:h-12)
        <img
          src={src}
          alt={alt}
          className="h-20 w-auto object-contain md:h-24"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </li>
  );
}

export default function LogoCloud() {
  return (
    <section className="bg-white py-10">
      <div className="container-max">
        <p className="text-center text-sm text-neutral-600">
          Brands trusted using Apparel Junction
        </p>

        {/* a bit more spacing between bigger logos */}
        <ul className="mt-5 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <LogoItem key={l.alt} {...l} />
          ))}
        </ul>
      </div>
    </section>
  );
}

