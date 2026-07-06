import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const anchors = [
  ["#work", "Work"],
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#experience", "Experience"],
  ["#contact", "Contact"],
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-tight">
          G<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-5">
          <ul className="hidden items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:flex">
            {anchors.map(([href, label]) => (
              <li key={href}>
                <a href={`/${href}`} className="transition-colors hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
