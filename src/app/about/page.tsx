import type { Metadata } from "next";
import Link from "next/link";
import { MarketingChrome } from "@/components/marketing-chrome";
import { OfficeCards } from "@/components/office-cards";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Intellogi Technologies builds web products, data systems, and integrations for teams that need dependable software — civic tech, financial analytics, commerce, and internal operations.",
};

export default function AboutPage() {
  return (
    <MarketingChrome>
      <article className="px-[var(--site-gutter)] pb-24 pt-32">
        <div className="site-shell">
          <Reveal>
            <p className="site-kicker">About</p>
            <h1 className="site-display mt-6 max-w-5xl">
              Built in the open.
              <br />
              Delivered like infrastructure.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="prose prose-invert mt-14 max-w-2xl text-base leading-relaxed text-text-secondary">
              <p>
                Intellogi Technologies is a technology practice focused on{" "}
                <strong className="font-medium text-foreground">
                  systems that have to work tomorrow
                </strong>
                , not just on launch day. We partner with teams that need clear
                ownership: product and platform engineering, integration and
                automation, and technical advisory when you want a second opinion
                without vendor theater.
              </p>
              <p>
                Our project history reflects that mix: civic and humanitarian
                tooling, financial and analytics platforms, e‑commerce and
                marketing sites, and internal data products — often with strict
                constraints on accuracy, access, and uptime. We prefer small
                teams, tight feedback loops, and documentation your own engineers
                can extend.
              </p>
              <p>
                We work from offices in{" "}
                <strong className="font-medium text-foreground">
                  London, United Kingdom
                </strong>{" "}
                and{" "}
                <strong className="font-medium text-foreground">
                  Hyderabad, India
                </strong>
                , so we can align with teams across UK and India time zones.
              </p>
              <p>
                If you are deciding what to build, how to integrate it, or how to
                keep it running, start with a short conversation and a concrete
                next step.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-20">
              <h2 className="site-kicker">Office locations</h2>
              <OfficeCards className="mt-8 max-w-3xl" />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-14 flex flex-wrap items-center gap-3">
              <Link href="/#contact" className="site-btn site-btn-primary site-link">
                Start a project
              </Link>
              <Link href="/#services" className="site-btn site-btn-quiet site-link">
                View services
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </MarketingChrome>
  );
}
