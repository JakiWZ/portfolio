import type { Project } from "@/content/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border-t border-line pt-5">
      <div className="flex items-baseline justify-between gap-4">
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
