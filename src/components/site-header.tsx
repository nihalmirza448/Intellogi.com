"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { BrandMark } from "@/components/brand-mark";

const nav = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="theme-dark fixed inset-x-0 top-0 z-50">
      <div className="relative z-50 flex items-center gap-4 border-b border-border bg-[var(--ground)] px-[var(--site-gutter)] py-3">
        <Link
          href="/"
          className="site-link flex min-w-0 items-center gap-3 text-sm font-semibold tracking-tight text-foreground"
        >
          <BrandMark size={34} priority />
          <span className="truncate text-base font-normal tracking-tight">Intellogi Technologies</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-current={item.href.startsWith("/#") ? undefined : pathname === item.href || pathname.startsWith(`${item.href}/`) ? "true" : undefined}
              className="site-nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="site-btn site-btn-primary site-link ml-6 hidden no-underline md:inline-flex"
        >
          Start a conversation
        </Link>

        <button
          type="button"
          className="ml-auto inline-flex size-11 items-center justify-center text-foreground md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-0 z-40 flex flex-col justify-end bg-[var(--ground)] px-[var(--site-gutter)] pb-10 pt-24 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-link py-2 text-4xl font-normal tracking-tight text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contact"
            className="site-btn site-btn-primary site-link mt-8 w-fit no-underline"
            onClick={() => setOpen(false)}
          >
            Start a conversation
          </Link>
        </div>
      ) : null}
    </header>
  );
}
