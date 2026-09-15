"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const offsets = {
  up: { y: 44, x: 0 },
  left: { x: -40, y: 18 },
  right: { x: 40, y: 18 },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof offsets;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const from = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: from.x, y: from.y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

type RevealWordsProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
};

export function RevealWords({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: RevealWordsProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block pr-[0.28em] last:pr-0"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4, margin: "0px 0px -8% 0px" }}
          transition={{
            duration: 0.55,
            delay: delay + index * 0.05,
            ease,
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
