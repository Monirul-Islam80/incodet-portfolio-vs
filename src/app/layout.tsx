import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Incodet - SaaS Development Agency",
  description:
    "Incodet is a SaaS development agency that builds software products to solve real problems. From MVPs to enterprise-grade platforms, we help businesses turn ideas into scalable solutions.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  // If your zip included a site.webmanifest file:
  manifest: "/site.webmanifest",
    keywords: [
    "SaaS development",
    "web development",
    "mobile apps",
    "software agency",
    "custom software",
    "MVP development",
    "startup development",
  ],
  authors: [{ name: "Incodet" }],
  openGraph: {
    title: "Incodet - SaaS Development Agency",
    description:
      "We build software that solves real problems. From idea to launch, we help businesses turn concepts into scalable products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Incodet - SaaS Development Agency",
    description:
      "We build software that solves real problems. From idea to launch, we help businesses turn concepts into scalable products.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
