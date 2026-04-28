import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Radar,
  Search,
  Shield,
  Trash2,
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { PrivyraHostedDemo } from "@/components/privyra-hosted-demo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPrivyraDemoUrl } from "@/lib/privyra-demo";
import { cn } from "@/lib/utils";
import {
  privyraDashboard,
  privyraMeta,
  privyraFaq,
  privyraFeatures,
  privyraFinalCta,
  privyraFooter,
  privyraHero,
  privyraHostedDemo,
  privyraHowItWorks,
  privyraImageUrls,
  privyraIndia,
  privyraPricing,
  privyraProblems,
  privyraTrust,
  privyraTrustPills,
  privyraWaitlist,
} from "@/data/privyra";

export const metadata: Metadata = {
  title: `${privyraMeta.name} — ${privyraMeta.tagline}`,
  description: privyraMeta.description,
  openGraph: {
    title: `${privyraMeta.name} · Intellogi Technologies`,
    description: privyraMeta.description,
  },
};

function SectionShell({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t border-zinc-200/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-zinc-800/80",
        className
      )}
    >
      {children}
    </section>
  );
}

export default function PrivyraProjectPage() {
  const privyraDemoUrl = getPrivyraDemoUrl();

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <div className="border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-3 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/50 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <Link
              href="/"
              className="flex min-w-0 max-w-[min(100%,18rem)] items-center gap-2.5 font-medium text-zinc-900 transition-colors hover:text-sky-700 dark:text-zinc-100 dark:hover:text-sky-400 sm:max-w-none"
            >
              <BrandMark size={44} />
              <span className="truncate">Intellogi Technologies</span>
            </Link>
            <ChevronRight className="size-4 opacity-50" aria-hidden />
            <span className="text-zinc-500 dark:text-zinc-400">Projects</span>
            <ChevronRight className="size-4 opacity-50" aria-hidden />
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {privyraMeta.name}
            </span>
          </div>
        </div>

        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-[28rem] overflow-hidden px-4 py-16 sm:min-h-[32rem] sm:px-6 sm:py-24 lg:px-8"
        >
          <Image
            src={privyraImageUrls.heroBg}
            alt=""
            fill
            className="object-cover opacity-[0.18] dark:opacity-[0.12]"
            sizes="100vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-50/95 to-zinc-50 dark:from-zinc-950 dark:via-zinc-950/95 dark:to-zinc-950"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur-sm dark:border-zinc-700/80 dark:bg-zinc-900/60 dark:text-zinc-200">
              <span aria-hidden>🇮🇳</span>
              {privyraHero.badge}
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
              {privyraHero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {privyraHero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-sky-500 dark:text-zinc-950 dark:hover:bg-sky-400"
              >
                Join early access
              </Link>
              {privyraDemoUrl ? (
                <a
                  href="#live-demo"
                  className="inline-flex h-11 items-center rounded-full border border-zinc-300 bg-white/80 px-6 text-sm font-medium text-zinc-800 backdrop-blur-sm transition-colors hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-900/60 dark:text-zinc-100"
                >
                  Open live preview
                </a>
              ) : null}
              <a
                href="#how-it-works"
                className="inline-flex h-11 items-center rounded-full border border-zinc-300 bg-white/80 px-6 text-sm font-medium text-zinc-800 backdrop-blur-sm transition-colors hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-900/60 dark:text-zinc-100"
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {privyraTrustPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-zinc-200/90 bg-white/60 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-400"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Hosted CRA / production app (iframe when NEXT_PUBLIC_PRIVYRA_DEMO_URL is set) */}
        <SectionShell id="live-demo" className="border-t-0 sm:border-t">
          <div className="mx-auto max-w-5xl">
            <PrivyraHostedDemo
              url={privyraDemoUrl}
              kicker={privyraHostedDemo.kicker}
              title={privyraHostedDemo.title}
              description={privyraHostedDemo.description}
              iframeTitle={privyraHostedDemo.iframeTitle}
              openNewTabLabel={privyraHostedDemo.openNewTabLabel}
              placeholderTitle={privyraHostedDemo.placeholderTitle}
              placeholderBody={privyraHostedDemo.placeholderBody}
              placeholderCta={privyraHostedDemo.placeholderCta}
              embedHint={privyraHostedDemo.embedHint}
            />
          </div>
        </SectionShell>

        {/* Waitlist CTA */}
        <SectionShell id="waitlist" className="border-t-0 sm:border-t">
          <div className="mx-auto max-w-lg rounded-2xl border border-zinc-200/80 bg-white/70 p-8 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {privyraWaitlist.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {privyraWaitlist.subtext}
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              {privyraWaitlist.formNote}
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-sky-500 dark:text-zinc-950 dark:hover:bg-sky-400"
            >
              Contact Intellogi Technologies for access
            </Link>
          </div>
        </SectionShell>

        {/* Problem */}
        <SectionShell id="problem">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {privyraProblems.kicker}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              {privyraProblems.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {privyraProblems.description}
            </p>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {privyraProblems.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-zinc-200/80 bg-white/60 p-5 dark:border-zinc-800/80 dark:bg-zinc-950/40"
                >
                  <Shield
                    className="size-8 text-sky-600 dark:text-sky-400"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </SectionShell>

        {/* How it works */}
        <SectionShell id="how-it-works">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {privyraHowItWorks.kicker}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              {privyraHowItWorks.headline}
            </h2>
            <ol className="mt-12 grid gap-6 lg:grid-cols-3">
              {privyraHowItWorks.steps.map((step, i) => {
                const Icon = [Search, Radar, Trash2][i] ?? Search;
                return (
                  <li
                    key={step.title}
                    className="relative rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/30"
                  >
                    <span className="font-mono text-xs text-zinc-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="mt-3 size-8 text-sky-600 dark:text-sky-400"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </SectionShell>

        {/* Features */}
        <SectionShell id="features">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {privyraFeatures.kicker}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              {privyraFeatures.headline}
            </h2>
            <ul className="mt-12 grid gap-5 md:grid-cols-2">
              {privyraFeatures.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-zinc-200/80 bg-white/60 p-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"
                >
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </SectionShell>

        {/* India */}
        <section
          id="india-matters"
          className="relative min-h-[24rem] scroll-mt-24 overflow-hidden border-t border-zinc-200/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:border-zinc-800/80"
        >
          <Image
            src={privyraImageUrls.indiaBg}
            alt=""
            fill
            className="object-cover opacity-[0.12] grayscale dark:opacity-[0.08]"
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-zinc-50/90 dark:bg-zinc-950/90"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {privyraIndia.kicker}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              {privyraIndia.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {privyraIndia.description}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {privyraIndia.stats.map((s) => (
                <article
                  key={s.label}
                  className="rounded-2xl border border-zinc-200/80 bg-white/70 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/50"
                >
                  <p className="font-mono text-2xl font-semibold text-sky-700 dark:text-sky-400">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {s.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard preview */}
        <SectionShell id="dashboard-preview">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-zinc-200/80 bg-white/70 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/50">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {privyraDashboard.title}
                </h3>
                <span className="shrink-0 rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-800 dark:text-sky-300">
                  {privyraDashboard.chip}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {privyraDashboard.rows.map(([label, value]) => (
                  <li
                    key={label}
                    className="flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/80 px-4 py-3 dark:border-zinc-700/80 dark:bg-zinc-950/60"
                  >
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {label}
                    </span>
                    <span className="font-mono text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              {privyraDashboard.metrics.map((m) => (
                <article
                  key={m.label}
                  className="rounded-2xl border border-zinc-200/80 bg-white/60 p-5 dark:border-zinc-800/80 dark:bg-zinc-950/40"
                >
                  <p className="font-mono text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {m.value}
                    {m.suffix ?? ""}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {m.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>

        {/* Trust */}
        <SectionShell id="trust">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {privyraTrust.kicker}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              {privyraTrust.headline}
            </h2>
            <p className="mt-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {privyraTrust.featuredLabel}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {privyraTrust.logos.map((name) => (
                <div
                  key={name}
                  className="flex min-h-[5rem] items-center justify-center rounded-2xl border border-zinc-200/80 bg-zinc-50/80 text-lg font-semibold text-zinc-700 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:text-zinc-300"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        {/* Pricing */}
        <SectionShell id="pricing">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {privyraPricing.kicker}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              {privyraPricing.headline}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {privyraPricing.note}
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {privyraPricing.tiers.map((tier) => (
                <article
                  key={tier.name}
                  className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white/60 p-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"
                >
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {tier.name}
                  </h3>
                  <p className="mt-2 font-mono text-2xl font-bold text-sky-700 dark:text-sky-400">
                    {tier.price}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {tier.summary}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {tier.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-sky-600 dark:text-sky-400"
                          aria-hidden
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#contact"
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
                  >
                    Join the waitlist
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>

        {/* FAQ */}
        <SectionShell id="faq">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {privyraFaq.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              {privyraFaq.headline}
            </h2>
            <div className="mt-8 divide-y divide-zinc-200/90 border-y border-zinc-200/90 dark:divide-zinc-800 dark:border-zinc-800">
              {privyraFaq.items.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="cursor-pointer list-none font-medium text-zinc-900 outline-none marker:content-none dark:text-zinc-100 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <ChevronRight className="mt-0.5 size-4 shrink-0 transition-transform group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </SectionShell>

        {/* Final CTA */}
        <SectionShell id="final-cta" className="border-b-0">
          <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200/80 bg-zinc-900 px-8 py-14 text-center text-white dark:border-zinc-700 dark:bg-zinc-900">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {privyraFinalCta.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300 sm:text-base">
              {privyraFinalCta.subtext}
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              Get early access
            </Link>
          </div>
        </SectionShell>

        {/* Project footer strip */}
        <div className="border-t border-zinc-200/80 bg-zinc-50/50 px-4 py-10 dark:border-zinc-800/80 dark:bg-zinc-950/40 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {privyraMeta.name}
              </p>
              <p className="mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
                {privyraFooter.description}
              </p>
            </div>
            <div className="text-sm">
              <span className="text-zinc-500 dark:text-zinc-400">Product: </span>
              <a
                href={`mailto:${privyraFooter.email}`}
                className="font-medium text-sky-700 underline-offset-4 hover:underline dark:text-sky-400"
              >
                {privyraFooter.email}
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
