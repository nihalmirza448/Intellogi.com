"use client";

import { Reveal } from "@/components/reveal";
import { useFieldHover } from "@/components/spatial-field";

const steps = [
  {
    title: "Define the requirement",
    body: "What should exist, what should not, and what the estate will look like — before the constraint becomes a build.",
  },
  {
    title: "Understand the constraint",
    body: "Outcomes, risks, and what “done” means — before anyone writes code.",
  },
  {
    title: "Ship in thin slices",
    body: "Vertical increments so stakeholders see the real system early, not a slide about it.",
  },
  {
    title: "Leave the runway clear",
    body: "Runbooks, ownership, and defaults your engineers can extend without us in the room.",
  },
] as const;

function Step({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const hover = useFieldHover(1);

  return (
    <li
      className="group border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
      {...hover}
    >
      <p className="font-mono text-xs text-gold">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-gold">
        {step.title}
      </h3>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">{step.body}</p>
    </li>
  );
}

export function ApproachSection() {
  return (
    <section id="approach" className="site-section px-[var(--site-gutter)]">
      <div className="site-shell">
        <Reveal>
          <p className="site-kicker">Approach</p>
          <h2 className="site-title mt-4 max-w-3xl">
            Small teams. Tight loops. A handoff you can keep.
          </h2>
        </Reveal>
        <ol className="mt-16 grid gap-12 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <Step key={step.title} step={step} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
