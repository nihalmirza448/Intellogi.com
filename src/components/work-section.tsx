import { cn } from "@/lib/utils";

const domains = [
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
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          A sample of domains we ship in. Swap in public project names, links,
          and screenshots when you are ready — the through-line is reliable
          delivery and systems you can operate.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((item) => (
            <li
              key={item.title}
              className={cn(
                "rounded-2xl border border-zinc-200/80 bg-white/60 p-5 backdrop-blur-sm",
                "dark:border-zinc-800/80 dark:bg-zinc-950/40"
              )}
            >
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
