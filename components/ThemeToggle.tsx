"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Hydration-safe mounted flag without setState-in-effect (react-hooks rule)
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="font-mono text-xs tracking-widest text-muted transition-colors hover:text-foreground"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted ? (resolvedTheme === "dark" ? "☀ PAPER" : "☾ INK") : "· · ·"}
    </button>
  );
}
