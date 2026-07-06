import Image from "next/image";
import type { Project } from "@/content/profile";

function Cover({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return (
      <div className="overflow-hidden rounded-lg border border-line">
        <Image
          src={project.image}
          alt={`${project.title} — screenshot`}
          width={1280}
          height={800}
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }
  return (
    <div className="flex aspect-[16/10] flex-col justify-between rounded-lg border border-line bg-line/20 p-6 transition-colors group-hover:border-accent/50">
      <span className="text-5xl font-black text-subtle">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-2xl font-black uppercase tracking-tight">
        {project.title}
        <span className="text-accent">.</span>
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group">
      <Cover project={project} index={index} />
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-extrabold tracking-tight">
          {project.title}
          <span className="ml-3 font-mono text-[11px] font-normal uppercase tracking-[0.15em] text-subtle">
            {project.subtitle}
          </span>
        </h3>
        <span className="font-mono text-[11px] text-subtle">{project.period}</span>
      </div>
      <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-5 text-sm font-semibold">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-foreground pb-0.5 transition-colors hover:border-accent hover:text-accent"
          >
            Repository ↗
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="border-b border-foreground pb-0.5 transition-colors hover:border-accent hover:text-accent"
          >
            Live ↗
          </a>
        )}
      </div>
    </article>
  );
}
