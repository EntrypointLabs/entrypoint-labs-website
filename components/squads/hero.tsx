import type { CSSProperties } from "react";

import { Logomark } from "@/components/squads/brand";

const H1_LINES = ["Products and rails", "for the open dollar", "economy"];

const PARAGRAPH =
  "We build on open networks, programmable money and modern capital rails to bring better financial services to every team, founder and builder.";

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
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
            "linear-gradient(155deg,#1d1e22 0%,#0a0a0c 65%,#050506 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 60px 100px -30px rgba(0,0,0,0.75)",
          clipPath: "polygon(4% 3%, 100% 0%, 100% 100%, 0% 97%)",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "24%",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            padding: "11% 8%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Logomark size={14} style={{ color: "rgba(255,255,255,0.5)" }} />
          <div
            style={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              gap: 9,
            }}
          >
            <Bar w="70%" o={0.32} />
            <Bar w="55%" />
            <Bar w="60%" />
            <Bar w="45%" />
            <Bar w="58%" />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            padding: "8% 6% 6%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Amount
              int="$818,240"
              dec="00"
              style={{
                color: "rgba(255,255,255,0.92)",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            />
            <div style={{ display: "flex", gap: 6 }}>
              <span
                style={{
                  width: 34,
                  height: 13,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.9)",
                }}
              />
              <span
                style={{
                  width: 44,
                  height: 13,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                }}
              />
            </div>
          </div>

          <span
            style={{
              marginTop: 5,
              fontSize: 10,
              color: "#34D399",
              fontWeight: 500,
            }}
          >
            +$46,120.75
          </span>

          <div style={{ position: "relative", flex: 1, marginTop: "6%" }}>
            <TrendLine />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginTop: "6%",
            }}
          >
            {[18, 22, 26, 20].map((v, i) => (
              <div
                key={i}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Bar w={`${v}%`} o={0.22} />
                <Bar w="14%" o={0.34} />
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
        left: "40%",
        top: "29%",
        width: "23%",
        aspectRatio: "0.82",
        zIndex: 30,
        transform: "rotate(-7deg)",
        borderRadius: 34,
        background: "linear-gradient(160deg,#e9e9ec,#c7c7cd)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 50px 90px -25px rgba(0,0,0,0.7)",
        padding: 8,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 26,
          background: "linear-gradient(180deg,#fbfbfc,#e7e7ea)",
          overflow: "hidden",
          padding: "13% 10% 10%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: "32%",
            height: 10,
            borderRadius: 999,
            background: "#1c1c1e",
          }}
        />

        <Amount
          int="$19,254"
          dec="00"
          style={{
            marginTop: "16%",
            fontSize: 17,
            fontWeight: 600,
            color: "#18181b",
            letterSpacing: "-0.02em",
          }}
        />
        <Bar
          w="30%"
          h={5}
          style={{ marginTop: 8, background: "rgba(0,0,0,0.12)" }}
        />

        <div
          style={{
            marginTop: "14%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: "10%",
            columnGap: "8%",
          }}
        >
          {tiles.map((tile) => (
            <div
              key={tile.value}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 7,
                  background: tile.bg,
                }}
              />
              <span style={{ fontSize: 10, fontWeight: 600, color: "#3f3f46" }}>
                {tile.value}
              </span>
            </div>
          ))}
        </div>

        <span
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "#111114",
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
        left: "50%",
        top: "55%",
        width: "17%",
        aspectRatio: "1.586",
        zIndex: 20,
        transform: "rotate(11deg)",
        borderRadius: 14,
        overflow: "hidden",
        background:
          "repeating-linear-gradient(100deg, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0.16) 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 3px), linear-gradient(155deg,#d4d4d8,#9a9aa2)",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: "0 40px 70px -20px rgba(0,0,0,0.65)",
        padding: "10% 9%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Logomark size={16} style={{ color: "rgba(30,30,34,0.7)" }} />
      <span
        style={{
          fontSize: 10,
          letterSpacing: "0.12em",
          color: "rgba(30,30,34,0.55)",
        }}
      >
        •••• 4821
      </span>
    </div>
  );
}

function HeroArt() {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(60% 55% at 74% 38%, rgba(255,255,255,0.06), transparent 70%), radial-gradient(50% 50% at 46% 55%, rgba(255,255,255,0.05), transparent 70%)",
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
          background:
            "linear-gradient(90deg,#111113 0%, rgba(17,17,19,0.4) 22%, transparent 42%), linear-gradient(180deg, transparent 62%, #111113 100%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full lg:h-[554px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 z-0 hidden lg:block"
        style={{ top: -80, height: 802 }}
      >
        <div
          className="absolute inset-y-0 overflow-hidden"
          style={{ left: 216, right: 0 }}
        >
          <HeroArt />
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden w-[1150px] max-w-full pt-[167px] lg:block">
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
          <HeroArt />
        </div>
        <div className="px-6 pt-8">
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
