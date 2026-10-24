import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk."
    >
      <Reveal>
        <div className="glass flex flex-col gap-8 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
            Auckland-based Software Engineer at Dimension Software. Open to
            conversations about engineering roles, AI integrations, or anything
            on this page.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center rounded-full bg-cta px-6 text-sm font-medium text-cta-ink shadow-[0_10px_30px_rgba(59,158,255,0.28)] transition hover:bg-cta-hover"
            >
              Email me
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex h-12 items-center rounded-full border border-line bg-card px-6 text-sm font-medium text-foreground transition hover:border-accent/50"
            >
              Download CV
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-line bg-card px-6 text-sm font-medium text-foreground transition hover:border-accent/50"
            >
              LinkedIn
            </a>
            <a
              href={site.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-line bg-card px-6 text-sm font-medium text-foreground transition hover:border-accent/50"
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
