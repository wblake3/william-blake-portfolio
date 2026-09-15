import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Production systems in high-stakes domains."
      intro="Degree, healthcare contract, and energy internship — Jul 2023 to Jun 2026."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
        {site.experience.map((item, index) => (
          <li key={`${item.org}-${item.dates}`} className="relative">
            <span className="absolute -left-[31px] top-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent shadow-[0_0_0_4px_rgba(59,158,255,0.16)] sm:-left-[39px]" />
            <Reveal
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <article className="glass overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/9] sm:aspect-[2/1]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                    style={{ objectPosition: item.imagePosition }}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
                      {item.kind === "education" ? "Education" : "Work"}
                    </p>
                    <p className="ml-auto font-mono text-xs text-accent-deep">
                      {item.dates}
                    </p>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">{item.org}</p>
                  <p className="mt-4 text-base leading-7 text-muted">
                    {item.summary}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                    {item.points.map((point) => (
                      <li key={point} className="relative pl-4">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent-soft" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
