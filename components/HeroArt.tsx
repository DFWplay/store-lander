// Decorative SVG that looks like apparel/product tiles
export function HeroArt() {
  return (
    <svg viewBox="0 0 600 480" className="block aspect-[5/4] w-full rounded-xl bg-neutral-100">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#67e8f9" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="100%" stopColor="#fcd34d" />
        </linearGradient>
      </defs>
      {/* cards */}
      <rect x="28" y="28" rx="14" width="240" height="170" fill="url(#g1)" opacity="0.25" />
      <rect x="332" y="48" rx="14" width="240" height="140" fill="white" stroke="#e5e7eb" />
      <rect x="72" y="228" rx="14" width="240" height="170" fill="white" stroke="#e5e7eb" />
      <rect x="322" y="238" rx="14" width="250" height="190" fill="url(#g2)" opacity="0.25" />
      {/* shirt shape */}
      <path
        d="M135 270l30-18 30 18v60c0 10-8 18-18 18h-24c-10 0-18-8-18-18z"
        fill="#ffffff"
        stroke="#e5e7eb"
      />
      {/* cap */}
      <path d="M392 88c35 0 48 20 50 38H342c6-18 20-38 50-38z" fill="#ffffff" stroke="#e5e7eb" />
      {/* jacket line */}
      <rect x="372" y="288" width="160" height="96" rx="10" fill="#fff" stroke="#e5e7eb" />
    </svg>
  );
}

