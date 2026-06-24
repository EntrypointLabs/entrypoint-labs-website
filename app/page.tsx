"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const products = [
  {
    name: "Altitude",
    tag: "Business",
    tagColor: "text-blue-400",
    description: "A global business account to save, earn and move money",
    href: "https://squads.xyz/altitude",
    gradient: "from-blue-950/60 to-black",
    border: "border-blue-900/30",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="#60A5FA" strokeWidth="1.5"/>
        <path d="M8 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="#60A5FA" strokeWidth="1.5"/>
        <path d="M4 13h20" stroke="#60A5FA" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Fuse",
    tag: "Personal",
    tagColor: "text-orange-400",
    description: "A personal finance app for stablecoins and tokenized assets",
    href: "https://fusewallet.com",
    gradient: "from-orange-950/60 to-black",
    border: "border-orange-900/30",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#FB923C" strokeWidth="1.5"/>
        <path d="M14 9v5l3 3" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Grid",
    tag: "Developers",
    tagColor: "text-purple-400",
    description: "The stablecoin API for accounts, payments, cards and yield",
    href: "https://squads.xyz/grid",
    gradient: "from-purple-950/60 to-black",
    border: "border-purple-900/30",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="#C084FC" strokeWidth="1.5"/>
        <rect x="16" y="4" width="8" height="8" rx="1.5" stroke="#C084FC" strokeWidth="1.5"/>
        <rect x="4" y="16" width="8" height="8" rx="1.5" stroke="#C084FC" strokeWidth="1.5"/>
        <rect x="16" y="16" width="8" height="8" rx="1.5" stroke="#C084FC" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Squads Multisig",
    tag: "Teams",
    tagColor: "text-green-400",
    description: "A multisig platform to secure and manage Solana assets",
    href: "https://squads.xyz/multisig",
    gradient: "from-green-950/60 to-black",
    border: "border-green-900/30",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="7" y="12" width="14" height="11" rx="2" stroke="#4ADE80" strokeWidth="1.5"/>
        <path d="M10 12V9a4 4 0 0 1 8 0v3" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="17" r="2" fill="#4ADE80"/>
      </svg>
    ),
  },
];

const navProducts = [
  { name: "Altitude", description: "Global business account", href: "https://squads.xyz/altitude" },
  { name: "Fuse", description: "Personal finance app", href: "https://fusewallet.com" },
  { name: "Grid", description: "Stablecoin API", href: "https://squads.xyz/grid" },
  { name: "Squads Multisig", description: "Multisig platform", href: "https://squads.xyz/multisig" },
];

const navResources = [
  { name: "Blog", href: "https://squads.xyz/blog" },
  { name: "Multisig Docs", href: "https://docs.squads.so/main" },
  { name: "Github", href: "https://github.com/Squads-Protocol" },
];

const navCompany = [
  { name: "About", href: "https://squads.xyz/company" },
  { name: "Brand Assets", href: "https://squads.xyz/brand-assets" },
  { name: "Careers", href: "https://squads.xyz/company" },
];

const stats = [
  { value: "$15B+", label: "in assets secured" },
  { value: "500+", label: "organizations" },
  { value: "$5B+", label: "in stablecoin transfers" },
  { value: "150+", label: "countries" },
];

function SquadsLogo() {
  return (
    <a href="https://squads.xyz" className="flex items-center gap-2.5 group">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="6" fill="white"/>
        <path d="M7 10.5C7 8.567 8.567 7 10.5 7H17.5C19.433 7 21 8.567 21 10.5V10.5C21 12.433 19.433 14 17.5 14H10.5C8.567 14 7 15.567 7 17.5V17.5C7 19.433 8.567 21 10.5 21H17.5C19.433 21 21 19.433 21 17.5" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <span className="text-white font-semibold text-lg tracking-tight">Squads</span>
    </a>
  );
}

