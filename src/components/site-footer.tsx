import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/80 px-4 py-12 dark:border-zinc-800/80 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Intellogi
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Web products, data systems, and integrations for teams that need
            dependable software — civic tech, financial analytics, commerce, and
            internal operations.
          </p>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Intellogi. All rights reserved.
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
            href="https://github.com/nihalmirza448/Intellogi.com"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="/#contact"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
