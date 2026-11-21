import { ArrowRight, CortexMark, OpenFuturesMark, PontoonMark, PryddMark } from "./brand";

type ProductKey = "prydd" | "openfutures" | "cortex" | "pontoon";
type Tone = "light" | "dark" | "warm";

const PRODUCTS: {
  key: ProductKey;
  name: string;
  desc: string;
  href: string;
  tone: Tone;
}[] = [
  {
    key: "prydd",
    name: "PRYDD",
    desc: "One app for everyday global money — hold dollars, send by username.",
    href: "https://prydd.co",
    tone: "light",
  },
  {
    key: "openfutures",
    name: "OpenFutures",
    desc: "Perps across every venue — best fill, or a funded account.",
    href: "https://www.openfutures.xyz",
    tone: "dark",
  },
  {
    key: "cortex",
    name: "Cortex",
    desc: "A sovereign, encrypted memory layer for AI.",
    href: "https://www.usecortexai.xyz",
    tone: "dark",
  },
  {
    key: "pontoon",
    name: "Pontoon",
    desc: "A local TON blockchain sandbox with a desktop inspection GUI.",
    href: "https://pontoon.entrypointlabs.xyz/",
    tone: "warm",
  },
];

function CardMark({ product }: { product: ProductKey }) {
  if (product === "pontoon") return <PontoonMark size={16} />;
  if (product === "prydd") return <PryddMark size={16} />;
  if (product === "cortex") return <CortexMark size={16} />;
  return <OpenFuturesMark size={16} />;
}

/* PRYDD's own visual language: a soft landscape holding a layered white
   account panel, restrained shadows, 16px radii, hairline rules. */
const PRYDD_PANEL_SHADOW =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_12px_28px_-12px_rgba(0,0,0,0.18),0_3px_6px_-1.5px_rgba(0,0,0,0.04)]";

function PryddArt() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 overflow-hidden bg-[#d4e1ed]">
        <img
          src="/products/prydd-sky.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_62%]"
        />

        <div
          className={`absolute left-[8%] top-[16%] w-[76%] rounded-[16px] bg-white px-[18px] pb-4 pt-[15px] text-black transition-transform duration-500 ease-[cubic-bezier(.35,0,0,1)] motion-safe:group-hover:-translate-y-1.5 ${PRYDD_PANEL_SHADOW}`}
        >
          <div className="flex items-center justify-between border-b border-[#eee] pb-3 text-[10px] leading-none">
            <span className="flex items-center gap-[6px] font-medium">
              <PryddMark size={13} />
              Your account
            </span>
            <span className="text-[#727272]">USD</span>
          </div>
          <span className="mt-4 block text-[10px] leading-[1.3] tracking-[-0.015em] text-[#727272]">
            Dollar balance
          </span>
          <strong className="mt-1 block text-[34px] font-medium leading-[1.1] tracking-[-0.045em]">
            $250<span className="text-[0.76em]">.00</span>
          </strong>
          <div className="mt-4 flex items-center gap-1.5 text-[9.5px] leading-none">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#f5f5f5] px-2.5 py-[7px]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Add money
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-black px-2.5 py-[7px] text-white">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Send
            </span>
          </div>
        </div>

        <span className="absolute right-[7%] top-[7%] inline-flex items-center gap-[7px] rounded-full bg-white py-[5px] pl-[5px] pr-3 text-[11px] tracking-[-0.02em] text-black shadow-[0_1px_2px_rgba(0,0,0,0.07)] transition-transform duration-500 ease-[cubic-bezier(.35,0,0,1)] motion-safe:group-hover:-translate-y-0.5">
          <img src="/products/prydd-maya.png" alt="" className="h-[22px] w-[22px] rounded-full object-cover" />
          @maya
          <span className="text-[#727272]">−$25</span>
        </span>
      </div>
    </div>
  );
}