function NavDropdown({ label, items, description }: { label: string; items: { name: string; description?: string; href: string }[]; description?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-[#888888] hover:text-white transition-colors py-1"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-52 bg-[#111111] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 hover:bg-white/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              <div className="text-sm text-white font-medium">{item.name}</div>
              {item.description && (
                <div className="text-xs text-[#666666] mt-0.5">{item.description}</div>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <SquadsLogo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <NavDropdown label="Products" items={navProducts} />
              <NavDropdown label="Resources" items={navResources} />
              <NavDropdown label="Company" items={navCompany} />
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://app.squads.so"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 bg-white text-black text-sm font-medium px-3.5 py-1.5 rounded-lg hover:bg-white/90 transition-colors"
              >
                Launch App
              </a>
              <button
                className="md:hidden text-white/70 hover:text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/[0.06] bg-black">
            <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
              <div className="py-2">
                <div className="text-xs text-[#555] uppercase tracking-widest mb-2 font-medium">Products</div>
                {navProducts.map((p) => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                    className="block py-2 text-sm text-[#aaa] hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}>
                    {p.name}
                  </a>
                ))}
              </div>
              <div className="py-2 border-t border-white/[0.06]">
                <div className="text-xs text-[#555] uppercase tracking-widest mb-2 font-medium">Resources</div>
                {navResources.map((r) => (
                  <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer"
                    className="block py-2 text-sm text-[#aaa] hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}>
                    {r.name}
                  </a>
                ))}
              </div>
              <div className="py-2 border-t border-white/[0.06]">
                <div className="text-xs text-[#555] uppercase tracking-widest mb-2 font-medium">Company</div>
                {navCompany.map((c) => (
                  <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer"
                    className="block py-2 text-sm text-[#aaa] hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}>
                    {c.name}
                  </a>
                ))}
              </div>
              <div className="pt-3 border-t border-white/[0.06]">
                <a
                  href="https://app.squads.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white text-black text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-5 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-white mb-6">
              Finance Without Legacy Constraints
            </h1>
            <p className="text-[#888888] text-lg sm:text-xl leading-relaxed max-w-2xl">
              Squads builds on open infrastructure, global money and internet capital markets to deliver better financial services to every business, individual and developer.
            </p>
            <p className="mt-4 text-[#555555] text-sm sm:text-base">
              Explore products, programmable smart accounts, multisig, payments, trading and yield APIs.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="pb-24 px-5 lg:px-8 max-w-7xl mx-auto">
          <p className="text-[#555555] text-sm font-medium uppercase tracking-widest mb-8">
            Products and APIs built on stablecoin rails that unlock the benefits of modern money.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br ${product.gradient} border ${product.border} hover:border-white/20 transition-all duration-300 min-h-[200px]`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-white/5 rounded-xl">{product.icon}</div>
                    <span className={`text-xs font-medium ${product.tagColor} bg-white/5 px-2.5 py-1 rounded-full`}>
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{product.description}</p>
                </div>
                <div className="flex items-center gap-1.5 mt-5 text-sm text-[#666666] group-hover:text-white transition-colors">
                  <span>Explore {product.name === "Squads Multisig" ? "Multisig" : product.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Protocol Section */}
        <section className="py-24 px-5 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs text-[#555] uppercase tracking-widest font-medium mb-4">Squads Protocol</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
                The Autonomous Finance Layer for Stablecoin Banking
              </h2>
              <p className="text-[#888888] text-base leading-relaxed mb-6">
                Squads Protocol replaces legacy banking infrastructure and centralized servers with a blockchain-native operating system — delivering programmable payments, 24/7 USD liquidity, competitive yields, and security enforced by deterministic code, not corporate promises.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed mb-8">
                Formally-verified smart accounts that live entirely onchain, governed by code, and secured by Solana&apos;s 1,000+ validators.
              </p>
              <a
                href="https://squads.xyz/protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white border border-white/20 px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                Learn more about the Protocol
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0D0D0D] border border-white/[0.06] rounded-xl p-6">
                  <div className="text-3xl sm:text-4xl font-semibold text-white mb-2">{stat.value}</div>
                  <div className="text-[#666666] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-16 mb-16">
            <div>
              <div className="text-xs text-[#555] uppercase tracking-widest font-medium mb-5">Products</div>
              <ul className="space-y-3">
                {["Altitude", "Fuse", "Grid", "Squads Multisig"].map((name) => (
                  <li key={name}>
                    <a
                      href={`https://squads.xyz/${name === "Squads Multisig" ? "multisig" : name === "Fuse" ? "https://fusewallet.com" : name.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#888888] hover:text-white transition-colors"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs text-[#555] uppercase tracking-widest font-medium mb-5">Resources</div>
              <ul className="space-y-3">
                {[
                  { name: "Blog", href: "https://squads.xyz/blog" },
                  { name: "Multisig Docs", href: "https://docs.squads.so/main" },
                  { name: "Github", href: "https://github.com/Squads-Protocol" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#888888] hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs text-[#555] uppercase tracking-widest font-medium mb-5">Company</div>
              <ul className="space-y-3">
                {[
                  { name: "About", href: "https://squads.xyz/company" },
                  { name: "Brand Assets", href: "https://squads.xyz/brand-assets" },
                  { name: "Careers", href: "https://squads.xyz/company" },
                  { name: "Legal", href: "https://squads.xyz/legal" },
                  { name: "Terms of Service", href: "https://squads.xyz/legal/terms-of-service" },
                  { name: "Privacy Policy", href: "https://squads.xyz/legal/privacy-policy" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#888888] hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs text-[#555] uppercase tracking-widest font-medium mb-5">Social</div>
              <ul className="space-y-3">
                {[
                  { name: "Twitter / X", href: "https://x.com/squads_xyz" },
                  { name: "Discord", href: "https://discord.gg/squads" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#888888] hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/[0.06]">
            <SquadsLogo />
            <p className="text-xs text-[#444444] max-w-sm sm:text-right">
              Squads Labs is a financial technology company, not a bank or a digital asset custodian.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
