import { offices } from "@/lib/offices";
import { cn } from "@/lib/utils";

export function OfficeCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-10 text-left sm:grid-cols-2", className)}>
      {offices.map((office) => (
        <div key={office.id} className="border-t border-gold/40 pt-5">
          <h3 className="site-kicker">{office.label}</h3>
          <address className="mt-4 not-italic text-sm leading-relaxed text-text-secondary">
            {office.lines.map((line, index) => (
              <span key={`${office.id}-${index}`} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      ))}
    </div>
  );
}
