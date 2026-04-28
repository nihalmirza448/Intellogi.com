"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  url?: string;
  kicker: string;
  title: string;
  description: string;
  iframeTitle: string;
  openNewTabLabel: string;
  placeholderTitle: string;
  placeholderBody: string;
  placeholderCta: string;
  embedHint: string;
};

export function PrivyraHostedDemo({
  url,
  kicker,
  title,
  description,
  iframeTitle,
  openNewTabLabel,
  placeholderTitle,
  placeholderBody,
  placeholderCta,
  embedHint,
}: Props) {
  if (!url) {
    return (
      <div className="rounded-2xl border border-zinc-200/80 bg-white/70 p-8 dark:border-zinc-800/80 dark:bg-zinc-900/50 sm:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {kicker}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
          {placeholderTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {placeholderBody}
        </p>
        <Link
          href="/#contact"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-sky-500 dark:text-zinc-950 dark:hover:bg-sky-400"
        >
          {placeholderCta}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="mx-auto max-w-3xl text-center sm:text-left">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {kicker}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 underline-offset-4 hover:underline dark:text-sky-400"
        >
          {openNewTabLabel}
          <ExternalLink className="size-3.5 shrink-0 opacity-80" aria-hidden />
        </a>
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-100 shadow-inner",
          "dark:border-zinc-700 dark:bg-zinc-900/80"
        )}
      >
        <iframe
          title={iframeTitle}
          src={url}
          className="block min-h-[min(85vh,52rem)] w-full bg-white"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <p className="text-center text-xs leading-relaxed text-zinc-500 dark:text-zinc-500 sm:text-left">
        {embedHint}
      </p>
    </div>
  );
}
