import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Looking for an office-first team doing hard product work."
    >
      <Reveal>
        <div className="glass flex flex-col gap-8 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
            Auckland-based. Happy to talk about TypeScript, React, APIs, and
            shipping systems people can trust.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-white shadow-[0_10px_30px_rgba(59,158,255,0.28)] transition hover:bg-accent-deep"
            >
              Email me
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-line bg-white/80 px-6 text-sm font-medium text-foreground transition hover:border-accent/50"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
