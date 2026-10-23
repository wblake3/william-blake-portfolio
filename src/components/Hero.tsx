import Image from "next/image";
import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { HeroNetwork } from "@/components/HeroNetwork";

// Hero entrance runs as CSS keyframes so it starts at first paint rather than
// after hydration. The photo only rises (no fade) so it never delays LCP.
const enter = (delay: number): CSSProperties => ({
  animationDelay: `${delay}s`,
});

function Words({ text, delay }: { text: string; delay: number }) {
  const words = text.split(" ");
  return words.map((word, index) => (
    <span
      key={`${word}-${index}`}
      className="hero-in inline-block"
      style={enter(delay + index * 0.05)}
    >
      {word}
      {index < words.length - 1 ? " " : null}
    </span>
  ));
}

export function Hero() {
  const { hero } = site;

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div aria-hidden="true" className="hero-wash absolute inset-0" />
      <HeroNetwork />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 py-28 sm:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="relative max-w-2xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 bg-background/70 blur-2xl sm:-inset-10"
            />
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent-deep">
              <Words text={hero.eyebrow} delay={0} />
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <Words text={hero.headline} delay={0.08} />
            </h1>
            <p
              className="hero-in mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl"
              style={enter(0.28)}
            >
              {hero.lede}
            </p>
            <div
              className="hero-in mt-10 flex flex-wrap items-center gap-4"
              style={enter(0.42)}
            >
              <a
                href={hero.primaryCta.href}
                className="inline-flex h-12 items-center rounded-full bg-cta px-6 text-sm font-medium text-cta-ink shadow-[0_10px_30px_rgba(59,158,255,0.28)] transition hover:bg-cta-hover"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-12 items-center rounded-full border border-line bg-card px-6 text-sm font-medium text-foreground backdrop-blur transition hover:border-accent/50"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
          <div
            className="hero-rise relative mx-auto w-full max-w-md lg:max-w-none"
            style={enter(0.1)}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              <Image
                src={hero.photo}
                alt={hero.photoAlt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover object-[center_22%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
