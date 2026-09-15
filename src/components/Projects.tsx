import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Work that had to be correct."
      intro="Clinical production, AI-backed product work, and full-stack builds from the degree."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {site.projects.map((project, index) => (
          <Reveal
            key={project.name}
            delay={index * 0.08}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <article className="group glass flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(59,158,255,0.14)] hover:ring-1 hover:ring-accent/30 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
                  {project.year}
                </p>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent-deep">
                  {project.status}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="mt-4 flex-1 text-base leading-7 text-muted">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-card px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit text-sm font-medium text-accent-deep transition hover:text-accent"
                >
                  View on GitHub
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
