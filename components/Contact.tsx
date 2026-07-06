import { profile } from "@/content/profile";
import { EmailReveal } from "@/components/EmailReveal";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="05" label="Contact" />
      <Reveal>
        <h2 className="max-w-3xl text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]">
          Let&apos;s build something
          <span className="text-accent">.</span>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          {profile.availability}. The fastest way to reach me is email — or find
          me on LinkedIn and GitHub.
        </p>
        <div className="mt-10">
          <EmailReveal />
        </div>
        <div className="mt-12 flex flex-wrap gap-6 text-sm font-semibold">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-foreground pb-0.5 transition-colors hover:border-accent hover:text-accent"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-foreground pb-0.5 transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn ↗
          </a>
          <a
            href="/cv.pdf"
            download
            className="border-b border-foreground pb-0.5 transition-colors hover:border-accent hover:text-accent"
          >
            Download CV ⇩
          </a>
        </div>
      </Reveal>
    </section>
  );
}
