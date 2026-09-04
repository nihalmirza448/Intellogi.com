import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border px-[var(--site-gutter)] py-16">
      <div className="site-shell flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark size={36} />
            <p className="text-sm font-semibold tracking-[0.16em] uppercase text-foreground">
              Intellogi
            </p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-secondary">
            Platforms, data systems, and integrations for teams that need
            software they can operate — civic, financial, and commercial.
          </p>
          <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-text-muted">
            © {new Date().getFullYear()} Intellogi Technologies
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
