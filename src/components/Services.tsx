import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Services() {
  const { services } = site;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(services.cta.subject)}`;

  return (
    <Section
      id="services"
      eyebrow={services.eyebrow}
      title={services.title}
      intro={services.intro}
      titleAs="h1"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {services.offers.map((offer, index) => (
          <Reveal
            key={offer.name}
            delay={index * 0.08}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <article className="glass flex h-full flex-col rounded-3xl p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {offer.name}
              </h2>
              <p className="mt-4 flex-1 text-base leading-7 text-muted">
                {offer.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {offer.examples.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-card px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="glass mt-6 rounded-3xl p-6 sm:p-8">
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.process.map((item, index) => (
              <li key={item.step}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
                  {String(index + 1).padStart(2, "0")} · {item.step}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
          <a
            href={mailto}
            className="mt-8 inline-flex h-12 items-center rounded-full bg-cta px-6 text-sm font-medium text-cta-ink shadow-[0_10px_30px_rgba(59,158,255,0.28)] transition hover:bg-cta-hover"
          >
            {services.cta.label}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
