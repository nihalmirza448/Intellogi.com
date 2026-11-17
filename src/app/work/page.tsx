import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { MarketingChrome } from "@/components/marketing-chrome";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/data/case-studies";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work: government, UN and humanitarian programmes",
  description:
    "Case studies from Intellogi Technologies: an early warning platform for Gedaref State, Sudan (IOM), FCDO-funded grant compliance, and humanitarian payments.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  return (
    <MarketingChrome>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Intellogi Technologies — Work",
          url: `${siteUrl}/work`,
          publisher: { "@id": `${siteUrl}/#organization` },
          hasPart: caseStudies.map((c) => ({
            "@type": "Article",
            headline: c.title,
            url: `${siteUrl}/work/${c.slug}`,
          })),
        }}
      />
      <section className="px-[var(--site-gutter)] pb-24 pt-32">
        <div className="site-shell">
          <Reveal>
            <p className="site-kicker">Work</p>
            <h1 className="site-display mt-6 max-w-5xl">
              Programme technology, delivered and handed over.
            </h1>
            <p className="site-lede mt-8 max-w-2xl">
              Selected engagements with governments, UN agencies, donors and
              humanitarian partners. Programme documentation, system
              demonstrations and references are available to partners on
              request.
            </p>
          </Reveal>
          <ul className="mt-16">
            {caseStudies.map((c) => (
              <li key={c.slug}>
                <Link href={`/work/${c.slug}`} className="site-case group">
                  <p className="site-kicker">{c.sector}</p>
                  <h2 className="mt-4 max-w-4xl text-3xl font-normal tracking-tight text-foreground group-hover:text-gold sm:text-4xl">
                    {c.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
                    {c.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-gold">
                    Read the case <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MarketingChrome>
  );
}
