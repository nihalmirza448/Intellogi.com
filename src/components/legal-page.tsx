import type { ReactNode } from "react";
import { MarketingChrome } from "@/components/marketing-chrome";
import { Reveal } from "@/components/reveal";

export const LEGAL_UPDATED = "11 November 2026";

export const COMPANY = {
  name: "INTELLOGI TECHNOLOGIES LTD.",
  number: "15973922",
  address: "86 Copal House, 25 Minnie Baldock Street, London E16 1DT, United Kingdom",
  email: "nihal@intellogi.com",
} as const;

export function LegalPage({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <MarketingChrome>
      <article className="px-[var(--site-gutter)] pb-24 pt-32">
        <div className="site-shell">
          <Reveal>
            <p className="site-kicker">{kicker}</p>
            <h1 className="site-display mt-6 max-w-5xl">{title}</h1>
            <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-text-muted">
              Last updated {LEGAL_UPDATED}
            </p>
          </Reveal>
          <div className="prose prose-invert mt-14 max-w-2xl text-base leading-relaxed text-text-secondary prose-headings:text-foreground prose-a:text-foreground prose-strong:text-foreground">
            {children}
          </div>
        </div>
      </article>
    </MarketingChrome>
  );
}

export function ContactBlock() {
  return (
    <p>
      {COMPANY.name}, company number {COMPANY.number}, registered in England
      and Wales. Registered office: {COMPANY.address}. Email:{" "}
      <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
    </p>
  );
}
