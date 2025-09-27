// app/tw-ok/page.tsx
export default function TwOk() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="mx-auto max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Tailwind is working 🎉</h1>
        <p className="mt-2 text-neutral-600">You should see rounded corners, a shadow, and neutral fonts.</p>
        <button className="mt-4 rounded-full bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800">Button</button>
      </div>
    </div>
  );
}

