"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "absolute -left-1/4 top-0 h-[480px] w-[150%] rounded-[100%] opacity-40 blur-3xl",
            "bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-sky-200/50 via-transparent to-transparent",
            "dark:from-sky-900/30"
          )}
        />
      </div>
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"
        >
          Technology &amp; operations
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50"
        >
          Clear systems. Thoughtful delivery.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          Intellogi helps teams design, build, and run reliable digital products
          — from first architecture to steady-state operations.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          Our work spans custom web applications, data and reporting pipelines,
          and integrations that connect trading stacks, CRMs, and operational
          tools — with documentation, handoff, and sensible defaults included.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/#contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Start a project
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </Link>
          <Link
            href="/#services"
            className="inline-flex h-11 items-center rounded-full border border-zinc-300 bg-white/80 px-6 text-sm font-medium text-zinc-800 backdrop-blur-sm transition-colors hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-100 dark:hover:border-zinc-600"
          >
            View services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
