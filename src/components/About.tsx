import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function About() {
  const { about } = site;

  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="max-w-3xl space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {about.body.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 0.1}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
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
