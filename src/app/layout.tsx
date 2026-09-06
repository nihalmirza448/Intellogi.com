import type { Metadata } from "next";
import { Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intellogi.com"),
  title: {
    default: "Intellogi Technologies — Systems your team can run",
    template: "%s · Intellogi Technologies",
  },
  description:
    "Intellogi Technologies designs and ships web platforms, data systems, and automations for teams that need reliability — product engineering, integrations, and advisory.",
  openGraph: {
    title: "Intellogi Technologies",
    description:
      "Web platforms, data systems, and integrations — built to run, not just to demo.",
    url: "https://intellogi.com",
    siteName: "Intellogi Technologies",
    locale: "en_US",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <a href="#main" className="skip-link site-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
