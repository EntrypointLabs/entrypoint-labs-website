import type { CSSProperties } from "react";

import { ArrowLink, PontoonMark, UltrapropMark, XendMark } from "./brand";

type ProductKey = "pontoon" | "xend" | "ultraprop";

const PRODUCTS: { key: ProductKey; name: string; desc: string; href: string }[] = [
  {
    key: "pontoon",
    name: "Pontoon",
    desc: "A local TON blockchain sandbox with a desktop inspection GUI.",
    href: "https://pontoon.entrypointlabs.xyz/",
  },
  {
    key: "xend",
    name: "Xend",
    desc: "A checking account for the internet — built for everyday life.",
    href: "https://xend.global",
  },
  {
    key: "ultraprop",
    name: "Ultraprop",
    desc: "An on-chain prop firm — prove your edge, earn a funded account.",
    href: "https://ultraprop.xyz",
  },
];

function CardGlyph({ product }: { product: ProductKey }) {
  if (product === "pontoon") return <PontoonMark />;
  if (product === "xend") return <XendMark />;
  return <UltrapropMark />;
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

function XendArt() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute left-1/2 bottom-[-70px] w-[196px] -translate-x-1/2">
        <div className="relative rounded-[30px] bg-[#1b1b1d] p-[7px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)]">
          <div className="relative h-[300px] overflow-hidden rounded-[24px]">
            <img
              src="/products/xend-app.png"
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* rotate(-24) + skewX(42) maps a rect's edges onto both ±24° grid-line families;
   scaleY adds the lying-flat foreshortening. */
const ISO_TRANSFORM = "rotate(-24deg) skewX(42deg) scaleY(0.62)";

function IsoTile({
  style,
  background,
  clipPath,
  label,
  labelClassName,
}: {
  style: CSSProperties;
  background: string;
  clipPath?: string;
  label?: string;
  labelClassName?: string;
}) {
  return (
    <div className="absolute" style={{ ...style, transform: ISO_TRANSFORM }}>
      <div
        className="relative flex h-full w-full items-center justify-center"
        style={{
          background,
          clipPath,
          borderRadius: clipPath ? undefined : 6,
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.35), inset -14px -10px 28px rgba(0,0,0,0.28)",
        }}
      >
        {label && (
          <span className={labelClassName ?? "text-[13px] font-medium text-white"}>{label}</span>
        )}
      </div>
    </div>
  );
}

function UltrapropArt() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -inset-16"
        style={{
          backgroundImage:
            "repeating-linear-gradient(24deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 35.5px), repeating-linear-gradient(-24deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 35.5px)",
        }}
      />
      <IsoTile
        style={{ top: 150, left: 48, width: 120, height: 76 }}
        background="linear-gradient(115deg, #7FB2FF 0%, #3D66DB 60%, #27439B 100%)"
        label="BTC-PERP"
        labelClassName="text-[11px] font-medium text-white"
      />
      <IsoTile
        style={{ bottom: -14, left: -40, width: 132, height: 78 }}
        background="linear-gradient(115deg, #7FEDB4 0%, #17A467 60%, #0B6B42 100%)"
        label="Long"
      />
      <IsoTile
        style={{ top: 96, right: -56, width: 170, height: 110 }}
        background="linear-gradient(115deg, #FF8A8E 0%, #E5484D 55%, #B22B32 100%)"
        clipPath="polygon(0 50%, 100% 0, 100% 100%)"
      />
    </div>
  );
}

function CardArt({ product }: { product: ProductKey }) {
  if (product === "pontoon") return <PontoonArt />;
  if (product === "xend") return <XendArt />;
  return <UltrapropArt />;
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
            className="relative block h-[420px] w-full cursor-pointer overflow-hidden rounded-[18px] bg-[#0E0E0F] lg:h-[400px] lg:w-[377px]"
          >
            <CardHeader name={name} desc={desc} product={key} />
            <CardArt product={key} />
            <ArrowLink className="z-20" />
          </a>
        );
      })}
    </section>
  );
}
