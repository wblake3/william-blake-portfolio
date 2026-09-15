"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const ease = [0.22, 1, 0.36, 1] as const;

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Python, APIs, AI integrations and React.">
      <div className="grid gap-6 md:grid-cols-2">
        {site.skillGroups.map((group, index) => (
          <Reveal
            key={group.label}
            delay={index * 0.1}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    className="rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-foreground transition hover:border-accent/40 hover:text-accent-deep"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.12 + itemIndex * 0.04,
                      ease,
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
