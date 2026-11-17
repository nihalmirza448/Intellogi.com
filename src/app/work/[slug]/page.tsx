import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { MarketingChrome } from "@/components/marketing-chrome";
import { Reveal } from "@/components/reveal";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { siteUrl } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { title: c.title, description: c.summary, type: "article" },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const url = `${siteUrl}/work/${c.slug}`;
  const others = caseStudies.filter((o) => o.slug !== c.slug);

  return (
    <MarketingChrome>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.title,
            description: c.summary,
            url,
            mainEntityOfPage: url,
            author: { "@id": `${siteUrl}/#organization` },
            publisher: { "@id": `${siteUrl}/#organization` },
            about: c.capabilities,
            contentLocation: { "@type": "Place", name: c.location },
            ...(c.commissionedBy
              ? { sponsor: { "@type": "Organization", name: c.commissionedBy } }
              : c.fundedBy
                ? { funder: { "@type": "Organization", name: c.fundedBy } }
                : {}),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/work` },
              { "@type": "ListItem", position: 3, name: c.title, item: url },
            ],
          },
        ]}
      />
      <article className="px-[var(--site-gutter)] pb-24 pt-32">
        <div className="site-shell">
          <Reveal>
            <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted">
              <Link href="/" className="site-link hover:text-gold">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/work" className="site-link hover:text-gold">Work</Link>
            </nav>
            <p className="site-kicker mt-8">{c.sector}</p>
            <h1 className="site-title mt-4 max-w-5xl">{c.title}</h1>
            <p className="site-lede mt-8 max-w-2xl">{c.summary}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-border pt-8 sm:grid-cols-2">
              {c.partners.map((p) => (
                <div key={p.label}>
                  <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-text-muted">
                    {p.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{p.value}</dd>
                </div>
              ))}
              <div>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-text-muted">
                  Our role
                </dt>
                <dd className="mt-1 text-sm text-foreground">{c.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-text-muted">
                  Location · Status
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  {c.location} · {c.status}
                </dd>
              </div>
            </dl>
          </Reveal>

          {c.stats ? (
            <dl className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {c.stats.map((s) => (
                <div key={s.label} className="border-t border-border pt-5">
                  <dt className="text-4xl font-extrabold tracking-tight text-gold">{s.value}</dt>
                  <dd className="mt-2 text-xs leading-snug text-text-secondary">{s.label}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <section className="mt-20 max-w-2xl">
            <h2 className="site-kicker">The constraint</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">{c.constraint}</p>
          </section>

          <section className="mt-16">
            <h2 className="site-kicker">What we delivered</h2>
            <ol className="mt-6 grid gap-8 lg:grid-cols-2">
              {c.delivered.map((d, i) => (
                <li key={d.title} className="border-t border-border pt-6">
                  <p className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">{d.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">{d.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 max-w-2xl">
            <h2 className="site-kicker">Outcome</h2>
            {c.outcome.map((o) => (
              <p key={o} className="mt-4 text-base leading-relaxed text-text-secondary">{o}</p>
            ))}
          </section>

          <section className="mt-12">
            <h2 className="sr-only">Capabilities</h2>
            <ul className="flex flex-wrap gap-2">
              {c.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-text-secondary"
                >
                  {cap}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-14 flex flex-wrap items-center gap-3">
            <Link href="/#contact" className="site-btn site-btn-primary site-link">
              Discuss a similar programme
              <ArrowUpRight className="size-4" />
            </Link>
            {c.link ? (
              <a
                href={c.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn site-btn-quiet site-link"
              >
                {c.link.label}
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
          </div>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-text-muted">
            Programme documentation, system demonstration and references are
            available to partners on request.
          </p>

          <section className="mt-24">
            <h2 className="site-kicker">More work</h2>
            <ul className="mt-6">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/work/${o.slug}`} className="site-case group">
                    <p className="font-mono text-xs text-gold">{o.sector}</p>
                    <p className="mt-3 text-2xl font-bold tracking-tight text-foreground group-hover:text-gold">
                      {o.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </MarketingChrome>
  );
}
