"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
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
    <p className="font-mono text-[0.8125rem] uppercase tracking-[0.03em] text-text-muted">
      {now ? (
        <>
          London {zoneTime(now, "Europe/London")}
          <span className="mx-2 text-gold">/</span>
          Hyderabad {zoneTime(now, "Asia/Kolkata")}
        </>
      ) : (
        <span aria-hidden>London ——:——:—— / Hyderabad ——:——:——</span>
      )}
    </p>
  );
}

function FrameHandles() {
  return (
    <>
      <span className="pk-handle" data-pos="tl" aria-hidden />
      <span className="pk-handle" data-pos="tr" aria-hidden />
      <span className="pk-handle" data-pos="bl" aria-hidden />
      <span className="pk-handle" data-pos="br" aria-hidden />
    </>
  );
}

export function Hero() {
  return (
    <section className="theme-dark relative overflow-hidden px-[var(--site-gutter)] pb-10 pt-32 sm:pb-14 sm:pt-40">
      <div className="site-shell grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-[60px]">
        <div>
          <RevealItem>
            <p className="site-kicker">Intellogi Technologies · London and Hyderabad</p>
          </RevealItem>
          <RevealItem delay={0.06}>
            <h1 className="site-display mt-6 max-w-4xl">
              The technology partner for government and UN programmes.
            </h1>
          </RevealItem>
          <RevealItem delay={0.12}>
            <p className="site-lede mt-8 max-w-xl">
              We define what a programme needs, build and run the systems, then
              hand them over to the people who will own them.
            </p>
            <p className="mt-4 max-w-xl text-text-secondary">
              For ministries, UN agencies, donors and humanitarian partners that
              need one accountable technology team from the requirement to the
              running system.
            </p>
          </RevealItem>
          <RevealItem delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/#contact" className="site-btn site-btn-primary site-link">
                Start a conversation
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </Link>
              <Link href="/work" className="site-btn site-btn-quiet site-link">
                See our work
              </Link>
            </div>
          </RevealItem>
        </div>

        <RevealItem delay={0.2}>
          <div className="pk-checker relative p-[30px] sm:p-[60px]" aria-hidden={false}>
            <span className="pk-pixel" style={{ top: 0, right: 60 }} aria-hidden />
            <span className="pk-pixel" style={{ top: 30, right: 30 }} aria-hidden />
            <span className="pk-pixel" style={{ top: 30, right: 60 }} aria-hidden />
            <span className="pk-pixel" style={{ bottom: 0, left: 0 }} aria-hidden />
            <span className="pk-pixel" style={{ bottom: 0, left: 30 }} aria-hidden />
            <div className="pk-frame p-3">
              <FrameHandles />
              <Link
                href="/work/gedaref-early-warning-system"
                className="site-link block rounded-[var(--radius-card)] bg-white p-6 text-[var(--navy-700)] no-underline"
              >
                <p className="font-mono text-xs uppercase tracking-[0.03em] text-[#44597a]">
                  Live · Gedaref State, Sudan
                </p>
                <p className="mt-3 text-2xl leading-tight tracking-tight">
                  Early warning platform for the state Early Warning Unit
                </p>
                <p className="mt-6 text-5xl tracking-tight">241</p>
                <span className="site-stat-rule" aria-hidden />
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.03em] text-[#44597a]">
                  Community representatives trained
                </p>
                <p className="mt-6 text-sm text-[#44597a]">
                  Commissioned by IOM · with NIDAA
                </p>
              </Link>
            </div>
          </div>
        </RevealItem>
      </div>

      <div className="site-shell mt-16 flex flex-col gap-4 border-t border-border pt-5 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.8125rem] uppercase tracking-[0.03em] text-text-secondary">
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
