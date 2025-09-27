// ============================================================================
// FILE: lib/storePresets.ts
// Central config for each landing page (slug → content)
// Supports category and optional subcategory via slugs like
//   "independent-contractors" or "independent-contractors/roofing".
// These will be A/B split to /.../a or /.../b by middleware.ts
// ============================================================================
export type ClientLogo = {
  src?: string;
  alt: string;
  scale?: number;
  fit?: "contain" | "cover";
  crop?: { top?: number; right?: number; bottom?: number; left?: number }; // percentages
};

export type Preset = {
  slug: string; // e.g., "independent-contractors" or "independent-contractors/roofing"
  brand: string;
  audience: string;
  badge: string;
  headline: string;
  tagline: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  primaryCta: { label: string; href?: string };
  secondaryCta: { label: string; href?: string };
  ctaHelpText: string;
  sampleProducts: { sku: string; name: string; subtitle: string; image: string }[];
  testimonials?: { quote: string; author: string; title: string }[];
  heroForm?: boolean; // show DemoForm in hero
  clientLogos?: { src?: string; alt: string }[]; // logos for "Brands trusted..."
  heroImage?: string; // optional hero photo path, e.g., "/img/ic-hero.jpg"
};

const commonProducts = [
  { sku: "TEE", name: "Soft Cotton Tee", subtitle: "XS–4XL · 8 colors", image: "/img/tee.png" },
  { sku: "POLO", name: "Performance Polo", subtitle: "Moisture‑wicking", image: "/img/polo.png" },
  { sku: "CAP", name: "Low‑profile Cap", subtitle: "Adjustable", image: "/img/cap.png" },
  { sku: "JKT", name: "Lightweight Jacket", subtitle: "Wind‑resistant", image: "/img/Jacket.png" },
];

