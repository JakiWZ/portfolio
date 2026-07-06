import { profile } from "@/content/profile";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {profile.name} — Portfolio
        </p>
        <h1 className="mt-8 text-[clamp(3.2rem,11vw,8.5rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
          Full Stack
          <br />
          Developer
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {profile.oneLiner}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#work"
            className="rounded-full bg-accent px-7 py-3 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View my work ↗
          </a>
          <a
            href="/cv.pdf"
            download
            className="border-b-2 border-foreground pb-0.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border-b-2 border-transparent pb-0.5 text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>
        <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
          {profile.location} · {profile.availability}
        </p>
      </Reveal>
    </section>
  );
}
