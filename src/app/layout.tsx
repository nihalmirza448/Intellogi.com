import type { Metadata } from "next";
import { DM_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import {
  organizationJsonLd,
  siteDescription,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/lib/site";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Intellogi Technologies | Technology for government, UN and humanitarian programmes",
    template: "%s · Intellogi Technologies",
  },
  description: siteDescription,
  applicationName: siteName,
  openGraph: {
    title: "Intellogi Technologies",
    description:
      "The technology partner for government, UN and humanitarian programmes — from the requirement to the running system, then a planned handover.",
    url: siteUrl,
    siteName,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/intellogi-logo.png",
        width: 1024,
        height: 395,
        alt: "Intellogi Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intellogi Technologies",
    description:
      "The technology partner for government, UN and humanitarian programmes.",
    images: ["/intellogi-logo.png"],
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
      className={`${instrument.variable} ${dmMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <a href="#main" className="skip-link site-link">
          Skip to content
        </a>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        {children}
      </body>
    </html>
  );
}
