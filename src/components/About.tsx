import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function About() {
  const { about } = site;

  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {about.body.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.1}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12} direction="right">
          <aside className="glass rounded-3xl p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
              Education
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
              {about.education.qualification}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {about.education.school} · {about.education.years}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              {about.education.notes.map((note) => (
                <li key={note} className="relative pl-4">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  {note}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
      <Reveal delay={0.16}>
        <ul className="mt-12 flex flex-wrap gap-2">
          {about.interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-muted"
            >
              {interest}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
