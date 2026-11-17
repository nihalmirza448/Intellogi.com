import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

const links = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/data-deletion", label: "Data deletion" },
] as const;

export function SiteFooter() {
  return (
    <footer className="theme-dark relative z-10 border-t border-border px-[var(--site-gutter)] py-16">
      <div className="site-shell flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark size={36} />
            <p className="text-base tracking-tight text-foreground">
              Intellogi Technologies
            </p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-secondary">
            The technology partner for government, UN and humanitarian
            programmes — from the requirement to the running system.
          </p>
          <p className="mt-4 font-mono text-[0.8125rem] uppercase tracking-[0.03em] text-text-muted">
            © {new Date().getFullYear()} Intellogi Technologies Limited · Company no. 15973922
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
