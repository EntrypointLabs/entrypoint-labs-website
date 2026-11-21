import { Logomark, Wordmark, XLogo } from "./brand";

type FooterLinkItem = {
  label: string;
  href?: string;
  icon?: "x";
};

type FooterColumn = {
  title: string;
  links: FooterLinkItem[];
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "PRYDD", href: "https://prydd.co" },
      { label: "OpenFutures", href: "https://www.openfutures.xyz" },
      { label: "Cortex", href: "https://www.usecortexai.xyz" },
      { label: "Pontoon", href: "https://pontoon.entrypointlabs.xyz/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "https://prydd.co/litepaper.pdf" },
      { label: "Github", href: "https://github.com/EntrypointLabs" },
      { label: "X", href: "https://x.com/entrypointlabs", icon: "x" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
    ],
  },
];

function FooterLink({ label, href = "#", icon }: FooterLinkItem) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={icon === "x" ? "X (Twitter)" : undefined}
      className="inline-flex w-fit items-center text-[14px] leading-5 text-[#0a0a0a] transition-opacity duration-150 hover:opacity-60"
    >
      {icon === "x" ? <XLogo size={14} /> : label}
    </a>
  );
}

function LegalText() {
  return (
    <>
      <p className="text-[12px] leading-4 text-[#0a0a0a]/60">All rights reserved.</p>
      <p className="text-[12px] leading-[18px] text-[#0a0a0a]/60">
        Entrypoint Labs is a software company. It is not a bank and does not
        custody customer funds.
      </p>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d5d9e2] text-[#0a0a0a]">
      <div className="ep-wrap grid gap-12 py-12 lg:grid-cols-[240px_1fr] lg:gap-16 lg:py-16">
        <div className="flex flex-col gap-5 lg:border-r lg:border-[#d5d9e2] lg:pr-10">
          <a href="/" className="flex items-center gap-2.5 text-[#0a0a0a]">
            <Logomark size={22} />
            <Wordmark className="text-[13px]" />
          </a>
          <div className="flex max-w-[240px] flex-col gap-3">
            <LegalText />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="text-[14px] font-medium text-[#0a0a0a]">
                {column.title}
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <FooterLink
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    icon={link.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
