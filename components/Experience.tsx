import { certifications, education, experience } from "@/content/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { TimelineEntry } from "@/content/profile";

function Entry({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="grid gap-2 border-b border-line pb-8 sm:grid-cols-[180px_1fr] sm:gap-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
        {entry.period}
      </p>
      <div>
        <h3 className="text-lg font-extrabold tracking-tight">
          {entry.role}
          <span className="ml-2 font-medium text-muted">— {entry.org}</span>
        </h3>
        <ul className="mt-3 space-y-1.5 text-muted">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="text-accent">—</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="04" label="Experience & Education" />
      <div className="space-y-8">
        {experience.map((entry) => (
          <Reveal key={entry.role + entry.period}>
            <Entry entry={entry} />
          </Reveal>
        ))}
        {education.map((entry) => (
          <Reveal key={entry.role}>
            <Entry entry={entry} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <h3 className="mt-14 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
          Certifications
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-muted"
            >
              {cert.name} · {cert.issuer} {cert.year}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
