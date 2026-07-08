import type { CSSProperties } from "react";

import { ArrowLink, FluxGlyph, MeridianGlyph, PixelMesh } from "./brand";

type ProductKey = "meridian" | "flux" | "mesh";

const PRODUCTS: { key: ProductKey; name: string; desc: string }[] = [
  {
    key: "meridian",
    name: "Meridian",
    desc: "A borderless business account to hold, grow and move funds.",
  },
  {
    key: "flux",
    name: "Flux",
    desc: "A personal money app for digital dollars and tokenized value.",
  },
  {
    key: "mesh",
    name: "Mesh",
    desc: "The digital-dollar API for accounts, payouts, cards and returns.",
  },
];

function CardGlyph({ product }: { product: ProductKey }) {
  if (product === "meridian") return <MeridianGlyph />;
  if (product === "flux") return <FluxGlyph />;
  return <PixelMesh className="text-[22px] leading-none text-white" />;
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

function HoverHighlight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-200 group-hover:opacity-[0.05]"
      style={{
        background: "radial-gradient(420px circle at 50% 28%, #ffffff, transparent 70%)",
      }}
    />
  );
}

function MeridianArt() {
  const rows: [string, string, string][] = [
    ["Operations", "$650,000.00", "56%"],
    ["Payroll", "$250,000.00", "27%"],
    ["Marketing", "$20,000.00", "10%"],
    ["Vendors", "$12,400.00", "4%"],
    ["Earn", "$65,250.00", "7%"],
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute left-[-6px] top-[147px] w-[330px]">
        <div className="relative rounded-t-[12px] bg-[#1b1b1d] p-[5px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)]">
          <span className="absolute left-1/2 top-[3px] h-[4px] w-[28px] -translate-x-1/2 rounded-full bg-black/60" />
          <div className="relative h-[198px] overflow-hidden rounded-[7px] bg-[#f5f5f6] px-3 pt-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-medium text-black/40">Treasury</span>
              <div className="flex gap-1">
                <span className="rounded-[4px] bg-black/85 px-[6px] py-[2px] text-[6.5px] font-medium text-white">
                  Send
                </span>
                <span className="rounded-[4px] border border-black/15 px-[6px] py-[2px] text-[6.5px] font-medium text-black/60">
                  Deposit
                </span>
              </div>
            </div>
            <div className="mt-[6px] text-[6.5px] text-black/35">Total balance</div>
            <div className="text-[15px] font-semibold leading-none text-black/85">$842,610.00</div>
            <svg
              className="mt-[6px] h-[38px] w-full"
              viewBox="0 0 264 32"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 21 L20 17 L38 23 L58 11 L80 15 L100 7 L120 13 L142 5 L165 11 L188 4 L210 9 L232 3 L264 8"
                stroke="#39D98A"
                strokeWidth={1.3}
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="mt-[6px] flex items-center justify-between border-t border-black/10 pt-[6px]">
              <span className="text-[6px] font-medium text-black/45">Accounts</span>
              <span className="text-[6px] text-black/30">Add account</span>
            </div>
            {rows.map(([label, value, pct]) => (
              <div key={label} className="mt-[4px] flex items-center justify-between">
                <span className="text-[6.5px] text-black/50">{label}</span>
                <span className="text-[6.5px] text-black/70">{value}</span>
                <span className="text-[6px] text-black/30">{pct}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto h-[9px] w-[112%] rounded-b-[3px] bg-gradient-to-b from-[#3a3a3d] to-[#222224]">
          <span className="absolute left-1/2 top-0 h-[3px] w-[40px] -translate-x-1/2 rounded-b-[3px] bg-black/40" />
        </div>
      </div>
    </div>
  );
}

function FluxArt() {
  const tiles: [string, string][] = [
    ["$5,000", "USDC"],
    ["$7,531", "Yield"],
    ["$10,000", "Card"],
    ["$1,000", "Save"],
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute left-1/2 bottom-[-70px] w-[196px] -translate-x-1/2">
        <div className="relative rounded-[30px] bg-[#1b1b1d] p-[7px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)]">
          <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-[#f5f5f6] px-4 pt-4">
            <span className="absolute left-1/2 top-[8px] h-[16px] w-[64px] -translate-x-1/2 rounded-full bg-black" />
            <div className="mt-[26px] text-[9px] font-medium text-black/40">Wallet</div>
            <div className="mt-[8px] flex items-center gap-1.5">
              <span className="text-[8px] text-black/35">Total balance</span>
              <span className="rounded-full bg-[#e3f8ee] px-[5px] py-[1px] text-[7px] font-medium text-[#1fa464]">
                +18%
              </span>
            </div>
            <div className="mt-[4px] text-[19px] font-semibold leading-none text-black/85">
              $18,472<span className="text-black/40">.00</span>
            </div>
            <div className="mt-[12px] flex gap-2">
              {["#3B82F6", "#F59E0B", "#8B5CF6", "#EF4444"].map((c) => (
                <span
                  key={c}
                  className="h-[18px] w-[18px] rounded-full"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div className="mt-[12px] grid grid-cols-2 gap-[6px]">
              {tiles.map(([amt, label]) => (
                <div key={label} className="rounded-[8px] bg-black/[0.035] px-2 py-1.5">
                  <div className="text-[8px] font-medium text-black/70">{amt}</div>
                  <div className="text-[6px] text-black/35">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-[10px] flex items-center gap-2 rounded-[10px] bg-[#fdecea] px-2.5 py-2">
              <span className="h-[14px] w-[14px] shrink-0 rounded-full bg-[#EF4444]" />
              <span className="flex flex-col gap-[4px]">
                <span className="h-[5px] w-[92px] rounded-full bg-black/25" />
                <span className="h-[4px] w-[64px] rounded-full bg-black/15" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IsoTile({
  style,
  gradient,
  angle,
  skew,
  label,
}: {
  style: CSSProperties;
  gradient: string;
  angle: number;
  skew: number;
  label?: string;
}) {
  return (
    <div className="absolute" style={style}>
      <div
        className="h-full w-full rounded-[8px]"
        style={{ background: gradient, transform: `rotate(${angle}deg) skewX(${skew}deg)` }}
      />
      {label && (
        <span
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-[13px] font-medium text-white"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

function MeshArt() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -inset-16"
        style={{
          backgroundImage:
            "repeating-linear-gradient(24deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 42px), repeating-linear-gradient(-24deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 42px)",
        }}
      />
      <IsoTile
        style={{ top: 148, left: 36, width: 118, height: 60 }}
        gradient="linear-gradient(135deg, #6EA8FE, #3560D8)"
        angle={-24}
        skew={-16}
        label="Yield"
      />
      <IsoTile
        style={{ bottom: -18, left: -34, width: 132, height: 58 }}
        gradient="linear-gradient(135deg, #6EE7A8, #12925A)"
        angle={-24}
        skew={-16}
        label="Trade"
      />
      <IsoTile
        style={{ top: 108, right: -42, width: 120, height: 64 }}
        gradient="linear-gradient(135deg, #FF8A5B, #E23F3F)"
        angle={24}
        skew={16}
      />
    </div>
  );
}

function CardArt({ product }: { product: ProductKey }) {
  if (product === "meridian") return <MeridianArt />;
  if (product === "flux") return <FluxArt />;
  return <MeshArt />;
}

export function ProductCards() {
  return (
    <section className="mx-auto mt-12 flex w-full max-w-[1150px] flex-col gap-3 px-6 lg:mt-16 lg:w-[1150px] lg:max-w-full lg:flex-row lg:gap-[9.5px] lg:px-0">
      {PRODUCTS.map(({ key, name, desc }) => (
        <article
          key={key}
          className="group relative h-[420px] w-full overflow-hidden rounded-[18px] bg-[#0E0E0F] lg:h-[400px] lg:w-[377px]"
        >
          <CardHeader name={name} desc={desc} product={key} />
          <CardArt product={key} />
          <HoverHighlight />
          <ArrowLink className="z-20" />
        </article>
      ))}
    </section>
  );
}
