import { skills } from "@/content/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="03" label="Skills" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, i) => (
          <Reveal key={category.label} delay={(i % 3) * 0.08}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
              {category.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
