"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.dispatchEvent(new Event("themechange"));
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Ignore private-mode storage failures.
    }
    applyTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}
