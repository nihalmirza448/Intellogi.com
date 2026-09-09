"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Magnetic } from "@/components/magnetic";
import { RevealItem } from "@/components/reveal";

const channels = [
  { id: "01", name: "Define" },
  { id: "02", name: "Architect" },
  { id: "03", name: "Deliver" },
  { id: "04", name: "Run" },
] as const;

function zoneTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function DualClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-text-muted">
      {now ? (
        <>
          London {zoneTime(now, "Europe/London")}
          <span className="mx-2 text-gold/50">/</span>
          Hyderabad {zoneTime(now, "Asia/Kolkata")}
        </>
      ) : (
        <span aria-hidden>London ——:——:—— / Hyderabad ——:——:——</span>
      )}
    </p>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end px-[var(--site-gutter)] pb-10 pt-28 sm:pb-14">
      <div className="site-shell">
        <RevealItem>
          <Link href="/#contact" className="site-kicker site-link inline-flex items-center gap-2">
            Got a constraint? Start here
            <ArrowUpRight className="size-3.5" strokeWidth={2} />
          </Link>
        </RevealItem>
        <RevealItem delay={0.06}>
          <h1 className="site-display mt-6 max-w-6xl">
            The technology function
            <br />
            for large programmes.
          </h1>
        </RevealItem>
        <RevealItem delay={0.12}>
          <p className="site-lede mt-8 max-w-xl">
            From the requirement to the running system, one accountable partner
            across the whole technology surface — for humanitarian, civic, and
            financial programmes that need the estate held.
          </p>
        </RevealItem>
        <RevealItem delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link href="/#contact" className="site-btn site-btn-primary site-link">
                Tell us the constraint
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </Link>
            </Magnetic>
            <Link href="/#work" className="site-btn site-btn-quiet site-link">
              Selected work
            </Link>
          </div>
        </RevealItem>
      </div>

      <div className="site-shell mt-16 flex flex-col gap-4 border-t border-border pt-5 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-text-secondary">
          {channels.map((channel) => (
            <li key={channel.id}>
              <span className="text-gold">{channel.id}</span> {channel.name}
            </li>
          ))}
        </ul>
        <DualClock />
      </div>
    </section>
  );
}
