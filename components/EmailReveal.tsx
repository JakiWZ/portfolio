"use client";

import { useState } from "react";
import { decodeEmail } from "@/lib/email";
import { profile } from "@/content/profile";

export function EmailReveal() {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <div>
      {email ? (
        <a
          href={`mailto:${email}`}
          className="text-2xl font-extrabold tracking-tight underline decoration-accent decoration-4 underline-offset-8 sm:text-4xl"
        >
          {email}
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setEmail(decodeEmail(profile.emailEncoded))}
          className="rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Reveal email
        </button>
      )}
      <noscript>
        <p className="mt-3 text-sm text-muted">
          Email hidden to block scrapers — reach me on LinkedIn or download the CV.
        </p>
      </noscript>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
        Shown on click to keep scrapers out
      </p>
    </div>
  );
}
