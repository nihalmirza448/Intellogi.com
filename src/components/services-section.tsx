"use client";

import { Reveal } from "@/components/reveal";
import { useFieldHover } from "@/components/spatial-field";

const items = [
  {
    label: "Define",
    title: "A requirement a board can fund",
    body: "Programme objectives exist. The technology requirement usually does not. We turn those objectives into what is needed, what already exists, what should be bought rather than built, and what should not exist at all — costed and phased so a donor can fund it and a board can approve it.",
  },
  {
    label: "Architect",
    title: "Someone holds the whole estate",
    body: "When the estate has no shape, every new tool becomes another seam. We set the systems, data model, integration points, access tiers, hosting, security posture, and how it will be governed — so there is one picture, and someone is accountable for it.",
  },
  {
    label: "Deliver",
    title: "The systems the programme runs",
    body: "This is the part everyone else leads with. We build and integrate coordination platforms, field collection, case and aid flows, data pipelines, reporting, storefronts, and the connections to whatever already exists. Every figure in a report walks back to the input that produced it.",
  },
  {
    label: "Run & transfer",
    title: "The programme holds it before we leave",
    body: "We operate what we build: support hours across UK and India time zones, incident response, data quality monitoring, change requests handled as a programme rather than a ticket queue. Documentation, runbooks, named owners and trained engineers are deliverables with dates. The engagement has an end, designed from the start.",
  },
] as const;

function ServiceRow({
  item,
  index,
}: {
  item: (typeof items)[number];
  index: number;
}) {
  const hover = useFieldHover(1);

  return (
    <li
      className="group grid gap-4 border-t border-border py-10 last:border-b sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-10 lg:grid-cols-[5rem_minmax(0,22rem)_1fr] lg:py-14"
      {...hover}
    >
      <span className="font-mono text-xs text-gold">
        {String(index + 1).padStart(2, "0")} {item.label}
      </span>
      <h3 className="max-w-md text-2xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-gold sm:text-3xl">
        {item.title}
      </h3>
      <p className="max-w-xl self-center text-sm leading-relaxed text-text-secondary lg:justify-self-end">
        {item.body}
      </p>
    </li>
  );
}

export function ServicesSection() {
  return (
    <section id="capabilities" className="site-section px-[var(--site-gutter)]">
      <div id="services" className="site-shell">
        <Reveal>
          <p className="site-kicker">Capabilities</p>
          <h2 className="site-title mt-4 max-w-3xl">
            Four capabilities. One accountable partner.
          </h2>
        </Reveal>
        <ol className="mt-16">
          {items.map((item, index) => (
            <ServiceRow key={item.title} item={item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
