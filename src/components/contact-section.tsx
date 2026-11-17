"use client";

import { OfficeCards } from "@/components/office-cards";
import { Reveal } from "@/components/reveal";
import { useFieldHover } from "@/components/spatial-field";

export function ContactSection() {
  const hover = useFieldHover(3);

  return (
    <section id="contact" className="theme-dark site-section px-[var(--site-gutter)]">
      <div className="site-shell">
        <Reveal>
          <p className="site-kicker">Contact</p>
          <h2 className="site-title mt-4 max-w-4xl">
            Tell us what the programme needs. We will reply with a next step.
          </h2>
          <p className="site-lede mt-6 max-w-md">
            Share the problem, the timeline, and who will own the system after
            launch. We typically respond within two business days.
          </p>
          <div className="mt-10">
            <a
              href="mailto:nihal@intellogi.com"
              className="site-link inline-block text-[clamp(1.6rem,5vw,3.5rem)] font-normal tracking-tight text-foreground underline decoration-[var(--mint)] decoration-[4px] underline-offset-[10px]"
              {...hover}
            >
              nihal@intellogi.com
            </a>
          </div>
        </Reveal>
        <div id="locations" className="mt-20 scroll-mt-24">
          <p className="site-kicker">Offices</p>
          <p className="mt-3 max-w-md text-text-secondary">
            London and Hyderabad — overlapping hours for UK and India time
            zones. That overlap is what makes Run credible: support that covers
            both working days.
          </p>
          <OfficeCards className="mt-8" />
        </div>
      </div>
    </section>
  );
}
