import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intellogi.com"),
  title: {
    default: "Intellogi — Software for serious operations",
    template: "%s · Intellogi",
  },
  description:
    "Intellogi designs and ships web platforms, data systems, and automations for teams that need reliability — product engineering, integrations, and advisory.",
  openGraph: {
    title: "Intellogi",
    description:
      "Web platforms, data systems, and integrations — built to run, not just to demo.",
    url: "https://intellogi.com",
    siteName: "Intellogi",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="page-grid min-h-full flex flex-col">{children}</body>
    </html>
  );
}
