import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

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
    default: "Intellogi Technologies — Technology for large programmes",
    template: "%s · Intellogi Technologies",
  },
  description:
    "Intellogi is the technology function for large programmes: one accountable partner from the requirement to the running system, then a planned transfer.",
  openGraph: {
    title: "Intellogi Technologies",
    description:
      "The technology function for large programmes — from the requirement to the running system.",
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
      className={`${geist.variable} ${syne.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
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
