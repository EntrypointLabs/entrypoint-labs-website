import { ArrowLink, CortexMark } from "./brand";

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

function MultisigArt() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[10px] border border-white/10 bg-[#1B1C20]">
      <div className="flex h-10 w-full shrink-0 items-center justify-between border-b border-white/10 px-4">
        <TrafficDots />
        <div className="flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1">
          <span className="h-[6px] w-[6px] shrink-0 rounded-[1.5px] border border-white/30" />
          <span className="whitespace-nowrap text-[10px] leading-none text-white/40">
            usecortexai.xyz
          </span>
        </div>
        <ChromeGlyphs />
      </div>

      <div className="relative min-h-0 flex-1">
        <img
          src="/products/cortex-app.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export function MultisigCard() {
  return (
    <section className="mx-auto mt-[10px] w-[1150px] max-w-full px-6 lg:px-0">
      <a
        href="https://www.usecortexai.xyz"
        target="_blank"
        rel="noreferrer"
        className="relative block cursor-pointer overflow-hidden rounded-[18px] bg-[#0E0E0F] lg:h-[303px]"
      >
        {/* Desktop */}
        <div className="relative hidden h-full lg:block">
          <div className="absolute left-[38px] top-[34px]">
            <h3 className="text-2xl font-medium leading-[26.4px] text-white">
              Cortex
            </h3>
            <p className="mt-3 max-w-[210px] text-base leading-[22.4px] text-white/55">
              A sovereign, encrypted memory layer for AI.
            </p>
          </div>

          <span className="absolute right-[38px] top-[34px] text-white">
            <CortexMark size={24} />
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
              <CortexMark size={24} />
            </span>
            <h3 className="text-2xl font-medium leading-[26.4px] text-white">
              Cortex
            </h3>
            <p className="mt-3 max-w-[260px] text-base leading-[22.4px] text-white/55">
              A sovereign, encrypted memory layer for AI.
            </p>
          </div>
          {/* The mockup keeps its fixed desktop layout and is scaled down
              proportionally (342/505 ≈ 0.677) so nothing reflows or truncates.
              The section already pads the card by px-6 at this breakpoint, so
              this wrapper adds none — 342px fits a 390px viewport exactly. */}
          <div className="mt-6">
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
