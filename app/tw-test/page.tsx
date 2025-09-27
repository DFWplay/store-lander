export default function Page() {
  return (
    <main className="min-h-[60vh] grid place-items-center p-8">
      <div className="rounded-xl p-6 shadow-lg border">
        <h1 className="text-3xl font-bold text-blue-600">
          Tailwind is live
        </h1>
        <p className="mt-2 text-sm opacity-80">
          If this is big and blue (and this card has padding/rounded/shadow), Tailwind works.
        </p>
        <div className="mt-4 h-4 w-24 bg-emerald-500 rounded"></div>
      </div>
    </main>
  );
}
