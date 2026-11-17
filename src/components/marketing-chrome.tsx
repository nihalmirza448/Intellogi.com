"use client";

import { useEffect, type ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FieldRoot } from "@/components/spatial-field";

export function MarketingChrome({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("is-marketing");
    return () => {
      document.documentElement.classList.remove("is-marketing");
    };
  }, []);

  return (
    <FieldRoot>
      <SiteHeader />
      <main id="main" className="relative z-10 flex flex-1 flex-col">
        {children}
      </main>
      <SiteFooter />
    </FieldRoot>
  );
}
