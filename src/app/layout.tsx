import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Incodet | Secure SaaS Development & Public Sector Systems",
  description:
    "Incodet designs and builds secure, compliant SaaS platforms and custom system architectures for enterprise and government workloads. From secure MVPs to resilient public sector infrastructures.",
  metadataBase: new URL("https://incodet.com"), // Replace with your actual production domain
  verification: {
    google: "DTPA9sMu_1pAUpHA-agHQsO3jIfvoA1FxQTiCdQHl-U",
  },
  icons: {
    icon: [

  { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  keywords: ["Incodet",
    "incodet.com",
    "InCodet"
    ,
    "INCODET",
    "Government software development",
    "Secure SaaS architecture",
    "Public sector systems engineering",
    "Compliant web applications",
    "Enterprise database design",
    "Custom system development",
    
  ],
  authors: [{ name: "Incodet" }],
  openGraph: {
    title: "Incodet | Secure SaaS Development & Public Sector Systems",
    description:
      "Secure, resilient, and compliant system architectures tailored for enterprise and public sector workloads. Discover our engineering frameworks.",
    type: "website",
    locale: "en_US",
    url: "https://incodet.com",
    siteName: "Incodet",
    images: [
      {
        url: "/og-image.webp", 
        width: 1200,
        height: 630,
        alt: "Incodet - Secure Systems Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Incodet | Secure SaaS Development & Public Sector Systems",
    description:
      "Secure, resilient, and compliant system architectures tailored for enterprise and public sector workloads.",
    images: ["/og-image.webp"],
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
              <Preloader/>
      <Navbar />
        {children}
      </body>
    </html>
  );
}