import { ArrowLink, Logomark } from "./brand";

const NAV_ITEMS = [
  "Overview",
  "Activity",
  "Approvals",
  "Vaults",
  "Transfers",
  "Swap",
  "Yield",
  "Settings",
];

const PILLS = ["Transfer", "Top up", "Swap"];

const TABS = ["Holdings", "Requests", "History"];

const BALANCES = [
  { amount: "1,180,500.00", ticker: "DAI", color: "#5B8DEF" },
  { amount: "1,219,500.00", ticker: "USDe", color: "#3ECF8E" },
];

function TrafficDots() {
  return (
    <div className="flex shrink-0 items-center gap-[6px]">
      <span className="h-2 w-2 rounded-full" style={{ background: "#FF5F57" }} />
      <span className="h-2 w-2 rounded-full" style={{ background: "#FEBC2E" }} />
      <span className="h-2 w-2 rounded-full" style={{ background: "#28C840" }} />
    </div>
  );
}

function ChromeGlyphs() {
  return (
    <div className="flex shrink-0 items-center gap-2.5 text-white/30">
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
        <path
          d="M3.5 5 H2.5 V10 H9.5 V5 H8.5 M6 1 V7 M4 3 L6 1 L8 3"
          stroke="currentColor"
          strokeWidth={1.1}
          strokeLinejoin="round"
        />
      </svg>
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
        <path
          d="M6 2 V10 M2 6 H10"
          stroke="currentColor"
          strokeWidth={1.1}
          strokeLinecap="round"
        />
      </svg>
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
        <rect
          x={1.5}
          y={3.5}
          width={7}
          height={7}
          rx={1.5}
          stroke="currentColor"
          strokeWidth={1.1}
        />
        <path
          d="M4 1.5 H9 A1.5 1.5 0 0 1 10.5 3 V8"
          stroke="currentColor"
          strokeWidth={1.1}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function AreaChartStrip() {
  return (
    <svg
      viewBox="0 0 300 36"
      preserveAspectRatio="none"
      className="mt-2 h-8 w-full shrink-0"
      aria-hidden
    >
      <path
        d="M0 30 C30 27 55 20 85 22 C115 24 140 12 175 15 C210 18 245 7 300 10 L300 36 L0 36 Z"
        fill="rgba(255,255,255,0.045)"
      />
      <path
        d="M0 30 C30 27 55 20 85 22 C115 24 140 12 175 15 C210 18 245 7 300 10"
        fill="none"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth={1}
      />
    </svg>
  );
}

function MultisigArt() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[10px] border border-white/10 bg-[#1B1C20]">
      <div className="flex h-10 w-full shrink-0 items-center justify-between border-b border-white/10 px-4">
        <TrafficDots />
        <div className="flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1">
          <span className="h-[6px] w-[6px] shrink-0 rounded-[1.5px] border border-white/30" />
          <span className="whitespace-nowrap text-[10px] leading-none text-white/40">
            multisig.stacks.app
          </span>
        </div>
        <ChromeGlyphs />
      </div>

      <div className="flex min-h-0 flex-1">
        <div className="flex w-[120px] shrink-0 flex-col gap-[9px] border-r border-white/10 p-4">
          <span className="mb-1 flex h-4 w-4 items-center justify-center rounded-[5px] bg-white/10 text-white">
            <Logomark size={10} />
          </span>
          {NAV_ITEMS.map((item) => (
            <span
              key={item}
              className="truncate text-[10.5px] leading-none text-white/35"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col px-5 py-3">
          <div className="flex shrink-0 items-center justify-end gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-[5px]">
              <span className="h-[5px] w-[5px] rounded-full bg-[#3ECF8E]/80" />
              <span className="h-[5px] w-9 rounded-full bg-white/15" />
            </span>
            <span className="whitespace-nowrap rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] leading-none text-white/45">
              4kN2…x8Qf
            </span>
          </div>

          <span className="mt-2 text-[11px] leading-none text-white/40">
            Vault balance
          </span>
          <span className="mt-2 whitespace-nowrap text-[22px] font-medium leading-none text-white">
            $5,700,000.00
          </span>

          <div className="mt-2 flex flex-wrap gap-2">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="whitespace-nowrap rounded-full bg-white/10 px-3 py-[5px] text-[10.5px] leading-none text-white/80"
              >
                {pill}
              </span>
            ))}
          </div>

          <AreaChartStrip />

          <div className="mt-2 flex shrink-0 items-center gap-4 border-b border-white/10 pb-2">
            {TABS.map((tab, i) => (
              <span
                key={tab}
                className={`whitespace-nowrap text-[11.5px] leading-none ${
                  i === 0 ? "text-white" : "text-white/35"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="mt-2 flex shrink-0 flex-col gap-2">
            <span className="text-[10px] leading-none text-white/35">
              Stable assets
            </span>
            <span className="whitespace-nowrap text-[15px] font-medium leading-none text-white/85">
              $2,400,000.00
            </span>
            {BALANCES.map((b) => (
              <div key={b.ticker} className="flex items-center gap-2">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: b.color }}
                />
                <span className="whitespace-nowrap text-[11.5px] leading-none text-white/85">
                  {b.amount}
                </span>
                <span className="whitespace-nowrap text-[10.5px] leading-none text-white/40">
                  {b.ticker}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MultisigCard() {
  return (
    <section className="mx-auto mt-[10px] w-[1150px] max-w-full px-6 lg:px-0">
      <a
        href="#"
        className="relative block cursor-pointer overflow-hidden rounded-[18px] bg-[#0E0E0F] lg:h-[303px]"
      >
        {/* Desktop */}
        <div className="relative hidden h-full lg:block">
          <div className="absolute left-[38px] top-[34px]">
            <h3 className="text-2xl font-medium leading-[26.4px] text-white">
              Multisig
            </h3>
            <p className="mt-3 max-w-[210px] text-base leading-[22.4px] text-white/55">
              A multisig platform to protect onchain treasuries.
            </p>
          </div>

          <span className="absolute right-[38px] top-[34px] text-white">
            <Logomark size={24} />
          </span>

          <div className="absolute left-[453px] top-1/2 h-[277px] w-[505px] -translate-y-1/2">
            <MultisigArt />
          </div>

          <ArrowLink />
        </div>

        {/* Mobile */}
        <div className="relative pb-[56px] pt-7 lg:hidden">
          <div className="px-6">
            <span className="absolute right-6 top-7 text-white">
              <Logomark size={24} />
            </span>
            <h3 className="text-2xl font-medium leading-[26.4px] text-white">
              Multisig
            </h3>
            <p className="mt-3 max-w-[260px] text-base leading-[22.4px] text-white/55">
              A multisig platform to protect onchain treasuries.
            </p>
          </div>
          {/* The mockup keeps its fixed desktop layout and is scaled down
              proportionally (342/505 ≈ 0.677) so nothing reflows or truncates. */}
          <div className="mt-6 px-6">
            <div className="mx-auto h-[188px] w-[342px] max-w-full overflow-hidden">
              <div className="h-[277px] w-[505px] origin-top-left scale-[0.677]">
                <MultisigArt />
              </div>
            </div>
          </div>
          <ArrowLink />
        </div>
      </a>
    </section>
  );
}
