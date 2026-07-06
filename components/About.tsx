import { about } from "@/content/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="02" label="About" />
      <Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