export const PRESETS: Preset[] = [
  // =========================
  // Independent Contractors
  // =========================
  {
    slug: "independent-contractors",
    heroImage: "/img/roofingteam.png",
    brand: "Apparel for Independent Contractors",
    audience: "your 1099 workforce",
    badge: "Fast turn • Brand‑correct",
    headline: "Custom Merchandise for your Independent Contractors.",
    tagline: "Uniforms, marketing materials, and advertising products.",
    benefits: ["Consistent Branding", "24/7 Availability", "Empower IC","Professional Image", "1099 Compliance", "Zero Inventory Costs"],
    features: [
      { title: "Kits by role", desc: "Preset bundles for sales, estimators, installers, and more." },
      { title: "Budget controls", desc: "Issue e‑gift codes by contractor or project." },
      { title: "Always in stock", desc: "Core sizes and colors stocked locally." },
      { title: "Logistics", desc: "We do all the heaving lifting." },
    ],
    primaryCta: { label: "Book a 30‑min demo", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll map SKUs to your roles and sizes in minutes.",
    sampleProducts: commonProducts,
    clientLogos: [
       { src: "/logos/gnc.svg",           alt: "GNC" },	    
       { src: "/logos/gm.svg",            alt: "General Motors" },
       { src: "/logos/redcross.svg",      alt: "American Red Cross", crop: { left: 10, right: 10 }, scale: 1 },
       { src: "/logos/salvationarmy.svg", alt: "Salvation Army" },
       { src: "/logos/sixflags.svg",      alt: "Six Flags" },
       { src: "/logos/ymca.svg",          alt: "YMCA" },
    ],
  },
  { // Roofing
    slug: "independent-contractors/roofing",
    brand: "Contractor Gear — Roofing",
    audience: "roofing crews & sales reps",
    badge: "Hi‑vis • Weather‑ready",
    headline: "Durable, weather‑ready uniforms for roofing teams",
    tagline: "Hi‑vis, sun‑safe, and rain layers with your brand applied exactly right.",
    benefits: ["Hi‑vis options", "Kitting available", "Quick reorders"],
    features: [
      { title: "Crew bundles", desc: "New‑hire kits for field, sales, and supervisors." },
      { title: "Weather layers", desc: "Sun, wind, and rain‑ready picks for every season." },
      { title: "Brand pack", desc: "Auto‑logo placement across 30+ SKUs." },
    ],
    primaryCta: { label: "See sample kit", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Email a specialist", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll tailor by crew size and roles.",
    sampleProducts: commonProducts,
  },
  { // Insurance
    slug: "independent-contractors/insurance",
    brand: "Contractor Gear — Insurance",
    audience: "adjusters & field inspectors",
    badge: "On‑the‑go kits",
    headline: "Professional apparel for adjusters and field teams",
    tagline: "Polished, weather‑flexible, and compliant branding for client‑facing work.",
    benefits: ["Travel‑light bundles", "All‑season picks", "PO or card checkout"],
    features: [
      { title: "Client‑ready", desc: "Polos, jackets, and caps that present your brand well." },
      { title: "Layering system", desc: "From hot to cold, one kit covers all assignments." },
      { title: "Easy reorders", desc: "Consistent SKUs make replenishment simple." },
    ],
    primaryCta: { label: "Get a quick quote", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "Brand‑correct and field‑tested.",
    sampleProducts: commonProducts,
  },
  { // Home Improvement
    slug: "independent-contractors/home-improvement",
    brand: "Contractor Gear — Home Improvement",
    audience: "installers & estimators",
    badge: "Rugged • In‑stock",
    headline: "Built‑to‑work apparel for home improvement crews",
    tagline: "Durable, comfortable, and always in stock for common sizes.",
    benefits: ["DTF & embroidery", "Bulk or single", "Live inventory"],
    features: [
      { title: "Role kits", desc: "Estimator polos vs. installer tees/jackets — all covered." },
      { title: "Safety first", desc: "Hi‑vis and PPE‑compatible options." },
      { title: "Rapid restock", desc: "Keep projects moving with quick replacements." },
    ],
    primaryCta: { label: "Start a kit plan", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll map sizes to your crew list.",
    sampleProducts: commonProducts,
  },
  { // Telecommunications
    slug: "independent-contractors/telecommunications",
    brand: "Contractor Gear — Telecom",
    audience: "techs & installers",
    badge: "Comms‑ready",
    headline: "Uniforms that move with your telecom teams",
    tagline: "Stretch, breathability, and visibility for in‑home and field installs.",
    benefits: ["Stretch fabrics", "Hi‑vis options", "Bundles by role"],
    features: [
      { title: "Comfort & range", desc: "Performance blends for climbing and crawl spaces." },
      { title: "Pro look", desc: "Brand‑correct logos and neat appearance for in‑home visits." },
      { title: "Fast replacements", desc: "Keep SLAs on track with quick ship." },
    ],
    primaryCta: { label: "Book a 15‑min demo", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll suggest a kit per role.",
    sampleProducts: commonProducts,
  },

  // =========================
  // Small Business Owners
  // =========================
  {
    slug: "small-business-owners",
    brand: "Apparel for Small Business Owners",
    audience: "owner‑operators & teams",
    badge: "One‑stop brand shop",
    headline: "Uniforms and marketing gear for growing small businesses",
    tagline: "Apparel, cards, decals, banners — all brand‑correct and in one place.",
    benefits: ["Apparel + print", "Low minimums", "Reorder in seconds"],
    features: [
      { title: "Brand pack", desc: "Your logo and colors applied consistently across items." },
      { title: "Starter bundles", desc: "Uniforms + business cards + signage combinations." },
      { title: "Scales with you", desc: "From 2 to 200 employees with tiered pricing." },
    ],
    primaryCta: { label: "Build my bundle", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll tailor to your trade and season.",
    sampleProducts: commonProducts,
  },
  {
    slug: "small-business-owners/service-professionals",
    brand: "Small Biz — Service Pros",
    audience: "plumbers, HVAC, electricians, cleaners, more",
    badge: "Field‑ready",
    headline: "Professional uniforms your customers trust",
    tagline: "Clean, durable, and comfortable — with fast name/role personalization.",
    benefits: ["Name personalization", "Durable fabrics", "Fast turn"],
    features: [
      { title: "On‑site credible", desc: "Polished look that builds customer confidence." },
      { title: "Role options", desc: "Dispatcher polos, tech tees, outerwear for weather." },
      { title: "Truck graphics", desc: "Add decals and yard signs to complete the look." },
    ],
    primaryCta: { label: "Get a quick quote", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "Bundle apparel + print.",
    sampleProducts: commonProducts,
  },
  {
    slug: "small-business-owners/restaurant-hospitality",
    brand: "Small Biz — Restaurant & Hospitality",
    audience: "front‑of‑house & back‑of‑house",
    badge: "Wash‑ready • Bulk‑friendly",
    headline: "Front‑ and back‑of‑house uniforms that work as hard as you do",
    tagline: "Aprons, polos, caps, and signage with cohesive branding.",
    benefits: ["Spill‑friendly fabrics", "Bulk pricing", "Quick reorders"],
    features: [
      { title: "Role kits", desc: "Servers, hosts, kitchen — tailored picks for each." },
      { title: "Merch add‑ons", desc: "Hats and tees you can also sell." },
      { title: "Grand‑opening kit", desc: "Banners, menus, and staff apparel in one order." },
    ],
    primaryCta: { label: "Plan my FOH/BOH kits", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll fit by role and shift.",
    sampleProducts: commonProducts,
  },

  // =========================
  // Department Managers
  // =========================
  {
    slug: "department-managers",
    brand: "Department Managers",
    audience: "team leads & HR",
    badge: "Budget control",
    headline: "Uniform programs your department can actually manage",
    tagline: "E‑gift budgets, approval flows, and reporting across locations.",
    benefits: ["Manager budgets", "Approval flows", "Location routing"],
    features: [
      { title: "Allocate by team", desc: "Per‑employee codes with expiry and spend caps." },
      { title: "Approvals", desc: "Optional approvals for certain roles or items." },
      { title: "Reports", desc: "See spend by team, role, and time period." },
    ],
    primaryCta: { label: "See manager tools", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll mirror your org structure.",
    sampleProducts: commonProducts,
  },

  // =========================
  // Small Local Sports Teams
  // =========================
  {
    slug: "small-local-sports-teams",
    brand: "Small Local Sports Teams",
    audience: "youth & adult leagues",
    badge: "League‑ready",
    headline: "Uniforms, fan gear, and awards — all in one place",
    tagline: "Simple sizing, fast production, and optional team stores for fundraising.",
    benefits: ["Team stores", "Awards & plaques", "Season‑fast turn"],
    features: [
      { title: "Uniform bundles", desc: "Home/away sets with numbers and names." },
      { title: "Fan gear", desc: "Hats, hoodies, and tees for parents and supporters." },
      { title: "Fundraising", desc: "Percentage back through your team store." },
    ],
    primaryCta: { label: "Open a team store", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll set it up in minutes.",
    sampleProducts: commonProducts,
  },

  // =========================
  // Events
  // =========================
  {
    slug: "events",
    brand: "Events",
    audience: "organizers & vendors",
    badge: "Kitted fast",
    headline: "Event apparel and signage that looks sharp (and ships fast)",
    tagline: "Staff shirts, badges, banners, and more — timed to your event date.",
    benefits: ["Rush options", "Staff + vendor kits", "On‑site pickup"],
    features: [
      { title: "Staff kits", desc: "Shirts, badges, and lanyards by role and day." },
      { title: "Signage", desc: "Banners, wayfinding, and booth graphics." },
      { title: "Budget control", desc: "E‑gift codes for vendors or volunteers." },
    ],
    primaryCta: { label: "Plan my event kit", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll align to your run‑of‑show.",
    sampleProducts: commonProducts,
  },
  {
    slug: "events/wedding-and-event-planners",
    brand: "Events — Wedding & Event Planners",
    audience: "planners & crews",
    badge: "Polished & subtle",
    headline: "Discreet, polished apparel for your event staff",
    tagline: "Neutral colors, clean branding, and comfortable fits for long days.",
    benefits: ["Subtle branding", "Comfortable fits", "Rush options"],
    features: [
      { title: "FOH/BOH kits", desc: "Different looks for on‑stage vs backstage roles." },
      { title: "Weather layers", desc: "Outdoor‑ready layers that still look refined." },
      { title: "Emergency restock", desc: "Fast turn for last‑minute adds." },
    ],
    primaryCta: { label: "Get a quick quote", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll match your brand palette.",
    sampleProducts: commonProducts,
  },
  {
    slug: "events/festival-organizers",
    brand: "Events — Festival Organizers",
    audience: "festival staff & vendors",
    badge: "Bold & visible",
    headline: "High‑visibility festival kits that keep teams organized",
    tagline: "Color‑coded roles, hi‑vis options, and signage that stands out.",
    benefits: ["Color‑coded roles", "Hi‑vis options", "Volunteer budgets"],
    features: [
      { title: "Role colors", desc: "Assign colors to security, ops, volunteers, and more." },
      { title: "Wayfinding", desc: "Signs and banners that guide crowds effectively." },
      { title: "Vendor credits", desc: "E‑gift codes for vendors or partners." },
    ],
    primaryCta: { label: "Plan my festival kit", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll size to your footprint.",
    sampleProducts: commonProducts,
  },

  // =========================
  // Organizational
  // =========================
  {
    slug: "organizational",
    brand: "Organizational",
    audience: "orgs & institutions",
    badge: "Program‑ready",
    headline: "Uniform programs for organizations that need control",
    tagline: "Approvals, budgets, and reporting baked in — across chapters or locations.",
    benefits: ["Approvals", "Budgets", "Reporting"],
    features: [
      { title: "Brand governance", desc: "Lock down logo placement and colors across items." },
      { title: "Chapter budgets", desc: "Allocate codes by chapter or team." },
      { title: "Reports", desc: "See spend by group, role, and time period." },
    ],
    primaryCta: { label: "See program tools", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll mirror your org chart.",
    sampleProducts: commonProducts,
  },
  {
    slug: "organizational/non-profit-charity",
    brand: "Organizational — Non‑Profit & Charity",
    audience: "staff & volunteers",
    badge: "Fundraise‑friendly",
    headline: "Volunteer‑ready apparel that stretches donor dollars",
    tagline: "Affordable, durable options with optional fundraising stores.",
    benefits: ["Budget friendly", "Volunteer kits", "Team stores"],
    features: [
      { title: "Volunteer packs", desc: "Shirts, caps, and lanyards for events and drives." },
      { title: "Fundraising store", desc: "Offer merch and return a percentage to your org." },
      { title: "Easy reorders", desc: "Keep sizes stocked for recurring events." },
    ],
    primaryCta: { label: "Open a fundraiser store", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll set it up fast.",
    sampleProducts: commonProducts,
  },
  {
    slug: "organizational/community-social-clubs",
    brand: "Organizational — Community & Social Clubs",
    audience: "clubs & associations",
    badge: "Community‑ready",
    headline: "Club apparel and awards that members love",
    tagline: "Hats, tees, hoodies, and plaques — all brand‑consistent.",
    benefits: ["Member stores", "Awards & plaques", "Low minimums"],
    features: [
      { title: "Club stores", desc: "Members order direct — you set the product list." },
      { title: "Awards", desc: "Recognize achievements with plaques and trophies." },
      { title: "Seasonal drops", desc: "Rotate items to keep things fresh." },
    ],
    primaryCta: { label: "Open a member store", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll curate the right mix.",
    sampleProducts: commonProducts,
  },
  {
    slug: "organizational/religious-organizations",
    brand: "Organizational — Religious Organizations",
    audience: "churches, synagogues, and ministries",
    badge: "Respectful & cohesive",
    headline: "Modest, brand‑consistent apparel for your congregation",
    tagline: "Volunteer tees, staff polos, and event signage done right.",
    benefits: ["Volunteer packs", "Event signage", "Fundraising stores"],
    features: [
      { title: "Service roles", desc: "Greeters, kids ministry, production — color‑coded if desired." },
      { title: "Event kits", desc: "Retreats and VBS with apparel + signage." },
      { title: "Optional merch", desc: "Offer tasteful merch in your style." },
    ],
    primaryCta: { label: "Plan my ministry kits", href: "https://calendar.appareljunction.com" },
    secondaryCta: { label: "Contact sales", href: "mailto:sales@appareljunction.com" },
    ctaHelpText: "We’ll follow your guidelines.",
    sampleProducts: commonProducts,
  },
];

export function getPresetBySlug(slug: string) {
  return PRESETS.find((p) => p.slug === slug);
}

export const allPresets = PRESETS;
