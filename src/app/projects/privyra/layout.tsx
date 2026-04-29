import type { Metadata } from "next";
import { privyraMeta } from "@/data/privyra";

/** Standalone product site — do not inherit root `title.template` (Intellogi suffix). */
export const metadata: Metadata = {
  title: { absolute: `${privyraMeta.name} — ${privyraMeta.tagline}` },
  description: privyraMeta.description,
  openGraph: {
    title: `${privyraMeta.name} — ${privyraMeta.tagline}`,
    description: privyraMeta.description,
  },
};

export default function PrivyraLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
