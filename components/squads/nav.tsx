"use client";

import { useEffect, useRef, useState } from "react";

import {
  FluxGlyph,
  Logomark,
  MeridianGlyph,
  PixelMesh,
  Wordmark,
} from "./brand";

type ProductIconKind = "meridian" | "flux" | "logomark" | "pixelmesh";

type ProductItem = {
  name: string;
  desc: string;
  icon: ProductIconKind;
};

const PRODUCTS: ProductItem[] = [
  {
    name: "Meridian",
    desc: "A business account to hold and move money.",
    icon: "meridian",
  },
  {
    name: "Flux",
    desc: "A personal money app for digital dollars and tokens.",
    icon: "flux",
  },
  {
    name: "Multisig",
    desc: "A multisig platform to protect onchain treasuries.",
    icon: "logomark",
  },
  {
    name: "Mesh",
    desc: "An open API for payouts, cards and returns.",
    icon: "pixelmesh",
  },
];

const RESOURCES = ["Blog", "Docs", "Github", "X"];

function ProductGlyph({
  icon,
  size,
}: {
  icon: ProductIconKind;
  size: number;
}) {
  if (icon === "pixelmesh") {
    return (
      <PixelMesh
        className={
          size >= 24 ? "text-[20px] leading-none" : "text-[13px] leading-none"
        }
      />
    );
  }
  if (icon === "meridian") return <MeridianGlyph size={size} />;
  if (icon === "flux") return <FluxGlyph size={size} />;
  return <Logomark size={size} />;
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
        d="M1 1L4.5 4.5L8 1"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 4L16 16M16 4L4 16"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  );
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
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    // Wrapper spans the full 80px bar so the panel anchors to the header's
    // bottom edge (overlapping it by 5px) instead of hanging off the trigger row.
    <div
      className="relative flex h-20 items-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        aria-expanded={open}
        className={`flex items-center gap-1.5 text-[16px] leading-[22.4px] font-medium text-white transition-colors duration-150 ${
          open ? "" : "hover:text-white/70"
        }`}
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      <div
        className={`absolute top-full -mt-[5px] origin-top rounded-[14px] border border-white/5 bg-[#161618] shadow-[0_20px_44px_-12px_rgba(0,0,0,0.55)] transition-all duration-150 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-1 scale-95 opacity-0"
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
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-50 w-full text-white">
      <div className="hidden h-20 w-full items-center bg-[var(--sq-nav-bg)] backdrop-blur-[12px] lg:flex">
        <a href="#" className="flex items-center gap-2.5 pl-[110px]">
          <Logomark size={24} />
          <Wordmark className="text-[15px]" />
        </a>

        <nav className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-12">
          {/* -left-[22px] + p-3 panel + px-2.5 rows = icon column flush with trigger text */}
          <NavDropdown
            label="Products"
            panelClassName="-left-[22px] w-[246px] p-3"
          >
            <div className="flex flex-col">
              {PRODUCTS.map((product) => (
                <a
                  key={product.name}
                  href="#"
                  className="flex items-start gap-3 rounded-[8px] px-2.5 py-2 transition-colors duration-150 hover:bg-white/5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-white">
                    <ProductGlyph icon={product.icon} size={20} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[16px] font-medium text-white">
                      {product.name}
                    </span>
                    <span className="mt-1 text-[13px] leading-[18px] text-white/50">
                      {product.desc}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown
            label="Resources"
            panelClassName="-left-[20px] w-[160px] p-2"
          >
            <div className="flex flex-col">
              {RESOURCES.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-[8px] px-3 py-2.5 text-[15px] text-white/70 transition-colors duration-150 hover:bg-white/5 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </NavDropdown>

          <a
            href="#"
            className="text-[16px] leading-[22.4px] font-medium text-white transition-colors duration-150 hover:text-white/70"
          >
            Protocol
          </a>
          <a
            href="#"
            className="text-[16px] leading-[22.4px] font-medium text-white transition-colors duration-150 hover:text-white/70"
          >
            Company
          </a>
        </nav>
      </div>

      <div className="flex h-16 w-full items-center justify-between bg-[var(--sq-nav-bg)] px-6 backdrop-blur-[12px] lg:hidden">
        <a href="#" className="flex items-center">
          <Logomark size={24} />
        </a>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="flex h-[14px] w-[18px] flex-col justify-between"
        >
          <span className="block h-[2px] w-full bg-white" />
          <span className="block h-[2px] w-full bg-white" />
          <span className="block h-[2px] w-full bg-white" />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#0E0E0F] px-6 lg:hidden">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <Logomark size={24} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="text-white"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mt-6 flex flex-col">
            <p className="text-[14px] text-white/40">Products</p>
            <div className="mt-4 flex flex-col">
              {PRODUCTS.map((product) => (
                <a
                  key={product.name}
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 items-center justify-between text-[24px] font-medium text-white"
                >
                  {product.name}
                  <span className="flex items-center text-white">
                    <ProductGlyph icon={product.icon} size={24} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col">
            <p className="text-[14px] text-white/40">Resources</p>
            <div className="mt-4 flex flex-col">
              {RESOURCES.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 items-center text-[24px] font-medium text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-4 pt-8 pb-[120px]">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-[16px] font-medium text-white"
            >
              Protocol
            </a>
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-[16px] font-medium text-white"
            >
              Company
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
