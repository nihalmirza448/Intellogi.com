import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { offices } from "@/lib/offices";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/80 px-4 py-12 dark:border-zinc-800/80 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <div className="flex items-center gap-4">
              <BrandMark size={56} />
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Intellogi Technologies
              </p>
            </div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Web products, data systems, and integrations for teams that need
              dependable software — civic tech, financial analytics, commerce,
              and internal operations.
            </p>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Intellogi Technologies. All rights
              reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <Link
              href="/about"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              About
            </Link>
            <Link
              href="/#locations"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              Offices
            </Link>
            <Link
              href="/#contact"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-zinc-200/80 pt-10 dark:border-zinc-800/80 sm:grid-cols-2">
          {offices.map((office) => (
            <div key={office.id}>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
                {office.label}
              </p>
              <address className="mt-2 not-italic text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {office.lines.map((line, i) => (
                  <span key={`${office.id}-${i}`} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
