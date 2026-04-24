export function ApproachSection() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-8 sm:p-12 dark:border-zinc-800/80 dark:bg-zinc-900/30">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Approach
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Small teams, tight feedback loops, and documentation you can hand off.
        </p>
        <ol className="mt-10 space-y-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <li className="flex gap-4">
            <span className="shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-500">
              01
            </span>
            <span>
              <strong className="font-medium text-zinc-900 dark:text-zinc-200">
                Understand the constraint.
              </strong>{" "}
              We align on outcomes, risks, and what “done” means before writing
              code.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-500">
              02
            </span>
            <span>
              <strong className="font-medium text-zinc-900 dark:text-zinc-200">
                Ship in thin slices.
              </strong>{" "}
              Vertical increments reduce surprise and keep stakeholders in the
              loop.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-500">
              03
            </span>
            <span>
              <strong className="font-medium text-zinc-900 dark:text-zinc-200">
                Leave the runway clear.
              </strong>{" "}
              Runbooks, ownership, and sensible defaults so your team can own it
              long-term.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}
