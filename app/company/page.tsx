import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";

import { BackedBy } from "@/components/squads/backed-by";
import { Loader } from "@/components/squads/loader";
import { Nav } from "@/components/squads/nav";
import { SiteFooter } from "@/components/squads/site-footer";
import {
  CortexMark,
  PontoonMark,
  UltrapropMark,
  XendMark,
} from "@/components/squads/brand";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Company",
  description:
    "Entrypoint Labs is a product R&D lab building for the onchain economy — the team behind Xend, Ultraprop, Cortex and Pontoon.",
  alternates: {
    canonical: "/company",
  },
};

const CONTAINER = "mx-auto w-[1150px] max-w-full px-6 lg:px-0";

const HEADLINE_LINES = ["An R&D lab for", "the onchain economy"];

const PRODUCTS = [
  {
    name: "Xend",
    desc: "A checking account for the internet, built for everyday life.",
    href: "https://xend.global",
    Mark: XendMark,
  },
  {
    name: "Ultraprop",
    desc: "An on-chain prop firm: prove your edge, earn a funded account.",
    href: "https://ultraprop.xyz",
    Mark: UltrapropMark,
  },
  {
    name: "Cortex",
    desc: "A sovereign, encrypted memory layer for AI.",
    href: "https://www.usecortexai.xyz",
    Mark: CortexMark,
  },
  {
    name: "Pontoon",
    desc: "A local TON blockchain sandbox with a desktop inspection GUI.",
    href: "https://pontoon.entrypointlabs.xyz/",
    Mark: PontoonMark,
  },
];

const VALUES = [
  {
    title: "Ship real products",
    body: "Research has to survive contact with real users. If it doesn't ship, it doesn't count.",
  },
  {
    title: "Own the whole stack",
    body: "Design, protocol, application, and infrastructure sit under one roof, so a product can move as fast as the problem requires.",
  },
  {
    title: "Open by default",
    body: "We build on open networks, and open source the parts of the stack that make the ecosystem stronger — not just our own product.",
  },
];

const CLOSING_LINKS = [
  { label: "Read the litepaper ↗", href: "https://xend.global/litepaper.pdf" },
  { label: "Follow along on X ↗", href: "https://x.com/_0xGifted" },
];

function CompanyHero() {
  return (
    <section className={`${CONTAINER} pt-[160px] lg:pt-[200px]`}>
      <p className="text-[12px] font-medium tracking-[0.16em] text-white/40">
        COMPANY
      </p>
      <h1
        className="mt-5 max-w-[700px] font-medium tracking-[-2px] text-[40px] leading-[44px] lg:tracking-[-2.8px] lg:text-[56px] lg:leading-[61.6px]"
        style={{ color: "#9A9AA0" }}
      >
        {HEADLINE_LINES.map((line, i) => (
          <span key={line}>
            <span className="lg:inline-block lg:whitespace-nowrap">{line}</span>
            {i < HEADLINE_LINES.length - 1 && (
              <>
                {" "}
                <br className="hidden lg:inline" />
              </>
            )}
          </span>
        ))}
      </h1>
      <p className="mt-9 max-w-[560px] text-[20px] leading-[28px] text-white/55">
        Entrypoint Labs is a small product research and development lab. We
        design, build, and operate financial and developer software on open
        networks.
      </p>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section className={`${CONTAINER} mt-24 lg:mt-40`}>
      <h2 className="text-[32px] font-medium leading-[35.2px] text-white">
        What we build
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-2 lg:gap-5">
        {PRODUCTS.map(({ name, desc, href, Mark }) => {
          const external = href.startsWith("http");
          return (
            <a
              key={name}
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="block rounded-[18px] bg-[#0E0E0F] p-8 transition-colors duration-150 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-medium leading-[26.4px] text-white">
                  {name}
                </h3>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-white">
                  <Mark size={24} />
                </span>
              </div>
              <p className="mt-3 text-base leading-[22.4px] text-white/55">
                {desc}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className={`${CONTAINER} mt-24 lg:mt-40`}>
      <h2 className="text-[32px] font-medium leading-[35.2px] text-white">
        How we work
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-3 lg:gap-12">
        {VALUES.map(({ title, body }) => (
          <div key={title}>
            <h3 className="text-[18px] font-medium text-white">{title}</h3>
            <p className="mt-3 text-base leading-[22.4px] text-white/55">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClosingStrip() {
  return (
    <section className={`${CONTAINER} mt-24 lg:mt-40`}>
      <div className="rounded-[18px] bg-[#0E0E0F] p-8 lg:p-16">
        <p className="max-w-[640px] text-[24px] font-medium leading-[30px] text-white lg:text-[32px] lg:leading-[38px]">
          Building for the open economy.
        </p>
        <div className="mt-8 flex flex-col gap-4 lg:mt-10 lg:flex-row lg:items-center lg:gap-10">
          {CLOSING_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-base text-white/70 transition-colors duration-150 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div
      className={`${inter.variable} ${pixelify.variable} sq-canvas relative min-h-screen overflow-x-clip`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <Loader />
      <Nav />
      <main>
        <CompanyHero />
        <WhatWeBuild />
        <HowWeWork />
        <BackedBy className="mt-24 lg:mt-40" />
        <ClosingStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
