"use client";

import React, { useState } from "react";
import SmartButton from "@/components/ui/SmartButton";
import { PHEvent } from "@/lib/ph";

type Props = {
  slug: string;
  variant?: "a" | "b";
};

export default function DemoForm({ slug, variant = "a" }: Props) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    contractors: "1–10",
    role: "",
    notes: "",
  });
  const [pending, setPending] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();                // <- prevents fallback GET
    setPending(true);
    setOk(null);
    setError(null);

    const payload = {
      ...form,
      meta: {
        slug,
        variant,
        href: typeof window !== "undefined" ? window.location.href : "",
        ref: typeof document !== "undefined" ? document.referrer : "",
      },
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const t = await res.text().catch(() => "");
        throw new Error(`Lead API ${res.status}: ${t}`);
      }

      setOk(true);
      PHEvent("lead_submitted", { slug, variant });
    } catch (err: any) {
      setOk(false);
      setError(err?.message || "Unable to submit right now.");
      PHEvent("lead_submit_error", { slug, variant, error: String(err) });
    } finally {
      setPending(false);
    }
  }

  if (ok) {
    return (
      <div className="rounded-2xl border bg-black/60 text-white backdrop-blur p-6">
        <p className="text-lg font-semibold">Thanks! We’ll reach out shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border bg-black/60 text-white backdrop-blur p-4 sm:p-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={onChange}
          className="h-11 rounded-lg bg-white/90 px-3 text-black"
          required
        />
        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={onChange}
          className="h-11 rounded-lg bg-white/90 px-3 text-black"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Work email"
          value={form.email}
          onChange={onChange}
          className="h-11 rounded-lg bg-white/90 px-3 text-black"
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={onChange}
          className="h-11 rounded-lg bg-white/90 px-3 text-black"
        />
        <select
          name="contractors"
          value={form.contractors}
          onChange={onChange}
          className="h-11 rounded-lg bg-white/90 px-3 text-black"
        >
          {["1–10", "11–50", "51–200", "200+"].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <input
          name="role"
          placeholder="Your role"
          value={form.role}
          onChange={onChange}
          className="h-11 rounded-lg bg-white/90 px-3 text-black"
        />
      </div>

      <textarea
        name="notes"
        placeholder="Notes or goals"
        value={form.notes}
        onChange={onChange}
        className="mt-3 h-28 w-full rounded-lg bg-white/90 px-3 py-2 text-black"
      />

      <div className="mt-4 flex gap-3">
        <SmartButton type="submit" pending={pending}>
          Request Info
        </SmartButton>
      </div>

      {error && <p className="mt-2 text-red-300 text-sm">{error}</p>}

      <p className="mt-3 text-xs text-white/70">
        We respect your privacy. By submitting, you agree to be contacted about Apparel Junction.
      </p>
    </form>
  );
}

