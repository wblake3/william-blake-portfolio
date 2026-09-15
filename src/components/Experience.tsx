import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Production systems in high-stakes domains."
      intro="Healthcare and energy — software that specialists and businesses depend on every day."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
        {site.experience.map((role, index) => (
          <li key={role.org} className="relative">
            <span className="absolute -left-[31px] top-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent shadow-[0_0_0_4px_rgba(59,158,255,0.16)] sm:-left-[39px]" />
            <Reveal delay={index * 0.12} direction={index % 2 === 0 ? "left" : "right"}>
              <article className="glass rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {role.role}
                  </h3>
                  <p className="font-mono text-xs text-accent-deep">{role.dates}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-muted">{role.org}</p>
                <p className="mt-4 text-base leading-7 text-muted">
                  {role.summary}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                  {role.points.map((point) => (
                    <li key={point} className="relative pl-4">
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent-soft" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
