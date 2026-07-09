import type React from "react";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { LoaderScreen } from "@/components/squads/loader";
import "./globals.css";

const SITE_URL = "https://entrypointlabs.xyz";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111113",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Entrypoint Labs",
    default: "Entrypoint Labs — Products and tools for the onchain economy",
  },
  description:
    "Entrypoint Labs is a product R&D lab building for the onchain economy: Xend, a checking account for the internet; Ultraprop, an on-chain prop trading firm; Cortex, a sovereign memory layer for AI; and Pontoon, a local TON blockchain sandbox.",
  keywords: [
    "onchain economy",
    "product R&D lab",
    "crypto product studio",
    "checking account for the internet",
    "stablecoin payments app",
    "on-chain prop trading firm",
    "funded trading account crypto",
    "sovereign AI memory layer",
    "encrypted memory for AI agents",
    "TON blockchain sandbox",
    "TON developer tools",
    "Xend",
    "Ultraprop",
    "Cortex",
    "Pontoon",
    "Entrypoint Labs",
  ],
  applicationName: "Entrypoint Labs",
  authors: [{ name: "Entrypoint Labs" }],
  creator: "Entrypoint Labs",
  publisher: "Entrypoint Labs",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Entrypoint Labs",
    title: "Entrypoint Labs — Products and tools for the onchain economy",
    description:
      "A product R&D lab building consumer payments, onchain markets, AI memory and developer tools on open networks.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_0xGifted",
    creator: "@_0xGifted",
    title: "Entrypoint Labs — Products and tools for the onchain economy",
    description:
      "A product R&D lab building consumer payments, onchain markets, AI memory and developer tools on open networks.",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#org`,
      name: "Entrypoint Labs",
      url: SITE_URL,
      logo: `${SITE_URL}/logos/entrypoint-icon-1024.png`,
      description:
        "A product research and development lab building financial and developer software on open networks.",
      sameAs: [
        "https://x.com/_0xGifted",
        "https://github.com/EntrypointLabs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Entrypoint Labs",
      description:
        "Products and tools for the onchain economy — consumer payments, onchain markets, AI memory and developer tools.",
      publisher: { "@id": `${SITE_URL}#org` },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}#products`,
      name: "Products by Entrypoint Labs",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Xend",
          url: "https://xend.global",
          description:
            "A checking account for the internet — hold dollars, send to anyone by username in seconds for cents.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ultraprop",
          url: "https://ultraprop.xyz",
          description:
            "An on-chain prop trading firm — prove your edge in simulation against live markets and earn a funded account.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cortex",
          url: "https://www.usecortexai.xyz",
          description:
            "A sovereign, encrypted memory layer for AI — durable memory you own, shared selectively with agents.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Pontoon",
          description:
            "A local TON blockchain sandbox with a desktop inspection GUI — transaction trees, TVM traces and time control.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={<LoaderScreen />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
