"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useFieldHover } from "@/components/spatial-field";
import { caseStudies, type CaseStudy } from "@/data/case-studies";

const proof = [
  { value: "IOM", label: "Early warning platform for a Sudanese state government" },
  { value: "FCDO", label: "Grant compliance and sanctions screening for aid into Sudan" },
  { value: "241", label: "Community representatives trained in Gedaref" },
  { value: "EN / AR", label: "Operating procedures handed over in English and Arabic" },
] as const;

const labs = [
  {
    title: "Privyra",
    body: "Our own privacy product: finds where personal data is exposed on broker sites and automates deletion requests.",
    href: "/projects/privyra",
    external: false,
  },
  {
    title: "45-60",
    body: "A live trading cockpit that keeps signals, rules and results in one view.",
    href: "https://45-60.com",
    external: true,
  },
] as const;

function CaseLink({ item, index }: { item: CaseStudy; index: number }) {
  const hover = useFieldHover(2);
  return (
    <Link href={`/work/${item.slug}`} className="site-case group" {...hover}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-xs text-gold">
            {String(index + 1).padStart(2, "0")} · {item.sector}
          </p>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground transition-colors duration-200 group-hover:text-gold sm:text-5xl">
            {item.title}
          </h3>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-secondary">
            {item.summary}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
            <span className="font-medium text-foreground">Our role. </span>
            {item.role}
          </p>
        </div>
        <span className="site-btn site-btn-quiet inline-flex h-auto shrink-0">
          Read the case
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="site-section px-[var(--site-gutter)]">
      <div className="site-shell">
        <Reveal>
          <p className="site-kicker">Work</p>
          <h2 className="site-title mt-4 max-w-3xl">
            Systems that government and UN programmes run on.
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 lg:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label}>
                <dt className="text-3xl font-extrabold tracking-tight text-gold">{p.value}</dt>
                <dd className="mt-2 max-w-[16rem] text-xs leading-snug text-text-secondary">
                  {p.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16">
          {caseStudies.map((item, index) => (
            <CaseLink key={item.slug} item={item} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/work" className="site-btn site-btn-quiet site-link">
            All work
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <Reveal className="mt-20">
          <p className="site-kicker">Products and labs</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
            Products we build and run ourselves, alongside programme work.
          </p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {labs.map((lab) => (
              <li key={lab.title} className="border-t border-border pt-5">
                {lab.external ? (
                  <a
                    href={lab.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link group inline-flex items-center gap-2 text-lg font-bold text-foreground hover:text-gold"
                  >
                    {lab.title}
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : (
                  <Link
                    href={lab.href}
                    className="site-link group inline-flex items-center gap-2 text-lg font-bold text-foreground hover:text-gold"
                  >
                    {lab.title}
                    <ArrowUpRight className="size-4" />
                  </Link>
                )}
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">
                  {lab.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
