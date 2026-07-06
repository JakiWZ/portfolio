import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Privacy — Gioacchino Pio Di Leo",
  description: "Privacy policy: no cookies, no tracking, no data collection.",
};

const sections: Array<{ heading: string; body: React.ReactNode }> = [
  {
    heading: "Data controller",
    body: (
      <>
        {profile.name}, {profile.location}. You can contact me through the
        email address revealed in the Contact section of the homepage.
      </>
    ),
  },
  {
    heading: "What this site collects",
    body: (
      <>
        Nothing. This site sets no cookies, embeds no analytics or tracking
        scripts, loads no third-party resources at runtime and contains no
        contact forms. No personal data about visitors is collected, stored or
        shared by this site.
      </>
    ),
  },
  {
    heading: "Local storage",
    body: (
      <>
        Your dark/light theme preference is saved in your browser&apos;s{" "}
        <code>localStorage</code> under the key <code>theme</code>. This is
        purely technical storage: it never leaves your device and requires no
        consent under the ePrivacy rules. Clearing site data removes it.
      </>
    ),
  },
  {
    heading: "Hosting",
    body: (
      <>
        The site is served by Vercel Inc., which may process technical server
        logs (such as IP addresses) to deliver and secure the service, as
        described in the{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-accent underline-offset-4"
        >
          Vercel Privacy Policy
        </a>
        .
      </>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <>
        Under Regulation (EU) 2016/679 (GDPR), articles 15–22, you have the
        right of access, rectification, erasure, restriction, portability and
        objection regarding personal data concerning you. Since this site
        collects no visitor data, such requests will normally concern data you
        sent me directly (e.g. by email) — write to the address in the Contact
        section and I will respond without undue delay.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-5xl font-black uppercase tracking-tight">
        Privacy<span className="text-accent">.</span>
      </h1>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
        Last updated: July 2026
      </p>
      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-extrabold tracking-tight">
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
