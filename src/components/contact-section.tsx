import Link from "next/link";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-zinc-200/80 px-4 py-20 dark:border-zinc-800/80 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Contact
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Tell us what you&apos;re building — we&apos;ll reply with next steps.
        </p>
        <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Share the problem, your timeline, and who will own the system after
          launch. We typically respond within two business days with questions or
          a proposed next step.
        </p>
        <Link
          href="mailto:hello@intellogi.com"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          hello@intellogi.com
        </Link>
      </div>
    </section>
  );
}
