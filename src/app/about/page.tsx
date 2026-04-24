import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Intellogi builds web products, data systems, and integrations for teams that need dependable software — civic tech, financial analytics, commerce, and internal operations.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <article className="border-b border-zinc-200/80 px-4 py-16 dark:border-zinc-800/80 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              About
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              Built in the open. Delivered like infrastructure.
            </h1>
            <div className="mt-10 space-y-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>
                Intellogi is a technology practice focused on{" "}
                <strong className="font-medium text-zinc-900 dark:text-zinc-200">
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
                If you are deciding what to build, how to integrate it, or how to
                keep it running, we are happy to start with a short conversation
                and a concrete next step.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                Start a project
              </Link>
              <Link
                href="/#services"
                className="inline-flex h-11 items-center rounded-full border border-zinc-300 bg-white/80 px-6 text-sm font-medium text-zinc-800 backdrop-blur-sm transition-colors hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-100 dark:hover:border-zinc-600"
              >
                View services
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
