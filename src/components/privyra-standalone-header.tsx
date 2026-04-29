import Link from "next/link";
import { privyraMeta } from "@/data/privyra";

const nav = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#waitlist", label: "Waitlist" },
] as const;

export function PrivyraStandaloneHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d12]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-2 sm:gap-2 sm:px-6 sm:py-3 lg:px-8">
        {/* Full-width tap target on mobile; flex-1 strip to the left of nav on sm+ */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:justify-between sm:gap-4">
          <Link
            href="/projects/privyra#hero"
            className="group flex min-h-14 w-full flex-col justify-center rounded-lg px-3 py-3 outline-offset-2 transition-colors hover:bg-white/5 active:bg-white/10 sm:min-h-0 sm:w-auto sm:flex-1 sm:min-w-0 sm:px-2 sm:py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/60"
          >
            <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
              {privyraMeta.name}
            </span>
            <span className="truncate text-xs text-zinc-400 group-hover:text-zinc-300 sm:text-sm">
              {privyraMeta.tagline}
            </span>
          </Link>
          <nav className="flex w-full flex-wrap items-center gap-1 border-t border-white/5 pt-2 sm:w-auto sm:shrink-0 sm:self-center sm:border-t-0 sm:pt-0">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2.5 py-2 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-cyan-300 sm:px-3 sm:py-1.5 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
