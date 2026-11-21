"use client";

import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  CortexMark,
  Logomark,
  OpenFuturesMark,
  PontoonMark,
  PryddMark,
  Wordmark,
} from "./brand";

type ProductIconKind = "prydd" | "openfutures" | "cortex" | "pontoon";

type ProductItem = {
  name: string;
  desc: string;
  icon: ProductIconKind;
  href: string;
};

const PRODUCTS: ProductItem[] = [
  {
    name: "PRYDD",
    desc: "Hold dollars. Send by username.",
    icon: "prydd",
    href: "https://prydd.co",
  },
  {
    name: "OpenFutures",
    desc: "Perps across every venue.",
    icon: "openfutures",
    href: "https://www.openfutures.xyz",
  },
  {
    name: "Cortex",
    desc: "A sovereign memory layer for AI.",
    icon: "cortex",
    href: "https://www.usecortexai.xyz",
  },
  {
    name: "Pontoon",
    desc: "A local TON sandbox and inspector.",
    icon: "pontoon",
    href: "https://pontoon.entrypointlabs.xyz/",
  },
];

const RESOURCES: { label: string; href: string }[] = [
  { label: "Docs", href: "https://prydd.co/litepaper.pdf" },
  { label: "Github", href: "https://github.com/EntrypointLabs" },
  { label: "X", href: "https://x.com/entrypointlabs" },
];

const LITEPAPER = "https://prydd.co/litepaper.pdf";

function ProductGlyph({ icon, size }: { icon: ProductIconKind; size: number }) {
  if (icon === "prydd") return <PryddMark size={size} />;
  if (icon === "openfutures") return <OpenFuturesMark size={size} />;
  if (icon === "cortex") return <CortexMark size={size} />;
  return <PontoonMark size={size} />;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width={9}
      height={6}
      viewBox="0 0 9 6"
      fill="none"
      aria-hidden
      className={`transition-transform duration-150 ${open ? "-rotate-180" : ""}`}
    >
      <path
        d="M1 1.2 4.5 4.8 8 1.2"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 3.5 12.5 12.5M12.5 3.5 3.5 12.5"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

function externalProps(href: string) {
  return href.startsWith("http")
    ? { target: "_blank" as const, rel: "noreferrer" }
    : {};
}

function NavDropdown({
  label,
  panelClassName,
  children,
}: {
  label: string;
  panelClassName?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const handleEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div
      className="relative flex h-16 items-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          handleLeave();
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[13px] font-medium text-[#0a0a0a] transition-colors duration-150 hover:bg-[#f6f5f3]"
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      <div
        className={`absolute top-[calc(100%-6px)] origin-top rounded-[14px] border border-[#d5d9e2] bg-white p-2 shadow-[0_18px_50px_-28px_rgba(10,10,10,0.45)] transition duration-150 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        } ${panelClassName ?? ""}`}
      >
        {children}
      </div>
    </div>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="pointer-events-none absolute inset-0 -z-10 border-b border-[#d5d9e2]/80 bg-white/85"
        style={{ backdropFilter: "blur(12px)" }}
        aria-hidden
      />
      <div className="ep-wrap flex h-16 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2.5 text-[#0a0a0a]">
          <Logomark size={22} />
          <Wordmark className="hidden text-[13px] sm:inline" />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
          <NavDropdown label="Products" panelClassName="left-0 w-[280px]">
            <p className="px-2.5 pb-1 pt-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#0a0a0a]/55">
              Products
            </p>
            <div className="flex flex-col">
              {PRODUCTS.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  {...externalProps(product.href)}
                  className="group flex items-start gap-3 rounded-[10px] px-2.5 py-2 transition-colors duration-150 hover:bg-[#f6f5f3]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#0a0a0a]">
                    <ProductGlyph icon={product.icon} size={18} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[14px] font-medium tracking-[-0.011em] text-[#0a0a0a]">
                      {product.name}
                    </span>
                    <span className="mt-0.5 text-[13px] leading-[18px] text-[#0a0a0a]/60">
                      {product.desc}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown label="Resources" panelClassName="left-0 w-[180px]">
            <p className="px-2.5 pb-1 pt-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#0a0a0a]/55">
              Resources
            </p>
            {RESOURCES.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...externalProps(item.href)}
                className="flex h-9 items-center rounded-[10px] px-2.5 text-[14px] font-medium text-[#0a0a0a] transition-colors duration-150 hover:bg-[#f6f5f3]"
              >
                {item.label}
              </a>
            ))}
          </NavDropdown>

          <a
            href="/company"
            className="rounded-full px-3 py-1.5 text-[13px] font-medium text-[#0a0a0a] transition-colors duration-150 hover:bg-[#f6f5f3]"
          >
            Company
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LITEPAPER}
            target="_blank"
            rel="noreferrer"
            className="ep-btn ep-btn-primary hidden sm:inline-flex"
          >
            Protocol
            <ArrowRight size={14} />
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f1ef] text-[#0a0a0a] lg:hidden"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white lg:hidden">
          <div className="ep-wrap flex h-16 shrink-0 items-center justify-between">
            <a href="/" className="text-[#0a0a0a]" onClick={() => setMobileOpen(false)}>
              <Logomark size={22} />
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f1ef] text-[#0a0a0a]"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="ep-wrap pb-16 pt-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#0a0a0a]/55">
              Products
            </p>
            <div className="mt-3 flex flex-col">
              {PRODUCTS.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  {...externalProps(product.href)}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-[#d5d9e2] py-4 text-[22px] font-medium tracking-[-0.02em] text-[#0a0a0a]"
                >
                  {product.name}
                  <span className="text-[#0a0a0a]">
                    <ProductGlyph icon={product.icon} size={22} />
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.14em] text-[#0a0a0a]/55">
              Resources
            </p>
            <div className="mt-3 flex flex-col">
              {RESOURCES.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...externalProps(item.href)}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center border-b border-[#d5d9e2] py-4 text-[22px] font-medium tracking-[-0.02em] text-[#0a0a0a]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="/company"
                onClick={() => setMobileOpen(false)}
                className="text-[16px] font-medium text-[#0a0a0a]"
              >
                Company
              </a>
              <a
                href="/careers"
                onClick={() => setMobileOpen(false)}
                className="text-[16px] font-medium text-[#0a0a0a]"
              >
                Careers
              </a>
            </div>

            <a
              href={LITEPAPER}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="ep-btn ep-btn-primary mt-10"
            >
              Protocol
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