/* OpenFutures terminal language: #161616 surfaces, #242424 hairlines, 4px
   radii, Geist Mono prices, and the stepped blue edges from the product hero. */
function OpenFuturesArt() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{ fontFamily: "var(--font-geist-sans), Geist, sans-serif" }}
      aria-hidden
    >
      <div className="@container absolute inset-0 overflow-hidden bg-[#0e0e0f] [--cols:11] lg:[--cols:12] [--rows:9] lg:[--rows:8]">
        <div
          className="absolute inset-0 [--u:calc(100cqw/var(--cols))]"
          style={{
            backgroundImage:
              "linear-gradient(#242424 1px, transparent 1px), linear-gradient(90deg, #242424 1px, transparent 1px)",
            backgroundSize: "var(--u) var(--u)",
            backgroundPosition: "-1px -1px",
          }}
        />
        <div
          className="absolute inset-0 [--u:calc(100cqw/var(--cols))]"
          style={{
            background: "linear-gradient(135deg, #3a62e6 0%, #6787f2 55%, #8ea6f7 100%)",
            clipPath:
              "polygon(calc(100% - 5 * var(--u)) 0, 100% 0, 100% calc(4 * var(--u)), calc(100% - 1 * var(--u)) calc(4 * var(--u)), calc(100% - 1 * var(--u)) calc(3 * var(--u)), calc(100% - 2 * var(--u)) calc(3 * var(--u)), calc(100% - 2 * var(--u)) calc(1 * var(--u)), calc(100% - 5 * var(--u)) calc(1 * var(--u)))",
          }}
        />
        <div
          className="absolute inset-0 [--u:calc(100cqw/var(--cols))]"
          style={{
            background: "linear-gradient(45deg, #b4c2f9 0%, #8299f5 45%, #5a7cf0 100%)",
            clipPath:
              "polygon(0 calc((var(--rows) - 4) * var(--u)), calc(1 * var(--u)) calc((var(--rows) - 4) * var(--u)), calc(1 * var(--u)) calc((var(--rows) - 3) * var(--u)), calc(4 * var(--u)) calc((var(--rows) - 3) * var(--u)), calc(4 * var(--u)) calc((var(--rows) - 2) * var(--u)), calc(7 * var(--u)) calc((var(--rows) - 2) * var(--u)), calc(7 * var(--u)) calc(100% - 108px), 0 calc(100% - 108px))",
          }}
        />

        <div className="absolute left-[8%] top-[15%] w-[76%] rounded-[4px] border border-white/[0.08] bg-[#161616]/80 px-3.5 pb-3.5 pt-3 text-[#f5f5f4] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7)] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(.35,0,0,1)] motion-safe:group-hover:-translate-y-1.5">
          <div className="flex items-center justify-between border-b border-[#242424] pb-2.5 text-[10px] leading-none">
            <span className="flex items-center gap-[6px] font-medium">
              <OpenFuturesMark size={12} />
              Order ticket
            </span>
            <span className="text-[#969694]">Perps</span>
          </div>
          <div className="pt-1.5">
            <MarketRow logo="/logos/openfutures-btc.svg" symbol="BTC-PERP" price="86,346.4" change="+3.64%" />
            <MarketRow logo="/logos/openfutures-nvda.svg" symbol="NVDA" price="182.40" change="+1.84%" />
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-1 rounded-[4px] border border-[#242424] bg-[#1b1b1b] p-1">
            <span className="flex h-[30px] items-center justify-center rounded-[3px] bg-[#2d63f5] text-[11px] font-semibold text-white">
              Buy / Long
            </span>
            <span className="flex h-[30px] items-center justify-center rounded-[3px] text-[11px] font-semibold text-[#969694]">
              Sell / Short
            </span>
          </div>
        </div>

        <span className="absolute right-[7%] top-[6%] inline-flex items-center gap-[7px] rounded-full border border-[#242424] bg-[#1b1b1b] py-[6px] pl-2.5 pr-3 text-[11px] tracking-[-0.01em] text-[#f5f5f4] shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(.35,0,0,1)] motion-safe:group-hover:-translate-y-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6f97ff] shadow-[0_0_6px_#6f97ff]" />
          Lighter
          <span className="font-medium text-[#6f97ff]">Best fill</span>
        </span>
      </div>
    </div>
  );
}

