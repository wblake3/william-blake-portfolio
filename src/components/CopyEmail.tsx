"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

type CopyEmailProps = {
  className?: string;
};

export function CopyEmail({ className }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked; the address is still selectable text.
    }
  }

  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted ${className ?? ""}`}>
      <span>
        or email <span className="select-all font-medium text-foreground">{site.email}</span>
      </span>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-foreground transition hover:border-accent/50"
      >
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </p>
  );
}
