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
    "Entrypoint Labs is a product R&D lab building for the onchain economy: PRYDD, one app for everyday global money; OpenFutures, perps across every venue; Cortex, a sovereign memory layer for AI; and Pontoon, a local TON blockchain sandbox.",
  keywords: [
    "Entrypoint Labs",
    "onchain economy",
    "crypto product studio",
    "blockchain product lab",
    "PRYDD dollar account",
    "checking account for the internet",
    "stablecoin payments app",
    "OpenFutures perpetual futures",
    "on-chain prop trading firm",
    "funded trading account crypto",
    "Cortex AI memory",
    "sovereign AI memory layer",
    "encrypted memory for AI agents",
    "Pontoon TON sandbox",
    "TON blockchain sandbox",
    "TON developer tools",
    "web3 products",
    "decentralized finance tools",
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
    site: "@entrypointlabs",
    creator: "@entrypointlabs",
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
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/entrypoint-icon-1024.png`,
        width: 1024,
        height: 1024,
      },
      description:
        "A product research and development lab building financial and developer software on open networks.",
      sameAs: [
        "https://x.com/entrypointlabs",
        "https://github.com/EntrypointLabs",
      ],
      knowsAbout: [
        "blockchain",
        "stablecoin payments",
        "prop trading",
        "AI memory",
        "TON blockchain",
        "developer tools",
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
          item: {
            "@type": "SoftwareApplication",
            name: "PRYDD",
            url: "https://prydd.co",
            applicationCategory: "FinanceApplication",
            description:
              "A dollar account for everyday life — hold dollars, send to anyone by username in seconds for cents.",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "OpenFutures",
            url: "https://www.openfutures.xyz",
            applicationCategory: "FinanceApplication",
            description:
              "Perps across every venue — compare price, fees and depth, or pass an evaluation and trade vault capital.",
            operatingSystem: "Web",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            name: "Cortex",
            url: "https://www.usecortexai.xyz",
            applicationCategory: "DeveloperApplication",
            description:
              "A sovereign, encrypted memory layer for AI — durable memory you own, shared selectively with agents.",
            operatingSystem: "Web",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "SoftwareApplication",
            name: "Pontoon",
            url: "https://pontoon.entrypointlabs.xyz/",
            applicationCategory: "DeveloperApplication",
            description:
              "A local TON blockchain sandbox with a desktop inspection GUI — transaction trees, TVM traces and time control.",
            operatingSystem: "Web, macOS, Windows, Linux",
          },
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
