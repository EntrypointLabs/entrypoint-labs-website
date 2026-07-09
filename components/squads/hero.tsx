import type { CSSProperties } from "react";

import { Logomark } from "@/components/squads/brand";

const H1_LINES = ["Products and tools", "for the onchain", "economy"];

const PARAGRAPH =
  "We build consumer payments, onchain markets, AI memory and developer tools to bring open networks to everyday life for everyone.";

function Headline({
  breakLines,
  style,
}: {
  breakLines: boolean;
  style?: CSSProperties;
}) {
  return (
    <h1 className="font-medium" style={style}>
      {breakLines
        ? H1_LINES.map((line, i) => (
            <span key={line}>
              <span className="inline-block whitespace-nowrap">{line}</span>
              {i < H1_LINES.length - 1 && <br />}
            </span>
          ))
        : H1_LINES.join(" ")}
    </h1>
  );
}

function Amount({
  int,
  dec,
  style,
}: {
  int: string;
  dec: string;
  style?: CSSProperties;
}) {
  return (
    <span style={style}>
      {int}
      <span style={{ opacity: 0.4 }}>.{dec}</span>
    </span>
  );
}

function Bar({
  w,
  h = 7,
  o = 0.16,
  style,
}: {
  w: number | string;
  h?: number;
  o?: number;
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        display: "block",
        width: w,
        height: h,
        borderRadius: 4,
        background: `rgba(255,255,255,${o})`,
        ...style,
      }}
    />
  );
}

