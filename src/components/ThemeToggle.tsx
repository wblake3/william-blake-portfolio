"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/Providers";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-foreground transition hover:border-accent/50"
      aria-label={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle colour theme"
      }
      title={mounted ? (isDark ? "Light mode" : "Dark mode") : "Theme"}
    >
      {mounted && isDark ? (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 3v1.5M12 19.5V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.5M19.5 12H21M4.9 19.1 6 18M18 6l1.1-1.1"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 14.5A7.5 7.5 0 1 1 9.5 4 6 6 0 0 0 20 14.5Z"
          />
        </svg>
      )}
    </button>
  );
}
