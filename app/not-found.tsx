import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-6">
      <p className="text-[clamp(4rem,20vw,12rem)] font-black leading-none tracking-tight">
        404<span className="text-accent">.</span>
      </p>
      <p className="mt-4 text-lg text-muted">This page does not exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-7 py-3 text-sm font-bold text-accent-foreground"
      >
        Back home ↗
      </Link>
    </main>
  );
}