function MarketRow({
  logo,
  symbol,
  price,
  change,
}: {
  logo: string;
  symbol: string;
  price: string;
  change: string;
}) {
  return (
    <div className="flex items-center gap-2 py-1.5">
      <img src={logo} alt="" className="h-4 w-4 shrink-0 rounded-full" />
      <span className="whitespace-nowrap text-[11.5px] font-medium tracking-[-0.01em]">{symbol}</span>
      <span
        className="ml-auto whitespace-nowrap text-[11.5px] font-medium tabular-nums"
        style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
      >
        {price}
      </span>
      <span className="w-[46px] shrink-0 text-right text-[10.5px] font-medium tabular-nums text-[#6f97ff]">
        {change}
      </span>
    </div>
  );
}

function CortexArt() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 bg-[#07070a]" aria-hidden>
      <img
        src="/products/cortex-app.png"
        alt=""
        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
      />
    </div>
  );
}

function PontoonArt() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 bg-[#f6f5f3]" aria-hidden>
      <div className="absolute inset-x-5 top-5 bottom-[108px] overflow-hidden rounded-[12px] bg-[#141416] shadow-[0_16px_40px_-24px_rgba(10,10,10,0.55)] ring-1 ring-black/10 transition-transform duration-500 ease-[cubic-bezier(.35,0,0,1)] motion-safe:group-hover:-translate-y-1">
        <img
          src="/products/pontoon-app.png"
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
      </div>
    </div>
  );
}

function CardArt({ product }: { product: ProductKey }) {
  if (product === "prydd") return <PryddArt />;
  if (product === "openfutures") return <OpenFuturesArt />;
  if (product === "cortex") return <CortexArt />;
  return <PontoonArt />;
}

const TONE_SCRIM: Record<Tone, string> = {
  light: "bg-gradient-to-t from-white from-25% via-white/90 to-transparent",
  warm: "bg-gradient-to-t from-[#f6f5f3] from-25% via-[#f6f5f3]/95 to-transparent",
  dark: "bg-gradient-to-t from-[#0c0c0e] from-30% via-[#0c0c0e]/92 to-transparent",
};

export function ProductCards() {
  return (
    <section className="ep-wrap mt-12 grid grid-cols-1 gap-3 sm:mt-16 lg:grid-cols-2">
      {PRODUCTS.map(({ key, name, desc, href, tone }, index) => {
        const external = href.startsWith("http");
        const ink = tone === "dark" ? "text-white" : "text-[#0a0a0a]";
        const muted = tone === "dark" ? "text-white/70" : "text-[#0a0a0a]/65";
        return (
          <a
            key={key}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="ep-card ep-in group relative flex h-[420px] cursor-pointer flex-col overflow-hidden rounded-[22px] ring-1 ring-black/[0.06]"
            style={{ animationDelay: `${120 + index * 70}ms` }}
          >
            <CardArt product={key} />
            <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-40 ${TONE_SCRIM[tone]}`} />
            <div className={`relative z-10 mt-auto px-5 pb-5 pt-10 ${ink}`}>
              <div className="flex items-center justify-between gap-4">
                <span className="flex min-w-0 items-center gap-2 text-[15px] font-medium tracking-[-0.015em]">
                  <CardMark product={key} />
                  {name}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 text-[14px] font-medium">
                  Explore
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                  />
                </span>
              </div>
              <p className={`mt-1.5 max-w-[36rem] text-[13px] leading-5 ${muted}`}>{desc}</p>
            </div>
          </a>
        );
      })}
    </section>
  );
}
