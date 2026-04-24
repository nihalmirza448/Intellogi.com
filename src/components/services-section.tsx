import { cn } from "@/lib/utils";

const items = [
  {
    title: "Platforms for coordination & response",
    body: "Web applications for communities and organizations—information sharing, case or aid flows, and operations under pressure, including early-warning concepts where timing and clarity matter.",
  },
  {
    title: "Fintech, markets & analytics",
    body: "Dashboards, strategy tooling, and integrations around exchanges and data providers—connecting signals, execution, and reporting so decisions stay traceable.",
  },
  {
    title: "Commerce, content & automation",
    body: "Storefronts and marketing sites on modern stacks, plus automation that cuts repetitive work between tools—including agent-style workflows where they fit.",
  },
  {
    title: "Data engineering & legacy inputs",
    body: "Pipelines and databases that turn messy operational reality—spreadsheets, exports, archives—into something queryable and maintainable.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-zinc-200/80 px-4 py-20 dark:border-zinc-800/80 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Services
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          What we build — with the same delivery discipline across domains.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <li
              key={item.title}
              className={cn(
                "rounded-2xl border border-zinc-200/80 bg-white/60 p-6 backdrop-blur-sm",
                "dark:border-zinc-800/80 dark:bg-zinc-950/40"
              )}
            >
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-50">
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
