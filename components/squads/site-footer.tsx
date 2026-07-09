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
      { label: "Xend", href: "https://xend.global" },
      { label: "Ultraprop", href: "https://ultraprop.xyz" },
      { label: "Cortex", href: "https://www.usecortexai.xyz" },
      { label: "Pontoon" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "https://xend.global/litepaper.pdf" },
      { label: "Github", href: "https://github.com/EntrypointLabs" },
      { label: "X", href: "https://x.com/_0xGifted", icon: "x" },
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
    links: [{ label: "Terms of Service" }, { label: "Privacy Policy" }],
  },
];

const COLUMN_X = [467, 657, 848, 1038];

function FooterLink({ label, href = "#", icon }: FooterLinkItem) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={icon === "x" ? "X (Twitter)" : undefined}
      className="inline-flex w-fit items-center whitespace-nowrap text-base leading-[22.4px] text-white/50 transition-colors duration-150 hover:text-white"
    >
      {icon === "x" ? <XLogo size={16} /> : label}
    </a>
  );
}

function LegalText({ className = "" }: { className?: string }) {
  return (
    <>
      <p className="text-xs leading-4 text-white/35">All rights reserved.</p>
      <p className={`text-xs leading-4 text-white/35 ${className}`}>
        Entrypoint Labs is a software company.
        <br />
        It is not a bank and does not custody customer funds.
      </p>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-[195px] border-t border-white/[0.08] text-white">
      <div className="relative mx-auto w-[1150px] max-w-full lg:h-[313px]">
        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="absolute left-0 top-[56px] flex items-center gap-3">
            <Logomark size={28} />
            <Wordmark className="text-lg" />
          </div>

          {FOOTER_COLUMNS.map((column, i) => (
            <div
              key={column.title}
              className="absolute top-[56px]"
              style={{ left: COLUMN_X[i] }}
            >
              <h4 className="text-base font-medium text-white">
                {column.title}
              </h4>
              <div className="mt-4 flex flex-col gap-[14px]">
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

          <div className="absolute bottom-[56px] left-0 flex w-fit flex-col gap-[22px]">
            <LegalText />
          </div>
        </div>

        {/* Mobile */}
        <div className="px-6 py-12 lg:hidden">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h4 className="text-base font-medium text-white">
                  {column.title}
                </h4>
                <div className="mt-4 flex flex-col gap-[14px]">
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

          <div className="mt-12 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Logomark size={28} />
              <Wordmark className="text-lg" />
            </div>
            <div className="flex flex-col gap-[14px]">
              <LegalText />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
