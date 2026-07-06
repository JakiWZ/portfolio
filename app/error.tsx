"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-6">
      <p className="text-6xl font-black tracking-tight">
        Something broke<span className="text-accent">.</span>
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-accent px-7 py-3 text-sm font-bold text-accent-foreground"
      >
        Try again
      </button>
    </main>
  );
}
