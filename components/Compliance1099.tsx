// components/Compliance1099.tsx
export function Compliance1099() {
  return (
    <section className="bg-white py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">Why It Matters for 1099 Compliance</h2>
        <p className="mt-2 text-neutral-600">
          Providing uniforms directly to contractors can signal an employee relationship. Our independent company
          store structure lets workers purchase what they need while you maintain brand consistency.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-5 shadow-sm">
            <div className="text-base font-medium">1) Behavioral Control</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
              <li><strong>Employees:</strong> Company controls how, when, and where work is performed.</li>
              <li><strong>Contractors:</strong> Control their own methods and tools.</li>
              <li><strong>Solution:</strong> Contractors independently purchase through your branded store.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 shadow-sm">
            <div className="text-base font-medium">2) Financial Control</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
              <li><strong>Employees:</strong> Company provides tools and absorbs costs.</li>
              <li><strong>Contractors:</strong> Invest in their own equipment and can profit or lose.</li>
              <li><strong>Solution:</strong> Store purchases are worker-funded, keeping independence intact.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 shadow-sm">
            <div className="text-base font-medium">3) Type of Relationship</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
              <li><strong>Employees:</strong> Permanent roles; services central to business.</li>
              <li><strong>Contractors:</strong> Project-based and self-managed.</li>
              <li><strong>Solution:</strong> Contractors buy directly from the store while meeting brand standards.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

