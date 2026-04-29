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
      <div className="mx-auto flex max-w-5xl flex-wrap items-stretch justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3.5 lg:px-8">
        <Link
          href="/projects/privyra#hero"
          className="group flex min-h-12 min-w-0 flex-1 flex-col justify-center rounded-lg px-2 py-2 -mx-1 outline-offset-2 transition-colors hover:bg-white/5 active:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/60 sm:min-h-0 sm:py-1.5"
        >
          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            {privyraMeta.name}
          </span>
          <span className="truncate text-xs text-zinc-400 group-hover:text-zinc-300 sm:text-sm">
            {privyraMeta.tagline}
          </span>
        </Link>
        <nav className="flex shrink-0 flex-wrap items-center gap-1 self-center sm:gap-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-cyan-300 sm:px-3 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
