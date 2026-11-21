import type { Metadata } from "next";

import { BackedBy } from "@/components/squads/backed-by";
import { ArrowRight } from "@/components/squads/brand";
import { Loader } from "@/components/squads/loader";
import { Nav } from "@/components/squads/nav";
import { SiteFooter } from "@/components/squads/site-footer";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Entrypoint Labs is a product R&D lab building for the onchain economy — the team behind PRYDD, OpenFutures, Cortex and Pontoon.",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "Company | Entrypoint Labs",
    description:
      "Meet the R&D lab building consumer payments, onchain markets, AI memory and developer tools on open networks.",
    url: "https://entrypointlabs.xyz/company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@entrypointlabs",
    title: "Company | Entrypoint Labs",
    description:
      "Meet the R&D lab building consumer payments, onchain markets, AI memory and developer tools on open networks.",
  },
};

const PRODUCTS = [
  {
    name: "PRYDD",
    desc: "One app for everyday global money: hold dollars, send by username.",
    href: "https://prydd.co",
  },
  {
    name: "OpenFutures",
    desc: "Perps across every venue: best fill, or a funded account.",
    href: "https://www.openfutures.xyz",
  },
  {
    name: "Cortex",
    desc: "A sovereign, encrypted memory layer for AI.",
    href: "https://www.usecortexai.xyz",
  },
  {
    name: "Pontoon",
    desc: "A local TON blockchain sandbox with a desktop inspection GUI.",
    href: "https://pontoon.entrypointlabs.xyz/",
  },
];

const VALUES = [
  {
    n: "01",
    title: "Ship real products",
    body: "Research has to survive contact with real users. If it doesn't ship, it doesn't count.",
  },
  {
    n: "02",
    title: "Own the whole stack",
    body: "Design, protocol, application, and infrastructure sit under one roof, so a product can move as fast as the problem requires.",
  },
  {
    n: "03",
    title: "Open by default",
    body: "We build on open networks, and open source the parts of the stack that make the ecosystem stronger — not just our own product.",
  },
];

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Loader />
      <Nav />
      <main id="content">
        <section className="ep-wrap grid items-start gap-12 pt-32 lg:grid-cols-2 lg:gap-20 lg:pt-40">
          <div>
            <p className="ep-eyebrow">The lab</p>
            <h1 className="ep-display mt-4 text-[40px] sm:text-[52px] lg:text-[60px]">
              An R&amp;D lab for the onchain economy.
            </h1>
            <p className="mt-6 max-w-[36rem] text-[17px] leading-7 text-[#0a0a0a] sm:text-[18px] sm:leading-8">
              Entrypoint Labs is a small product research and development lab. We
              design, build, and operate financial and developer software on open
              networks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://prydd.co/litepaper.pdf"
                target="_blank"
                rel="noreferrer"
                className="ep-btn ep-btn-primary"
              >
                Read the litepaper
                <ArrowRight size={14} />
              </a>
              <a
                href="https://x.com/entrypointlabs"
                target="_blank"
                rel="noreferrer"
                className="ep-btn ep-btn-secondary"
              >
                Follow on X
              </a>
            </div>
          </div>

          <div className="border-y border-[#d5d9e2] lg:mt-8">
            {PRODUCTS.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-6 border-b border-[#d5d9e2] py-5 last:border-b-0"
              >
                <span>
                  <span className="block text-[16px] font-medium tracking-[-0.015em] text-[#0a0a0a]">
                    {product.name}
                  </span>
                  <span className="mt-1 block text-[14px] leading-5 text-[#0a0a0a]/62">
                    {product.desc}
                  </span>
                </span>
                <ArrowRight
                  size={16}
                  className="mt-1 shrink-0 text-[#0a0a0a]/70 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </section>

        <section className="ep-wrap py-20 lg:py-28">
          <h2 className="ep-h2 text-center text-[36px] sm:text-[44px]">How we work</h2>
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {VALUES.map((value) => (
              <div key={value.n}>
                <p
                  className="text-[12px] tracking-[0.14em] text-[#0a0a0a]/55"
                  style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
                >
                  {value.n}
                </p>
                <h3 className="mt-3 text-[18px] font-medium tracking-[-0.015em] text-[#0a0a0a]">
                  {value.title}
                </h3>
                <p className="mt-3 text-[15px] leading-6 text-[#0a0a0a]/70">{value.body}</p>
              </div>
            ))}
          </div>
        </section>

        <BackedBy />

        <section className="ep-wrap pb-16 lg:pb-24">
          <div className="rounded-[22px] bg-[#f6f5f3] px-8 py-10 ring-1 ring-black/[0.04] lg:px-14 lg:py-14">
            <p className="max-w-[18ch] text-[28px] font-medium leading-[1.15] tracking-[-0.025em] text-[#0a0a0a] sm:text-[32px]">
              Building for the open economy.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
              <a
                href="https://prydd.co/litepaper.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0a0a0a] hover:opacity-60"
              >
                Read the litepaper
                <ArrowRight size={14} />
              </a>
              <a
                href="https://x.com/entrypointlabs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0a0a0a] hover:opacity-60"
              >
                Follow along on X
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
