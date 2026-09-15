"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { HeroNetwork } from "@/components/HeroNetwork";
import { RevealWords } from "@/components/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

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
            <RevealWords
              as="p"
              text={hero.eyebrow}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent-deep"
            />
            <RevealWords
              as="h1"
              text={hero.headline}
              delay={0.08}
              className="mt-5 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            />
            <motion.p
              className="mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
            >
              {hero.lede}
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease }}
            >
              <a
                href={hero.primaryCta.href}
                className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-white shadow-[0_10px_30px_rgba(59,158,255,0.28)] transition hover:bg-accent-deep"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-12 items-center rounded-full border border-line bg-card px-6 text-sm font-medium text-foreground backdrop-blur transition hover:border-accent/50"
              >
                {hero.secondaryCta.label}
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              <Image
                src={hero.photo}
                alt={hero.photoAlt}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover object-[center_22%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
