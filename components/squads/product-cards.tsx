import { ArrowLink, OpenFuturesMark, PontoonMark, PryddMark } from "./brand";

type ProductKey = "pontoon" | "prydd" | "openfutures";

const PRODUCTS: { key: ProductKey; name: string; desc: string; href: string }[] = [
  {
    key: "pontoon",
    name: "Pontoon",
    desc: "A local TON blockchain sandbox with a desktop inspection GUI.",
    href: "https://pontoon.entrypointlabs.xyz/",
  },
  {
    key: "prydd",
    name: "PRYDD",
    desc: "One app for everyday global money — hold dollars, send by username.",
    href: "https://prydd.co",
  },
  {
    key: "openfutures",
    name: "OpenFutures",
    desc: "Perps across every venue — best fill, or a funded account.",
    href: "https://www.openfutures.xyz",
  },
];

function CardGlyph({ product }: { product: ProductKey }) {
  if (product === "pontoon") return <PontoonMark />;
  if (product === "prydd") return <PryddMark />;
  return <OpenFuturesMark />;
}

function CardHeader({ name, desc, product }: { name: string; desc: string; product: ProductKey }) {
  return (
    <div className="relative z-10 px-10 pt-8">
      <div className="flex items-start justify-between">
        <h3 className="text-2xl font-medium leading-[26.4px] text-white">{name}</h3>
        <span className="flex h-[24px] items-center text-white">
          <CardGlyph product={product} />
        </span>
      </div>
      <p className="mt-3 text-base leading-[22.4px] text-white/55">{desc}</p>
    </div>
  );
}

function PontoonArt() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute left-[-6px] top-[147px] w-[330px]">
        <div className="relative rounded-t-[12px] bg-[#1b1b1d] p-[5px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)]">
          <span className="absolute left-1/2 top-[3px] h-[4px] w-[28px] -translate-x-1/2 rounded-full bg-black/60" />
          <div className="relative h-[198px] overflow-hidden rounded-[7px]">
            <img
              src="/products/pontoon-app.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="relative mx-auto h-[9px] w-[112%] rounded-b-[3px] bg-gradient-to-b from-[#3a3a3d] to-[#222224]">
          <span className="absolute left-1/2 top-0 h-[3px] w-[40px] -translate-x-1/2 rounded-b-[3px] bg-black/40" />
        </div>
      </div>
    </div>
  );
}

/* PRYDD's own visual language (prydd-website, docs/prydd-design-direction.md):
   a soft landscape scene holding a layered white account panel, restrained
   shadows, 16px radii, hairline #eee rules and muted #727272 labels. The
   account window mirrors AccountScene; the @maya pill mirrors usernamePill. */
const PRYDD_PANEL_SHADOW =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_16px_-4px_rgba(0,0,0,0.05),0_3px_6px_-1.5px_rgba(0,0,0,0.04)]";

function PryddArt() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute inset-x-3 bottom-3 top-[148px] overflow-hidden rounded-[12px] bg-[#d4e1ed]">
        <img
          src="/products/prydd-sky.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_70%]"
        />

        <div
          className={`absolute left-[9%] top-[46px] w-[74%] rounded-[16px] bg-white px-[18px] pb-4 pt-[15px] text-black transition-transform duration-500 ease-[cubic-bezier(.35,0,0,1)] group-hover:-translate-y-1.5 ${PRYDD_PANEL_SHADOW}`}
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

        <span className="absolute right-[6%] top-[22px] inline-flex items-center gap-[7px] rounded-full bg-white py-[5px] pl-[5px] pr-3 text-[11px] tracking-[-0.02em] text-black shadow-[0_1px_2px_rgba(0,0,0,0.07)] transition-transform duration-500 ease-[cubic-bezier(.35,0,0,1)] group-hover:-translate-y-0.5">
          <img src="/products/prydd-maya.png" alt="" className="h-[22px] w-[22px] rounded-full object-cover" />
          @maya
          <span className="text-[#727272]">−$25</span>
        </span>
      </div>
    </div>
  );
}

/* Same geometry as PryddArt (framed scene, panel at 9% / 46px, pill at 6% / 22px)
   in OpenFutures' terminal language: #161616 surfaces, #242424 hairlines, 4px
   radii, Geist Mono prices and the --long token #2d63f5. Markets and venue come
   from apps/trading markets.ts and screen-terminal.webp. */
function OpenFuturesArt() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{ fontFamily: "var(--font-geist-sans), Geist, sans-serif" }}
      aria-hidden
    >
      <div className="absolute inset-x-3 bottom-3 top-[148px] overflow-hidden rounded-[12px] border border-white/[0.06] bg-[#111112]">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 85% 75% at 50% 45%, #000 30%, transparent 100%)",
          }}
        />
        <div className="absolute -bottom-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-[50%] bg-[#2d63f5]/25 blur-3xl" />

        <div className="absolute left-[9%] top-[46px] w-[74%] rounded-[4px] border border-[#242424] bg-[#161616] px-3.5 pb-3.5 pt-3 text-[#f5f5f4] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-[cubic-bezier(.35,0,0,1)] group-hover:-translate-y-1.5">
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

        <span className="absolute right-[6%] top-[22px] inline-flex items-center gap-[7px] rounded-full border border-[#242424] bg-[#1b1b1b] py-[6px] pl-2.5 pr-3 text-[11px] tracking-[-0.01em] text-[#f5f5f4] shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(.35,0,0,1)] group-hover:-translate-y-0.5">
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

function CardArt({ product }: { product: ProductKey }) {
  if (product === "pontoon") return <PontoonArt />;
  if (product === "prydd") return <PryddArt />;
  return <OpenFuturesArt />;
}

export function ProductCards() {
  return (
    <section className="mx-auto mt-12 flex w-full max-w-[1150px] flex-col gap-3 px-6 lg:mt-16 lg:w-[1150px] lg:max-w-full lg:flex-row lg:gap-[9.5px] lg:px-0">
      {PRODUCTS.map(({ key, name, desc, href }) => {
        const external = href.startsWith("http");
        return (
          <a
            key={key}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="group relative block h-[420px] w-full cursor-pointer overflow-hidden rounded-[18px] bg-[#0E0E0F] lg:h-[400px] lg:w-[377px]"
          >
            <CardHeader name={name} desc={desc} product={key} />
            <CardArt product={key} />
            <ArrowLink
              className={
                key === "prydd"
                  ? "z-20 !bottom-7 !right-8 !text-black/70"
                  : key === "openfutures"
                    ? "z-20 !bottom-7 !right-8"
                    : "z-20"
              }
            />
          </a>
        );
      })}
    </section>
  );
}
