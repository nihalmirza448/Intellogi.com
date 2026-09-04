"use client";

import { Reveal } from "@/components/reveal";
import { useFieldHover } from "@/components/spatial-field";

const items = [
  {
    title: "Platforms for coordination and response",
    body: "Web applications for communities and organizations — information sharing, case or aid flows, and operations under pressure, including early-warning work where timing and clarity matter.",
  },
  {
    title: "Markets, data, and reporting",
    body: "Dashboards, pipelines, and exchange integrations that keep signals, execution, and reporting traceable — including the messy inputs teams actually live in: spreadsheets, exports, archives.",
  },
  {
    title: "Commerce and operational automation",
    body: "Storefronts and marketing properties on modern stacks, plus the connections between CRM, content, and internal tools — including agent-style workflows where they earn their place.",
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
        {String(index + 1).padStart(2, "0")}
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
    <section id="services" className="site-section px-[var(--site-gutter)]">
      <div className="site-shell">
        <Reveal>
          <p className="site-kicker">Services</p>
          <h2 className="site-title mt-4 max-w-3xl">
            Three kinds of systems. One delivery standard.
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