function TrendLine() {
  return (
    <svg
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden
    >
      <defs>
        <linearGradient id="heroTrendFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34D399" stopOpacity={0.1} />
          <stop offset="100%" stopColor="#34D399" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path
        d="M0,88 L28,74 L52,90 L78,58 L104,76 L132,48 L160,66 L188,42 L214,58 L242,24 L268,40 L296,14 L322,30 L350,10 L400,2 L400,120 L0,120 Z"
        fill="url(#heroTrendFill)"
        stroke="none"
      />
      <path
        d="M0,88 L28,74 L52,90 L78,58 L104,76 L132,48 L160,66 L188,42 L214,58 L242,24 L268,40 L296,14 L322,30 L350,10 L400,2"
        fill="none"
        stroke="#34D399"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TABLE_ROWS: [string, string][] = [
  ["$120,400.00", "+$8,210.00"],
  ["$64,150.00", "-$2,940.00"],
  ["$310,875.00", "+$12,480.00"],
  ["$45,020.00", "+$1,150.00"],
  ["$96,300.00", "-$4,760.00"],
];

function LaptopArt() {
  return (
    <div
      style={{
        position: "absolute",
        right: "-2%",
        top: "6%",
        width: "58%",
        zIndex: 10,
        transform: "rotate(-2.2deg) skewY(-1.6deg)",
        transformOrigin: "100% 0%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1.62",
          borderRadius: "6px 10px 4px 4px",
          background:
            "linear-gradient(160deg,#101114 0%,#0c0d10 45%,#08090b 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 60px 100px -30px rgba(0,0,0,0.75)",
          clipPath: "polygon(4% 3%, 100% 0%, 100% 100%, 0% 97%)",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "7%",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            padding: "3.5% 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <Logomark size={12} style={{ color: "rgba(255,255,255,0.45)" }} />
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              style={{
                width: 9,
                height: 9,
                borderRadius: 2.5,
                background: "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>

        <div
          style={{
            flex: 1,
            padding: "3.5% 4% 3%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Bar w={56} h={6} o={0.3} />
            <div style={{ display: "flex", gap: 6 }}>
              <span
                style={{
                  width: 32,
                  height: 12,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.85)",
                }}
              />
              <span
                style={{
                  width: 40,
                  height: 12,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.1)",
                }}
              />
            </div>
          </div>

          <Amount
            int="$818,240"
            dec="00"
            style={{
              marginTop: "3.5%",
              color: "#F4F4F5",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          />
          <span
            style={{
              marginTop: 4,
              fontSize: 9,
              color: "rgba(52,211,153,0.8)",
              fontWeight: 500,
            }}
          >
            +$46,120.75
          </span>

          <div
            style={{
              position: "relative",
              flex: 1,
              minHeight: 0,
              marginTop: "3%",
            }}
          >
            <TrendLine />
          </div>

          <div style={{ marginTop: "3.5%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 7,
              }}
            >
              <Bar w="12%" h={5} o={0.14} />
              <Bar w="10%" h={5} o={0.14} />
              <Bar w="10%" h={5} o={0.14} />
            </div>
            {TABLE_ROWS.map(([balance, delta], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  paddingTop: 6,
                  paddingBottom: 6,
                  fontSize: 9.5,
                  color: "rgba(255,255,255,0.34)",
                }}
              >
                <Bar w="15%" h={6} o={0.2} />
                <span>{balance}</span>
                <span>{delta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          width: "104%",
          marginLeft: "-2%",
          marginTop: -4,
          height: 46,
          background:
            "linear-gradient(180deg,#2e2e33 0%,#1a1a1e 34%,#0d0d0f 100%)",
          clipPath: "polygon(1.5% 0%, 98.5% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0 0 10px 10px",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 12px 14px -10px rgba(255,255,255,0.08), 0 30px 60px -20px rgba(0,0,0,0.6)",
        }}
      />
    </div>
  );
}

function PhoneArt() {
  const tiles = [
    { bg: "#3B82F6", value: "$6,400" },
    { bg: "#F59E0B", value: "$2,180" },
    { bg: "#8B5CF6", value: "$9,050" },
    { bg: "#111114", value: "$1,300" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        left: "25.4%",
        top: "34.5%",
        width: "10.7%",
        aspectRatio: "0.42",
        zIndex: 30,
        transform: "rotate(-6deg)",
        borderRadius: 20,
        background: "linear-gradient(160deg,#ececef,#c9c9cf)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 40px 70px -20px rgba(0,0,0,0.7)",
        padding: 4,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 16,
          background: "linear-gradient(180deg,#fbfbfc,#e9e9ec)",
          overflow: "hidden",
          padding: "26% 11% 14%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 6,
            left: "50%",
            transform: "translateX(-50%)",
            width: "36%",
            height: 7,
            borderRadius: 999,
            background: "#17171a",
          }}
        />

        <Amount
          int="$19,254"
          dec="00"
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#18181b",
            letterSpacing: "-0.02em",
          }}
        />
        <Bar
          w="50%"
          h={3}
          style={{ marginTop: 5, background: "rgba(0,0,0,0.12)" }}
        />

        <div
          style={{
            marginTop: "16%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: 9,
            columnGap: 6,
          }}
        >
          {tiles.map((tile) => (
            <div
              key={tile.value}
              style={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <span
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 4,
                  background: tile.bg,
                }}
              />
              <span style={{ fontSize: 7, fontWeight: 600, color: "#3f3f46" }}>
                {tile.value}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Bar w="100%" h={8} style={{ background: "rgba(0,0,0,0.06)" }} />
          <Bar w="100%" h={8} style={{ background: "rgba(0,0,0,0.06)" }} />
        </div>

        <span
          style={{
            position: "absolute",
            bottom: 4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 18,
            height: 3,
            borderRadius: 999,
            background: "rgba(0,0,0,0.45)",
          }}
        />
      </div>
    </div>
  );
}

function CardArt() {
  return (
    <div
      style={{
        position: "absolute",
        left: 439,
        top: 487,
        width: 128,
        height: 81,
        zIndex: 32,
        transform: "rotate(11deg)",
        borderRadius: 10,
        overflow: "hidden",
        background:
          "repeating-linear-gradient(100deg, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0.16) 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 3px), linear-gradient(155deg,#d4d4d8,#9a9aa2)",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: "0 30px 50px -15px rgba(0,0,0,0.65)",
        padding: "7px 10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Logomark size={11} style={{ color: "rgba(30,30,34,0.7)" }} />
      <span
        style={{
          fontSize: 7,
          letterSpacing: "0.1em",
          color: "rgba(30,30,34,0.55)",
        }}
      >
        •••• 4821
      </span>
    </div>
  );
}

function HeroArt({ leftFade = true }: { leftFade?: boolean }) {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(60% 55% at 74% 38%, rgba(255,255,255,0.03), transparent 70%), radial-gradient(50% 50% at 46% 55%, rgba(255,255,255,0.02), transparent 70%)",
        }}
      />
      <LaptopArt />
      <CardArt />
      <PhoneArt />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 40,
          pointerEvents: "none",
          background: leftFade
            ? "linear-gradient(90deg,#111113 0%, rgba(17,17,19,0.4) 22%, transparent 42%), linear-gradient(180deg, transparent 62%, #111113 100%)"
            : "linear-gradient(180deg, transparent 62%, #111113 100%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full lg:h-[634px]">
      {/* <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 z-0 hidden lg:block"
        style={{ top: 0, height: 802 }}
      >
        <div
          className="absolute inset-y-0 overflow-hidden"
          style={{ left: 216, right: 0 }}
        >
          <HeroArt />
        </div>
      </div> */}

      <div className="relative z-10 mx-auto hidden w-[1150px] max-w-full pt-[247px] lg:block">
        <Headline
          breakLines
          style={{
            width: 455,
            fontSize: 56,
            lineHeight: "61.6px",
            letterSpacing: "-2.8px",
            color: "#9A9AA0",
          }}
        />
        <p
          style={{
            marginTop: 36,
            maxWidth: 390,
            fontSize: 20,
            lineHeight: "28px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {PARAGRAPH}
        </p>
      </div>

      <div className="lg:hidden">
        <div className="relative h-[420px] w-full overflow-hidden">
          <div
            aria-hidden
            className="absolute left-[-105px] top-0 h-[802px] w-[1224px] origin-top-left scale-[0.52]"
          >
            <HeroArt leftFade={false} />
          </div>
        </div>
        <div className="px-6">
          <Headline
            breakLines={false}
            style={{
              fontSize: 48,
              lineHeight: "52.8px",
              letterSpacing: "-2.4px",
              color: "#9A9AA0",
            }}
          />
          <p
            className="mt-5"
            style={{
              fontSize: 18,
              lineHeight: "25px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {PARAGRAPH}
          </p>
        </div>
      </div>
    </section>
  );
}
