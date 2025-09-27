// ============================================================================
// FILE: components/ui/Button.tsx
// Minimal button (Tailwind only; swap to shadcn/ui if desired)
// ============================================================================
"use client";


import clsx from "clsx";


export function Button({
className,
variant = "primary",
...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "ghost" }) {
return (
<button
className={clsx(
"inline-flex items-center justify-center whitespace-nowrap border text-sm font-medium shadow-sm transition active:translate-y-px",
"rounded-xl px-4 py-2",
variant === "primary" && "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800",
variant === "outline" && "bg-white text-neutral-900 border-neutral-300 hover:bg-neutral-50",
variant === "ghost" && "bg-transparent text-neutral-900 border-transparent hover:bg-neutral-100",
className
)}
{...props}
/>
);
}
