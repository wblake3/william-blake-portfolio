import { site } from "@/content/site";
import { HeroNetwork } from "@/components/HeroNetwork";

export function Hero() {
  const { hero } = site;

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(900px_circle_at_78%_18%,rgba(126,200,255,0.2),transparent_55%),radial-gradient(700px_circle_at_12%_82%,rgba(59,158,255,0.08),transparent_50%)]"
      />
      <HeroNetwork />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-28 sm:px-8">
        <div className="relative max-w-3xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 bg-background/70 blur-2xl sm:-inset-10"
          />
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent-deep">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            {hero.lede}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-white shadow-[0_10px_30px_rgba(59,158,255,0.28)] transition hover:bg-accent-deep"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center rounded-full border border-line bg-white/70 px-6 text-sm font-medium text-foreground backdrop-blur transition hover:border-accent/50 hover:bg-white"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
