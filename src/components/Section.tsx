import { RevealWords } from "@/components/Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  intro?: string;
};

export function Section({ id, eyebrow, title, children, intro }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-line/70 px-6 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <RevealWords
          as="p"
          text={eyebrow}
          className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent-deep"
        />
        <RevealWords
          as="h2"
          text={title}
          delay={0.08}
          className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        />
        {intro ? (
          <RevealWords
            as="p"
            text={intro}
            delay={0.16}
            className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          />
        ) : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
