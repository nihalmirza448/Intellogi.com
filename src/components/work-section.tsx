"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useFieldHover } from "@/components/spatial-field";

const cases = [
  {
    title: "Privyra",
    constraint:
      "People cannot see or stop personal data being sold across broker networks in India.",
    approach:
      "Scan exposure, automate deletion requests, and keep risk visible after the first cleanup.",
    // Inferred from Privyra being Intellogi's own product on this site.
    ownership: "Intellogi holds and runs Privyra.",
    href: "/projects/privyra",
    external: false,
    action: "Open the product",
  },
  {
    title: "Mutual Aid Portal",
    constraint:
      "Aid has to move under emergency pressure, with many actors and no shared picture of who is doing what.",
    approach:
      "Case and aid flows, shared operational picture, and a system communities can actually staff.",
    // Restates the existing “communities can actually staff” claim. Confirm operator.
    ownership: "Community operators can staff and run the live system.",
    href: "https://mutual-aid-portal.vercel.app/login",
    external: true,
    action: "View the live system",
  },
  {
    title: "45-60",
    constraint:
      "Trading decisions, rules and results lived in separate tools, so the operation could not be seen as one picture.",
    approach:
      "A live trading cockpit — Confluence Core — so signals, rules, and paper-forward results stay visible after the trade.",
    // Inferred from the live platform. Confirm operator.
    ownership: "Operators run the live platform.",
    href: "https://45-60.com",
    external: true,
    action: "Open the platform",
  },
] as const;

function CaseLink({
  item,
  index,
}: {
  item: (typeof cases)[number];
  index: number;
}) {
  const hover = useFieldHover(2);
  const inner = (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-xs text-gold">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground transition-colors duration-200 group-hover:text-gold sm:text-6xl">
            {item.title}
          </h3>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-secondary">
            <span className="font-medium text-foreground">Constraint. </span>
            {item.constraint}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
            <span className="font-medium text-foreground">Approach. </span>
            {item.approach}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
            <span className="font-medium text-foreground">Ownership. </span>
            {item.ownership}
          </p>
        </div>
        <span className="site-btn site-btn-quiet inline-flex h-auto shrink-0">
          {item.action}
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="site-case group"
        {...hover}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={item.href} className="site-case group" {...hover}>
      {inner}
    </Link>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="site-section px-[var(--site-gutter)]">
      <div className="site-shell">
        <Reveal>
          <p className="site-kicker">Work</p>
          <h2 className="site-title mt-4 max-w-3xl">Constraint, then the system.</h2>
        </Reveal>
        <div className="mt-16">
          {cases.map((item, index) => (
            <CaseLink key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
