import Link from "next/link";
import { cn } from "@/lib/utils";

type Domain =
  | { title: string; body: string; href: string }
  | { title: string; body: string };

const domains: Domain[] = [
  {
    title: "Privyra — privacy & data-broker removal",
    body: "India-focused product vision: scan broker exposure, automate deletion requests, and monitor risk.",
    href: "/projects/privyra",
  },
  {
    title: "Mutual aid & civic platforms",
    body: "Coordination tools for communities and response organizations.",
  },
  {
    title: "Early warning & regional data",
    body: "Initiatives where timing, geography, and trustworthy data matter.",
  },
  {
    title: "Trading & market analytics",
    body: "Tooling around signals, execution, and operational reporting.",
  },
  {
    title: "E‑commerce & branded web",
    body: "Storefronts and marketing properties you can extend and operate.",
  },
  {
    title: "Visa & compliance-adjacent tools",
    body: "Consumer-facing flows where clarity and accuracy reduce friction.",
  },
  {
    title: "Databases, migration & reporting",
    body: "Setup and pipelines for teams who live in spreadsheets and exports.",
  },
];

const cardClass = cn(
  "h-full rounded-2xl border border-zinc-200/80 bg-white/60 p-5 backdrop-blur-sm",
  "dark:border-zinc-800/80 dark:bg-zinc-950/40"
);

export function WorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-zinc-200/80 px-4 py-20 dark:border-zinc-800/80 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Work
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Selected directions, not a trophy wall.
        </p>
        <ul className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((item) => (
            <li key={item.title} className="min-h-0 list-none">
              {"href" in item ? (
                <Link
                  href={item.href}
                  aria-label={`${item.title}. ${item.body}`}
                  className={cn(
                    cardClass,
                    "block text-left outline-offset-2 transition-colors",
                    "hover:border-zinc-300/90 hover:bg-white/90 dark:hover:border-zinc-600 dark:hover:bg-zinc-900/55",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500/50"
                  )}
                >
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.body}
                  </p>
                </Link>
              ) : (
                <div className={cardClass}>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.body}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
