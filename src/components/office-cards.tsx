import { offices } from "@/lib/offices";
import { cn } from "@/lib/utils";

export function OfficeCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-6 text-left sm:grid-cols-2",
        className
      )}
    >
      {offices.map((office) => (
        <div
          key={office.id}
          className="rounded-2xl border border-zinc-200/80 bg-white/60 p-6 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/40"
        >
          <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
            {office.label}
          </h3>
          <address className="mt-4 not-italic text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {office.lines.map((line, i) => (
              <span key={`${office.id}-${i}`} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      ))}
    </div>
  );
}
