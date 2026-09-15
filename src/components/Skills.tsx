import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A stack I can ship with."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {site.skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.08}>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-sm text-foreground transition hover:border-accent/40 hover:text-accent-deep"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
