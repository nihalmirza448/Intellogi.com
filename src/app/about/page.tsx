import type { Metadata } from "next";
import Link from "next/link";
import { MarketingChrome } from "@/components/marketing-chrome";
import { OfficeCards } from "@/components/office-cards";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Intellogi is the technology function for large programmes — one counterpart from the requirement to the running system, then a planned transfer.",
};

export default function AboutPage() {
  return (
    <MarketingChrome>
      <article className="px-[var(--site-gutter)] pb-24 pt-32">
        <div className="site-shell">
          <Reveal>
            <p className="site-kicker">About</p>
            <h1 className="site-display mt-6 max-w-5xl">
              Nobody owns the whole.
              <br />
              That is the job.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="prose prose-invert mt-14 max-w-2xl text-base leading-relaxed text-text-secondary">
              <p>
                Large programmes rarely fail on technology strategy. They fail
                on the scatter. A registration tool from one supplier, a
                dashboard from another, a payments integration nobody owns,
                three incompatible data collection apps, and a spreadsheet
                quietly holding the reporting together. When something breaks at
                a seam, the argument is about whose seam it is. The programme
                pays for that argument in time, in money, and in figures nobody
                can walk back to an input.
              </p>
              <p>
                Intellogi is the technology function those programmes do not
                have in-house. We start before the specification exists. We turn
                programme objectives into a requirement: what is needed, what
                already exists, what should be bought rather than built, and
                what should not exist at all. We hold the shape of the estate —
                systems, data model, integration points, access tiers, hosting,
                security posture, and how it will be governed. We then build and
                integrate the parts that have to exist, including the
                connections to whatever is already running. We operate what we
                build. We transfer it: documentation, runbooks, named owners,
                trained engineers. The engagement has an end, designed from day
                one.
              </p>
              <p>
                Small and senior is the right shape for this, not a limitation.
                A large programme does not need headcount sold by the seat. It
                needs a few people who can define the requirement, hold the
                architecture, and stay answerable when a seam fails. We do not
                grow a team to fill a chart. We stay small enough that one
                counterpart can still see the whole.
              </p>
              <p>
                We work from offices in{" "}
                <strong className="font-medium text-foreground">
                  London, United Kingdom
                </strong>{" "}
                and{" "}
                <strong className="font-medium text-foreground">
                  Hyderabad, India
                </strong>. The overlapping hours are not a convenience. They are what
                makes Run real: support, incident response, and data-quality
                monitoring across UK and India time zones.
              </p>
              <p>
                We will not take a specification we did not help write and call
                that a complete engagement. We will not build a piece of the
                estate and leave the seams to someone else. We will not ship
                without a transfer plan. We will not stay because the handover
                was never designed. If the work is a brief to implement and
                leave, we are the wrong counterpart.
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
                Tell us the constraint
              </Link>
              <Link href="/#capabilities" className="site-btn site-btn-quiet site-link">
                View capabilities
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </MarketingChrome>
  );
}
