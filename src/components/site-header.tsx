import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/#locations", label: "Offices" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 px-4 py-3 backdrop-blur-2xl",
          "dark:border-zinc-800/80 dark:bg-zinc-950/60"
        )}
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          <BrandMark size={52} priority />
          <span className="truncate sm:whitespace-normal">
            Intellogi Technologies
          </span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}
