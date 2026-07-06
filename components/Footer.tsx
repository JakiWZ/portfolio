import Link from "next/link";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>No cookies · No tracking · No forms</p>
        <nav className="flex gap-5">
          <a href={profile.github} rel="noopener noreferrer" target="_blank" className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} rel="noopener noreferrer" target="_blank" className="hover:text-foreground">
            LinkedIn
          </a>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
