import { ArrowRight, OpenFuturesMark, PryddMark } from "./brand";

function CornerMarks() {
  const mark = "pointer-events-none absolute h-3.5 w-3.5 border-[#0a0a0a]/35";
  return (
    <>
      <span className={`${mark} left-3.5 top-3.5 border-l border-t`} />
      <span className={`${mark} right-3.5 top-3.5 border-r border-t`} />
      <span className={`${mark} bottom-3.5 left-3.5 border-b border-l`} />
      <span className={`${mark} bottom-3.5 right-3.5 border-b border-r`} />
    </>
  );
}

const FRAME =
  "aspect-[16/10] w-full overflow-hidden rounded-xl shadow-[0_22px_50px_-28px_rgba(10,10,10,0.55)] ring-1 ring-black/10";

/* The same layered frame as before, now holding the two flagships:
   PRYDD's sky and account behind, OpenFutures' grid and ticket in front. */
function LabPanel() {
  return (
    <div className="relative min-h-[380px] overflow-hidden rounded-[22px] bg-[#f6f5f3] ring-1 ring-black/[0.05] lg:min-h-[460px]">
      <CornerMarks />
      <div
        className="absolute right-[-6%] top-[9%] w-[78%]"
        style={{ transform: "rotate(-1.4deg)" }}
      >
        <div className="motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-1">
          <PryddFrame />
        </div>
      </div>
      <div
        className="absolute bottom-[8%] left-[6%] w-[62%]"
        style={{ transform: "rotate(1.6deg)" }}
      >
        <div className="motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-1.5">
          <OpenFuturesFrame />
        </div>
      </div>
    </div>
  );
}

function PryddFrame() {
  return (
    <div className={`${FRAME} relative bg-[#d4e1ed]`}>
      <img
        src="/products/prydd-sky.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
      />
      <span className="absolute right-[6%] top-[8%] inline-flex items-center gap-1.5 rounded-full bg-white py-[3px] pl-[3px] pr-2.5 text-[10px] tracking-[-0.02em] text-black shadow-[0_1px_2px_rgba(0,0,0,0.07)]">
        <img src="/products/prydd-maya.png" alt="" className="h-4 w-4 rounded-full object-cover" />
        @maya
        <span className="text-[#727272]">−$25</span>
      </span>
      <div className="absolute left-[7%] top-[22%] w-[58%] rounded-[14px] bg-white px-3.5 pb-3 pt-3 text-black shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_12px_28px_-12px_rgba(0,0,0,0.22)]">
        <div className="flex items-center justify-between border-b border-[#eee] pb-2 text-[9px] leading-none">
          <span className="flex items-center gap-1.5 font-medium">
            <PryddMark size={11} />
            Your account
          </span>
          <span className="text-[#727272]">USD</span>
        </div>
        <span className="mt-2.5 block text-[9px] leading-none text-[#727272]">Dollar balance</span>
        <strong className="mt-1 block text-[22px] font-medium leading-none tracking-[-0.045em]">
          $250<span className="text-[0.76em]">.00</span>
        </strong>
      </div>
    </div>
  );
}

function OpenFuturesFrame() {
  return (
    <div
      className={`${FRAME} @container relative bg-[#0e0e0f] [--cols:12] [--rows:8]`}
      style={{ fontFamily: "var(--font-geist-sans), Geist, sans-serif" }}
    >
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
            "polygon(calc(100% - 4 * var(--u)) 0, 100% 0, 100% calc(3 * var(--u)), calc(100% - 1 * var(--u)) calc(3 * var(--u)), calc(100% - 1 * var(--u)) calc(2 * var(--u)), calc(100% - 2 * var(--u)) calc(2 * var(--u)), calc(100% - 2 * var(--u)) calc(1 * var(--u)), calc(100% - 4 * var(--u)) calc(1 * var(--u)))",
        }}
      />
      <div
        className="absolute inset-0 [--u:calc(100cqw/var(--cols))]"
        style={{
          background: "linear-gradient(45deg, #b4c2f9 0%, #8299f5 45%, #5a7cf0 100%)",
          clipPath:
            "polygon(0 calc((var(--rows) - 3) * var(--u)), calc(1 * var(--u)) calc((var(--rows) - 3) * var(--u)), calc(1 * var(--u)) calc((var(--rows) - 2) * var(--u)), calc(3 * var(--u)) calc((var(--rows) - 2) * var(--u)), calc(3 * var(--u)) calc((var(--rows) - 1) * var(--u)), calc(5 * var(--u)) calc((var(--rows) - 1) * var(--u)), calc(5 * var(--u)) 100%, 0 100%)",
        }}
      />
      <div className="absolute left-[8%] top-[14%] w-[84%] rounded-[4px] border border-white/[0.08] bg-[#161616]/85 px-3 pb-3 pt-2.5 text-[#f5f5f4] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7)] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-[#242424] pb-2 text-[9px] leading-none">
          <span className="flex items-center gap-1.5 font-medium">
            <OpenFuturesMark size={11} />
            Order ticket
          </span>
          <span className="text-[#969694]">Perps</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap py-1.5">
          <img src="/logos/openfutures-btc.svg" alt="" className="h-3.5 w-3.5 shrink-0 rounded-full" />
          <span className="text-[10px] font-medium tracking-[-0.01em]">BTC-PERP</span>
          <span
            className="ml-auto text-[10px] font-medium tabular-nums"
            style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
          >
            86,346.4
          </span>
          <span className="text-[10px] font-medium tabular-nums text-[#6f97ff]">+3.64%</span>
        </div>
        <div className="mt-1 grid grid-cols-2 gap-1 rounded-[4px] border border-[#242424] bg-[#1b1b1b] p-1">
          <span className="flex h-7 items-center justify-center rounded-[3px] bg-[#2d63f5] text-[10px] font-semibold text-white">
            Buy / Long
          </span>
          <span className="flex h-7 items-center justify-center rounded-[3px] text-[10px] font-semibold text-[#969694]">
            Sell / Short
          </span>
        </div>
      </div>
    </div>
  );
}

export function LabSection() {
  return (
    <section className="ep-wrap py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="ep-eyebrow">The lab</p>
          <h2 className="ep-h2 mt-4 max-w-[14ch] text-[36px] sm:text-[44px] lg:text-[48px]">
            An R&amp;D lab for the onchain economy.
          </h2>
          <p className="mt-5 max-w-[36rem] text-[17px] leading-7 text-[#0a0a0a] sm:text-[18px] sm:leading-8">
            Entrypoint Labs is a small product research and development lab. We
            design, build, and operate financial and developer software on open
            networks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://prydd.co/litepaper.pdf"
              target="_blank"
              rel="noreferrer"
              className="ep-btn ep-btn-primary"
            >
              Read the litepaper
              <ArrowRight size={14} />
            </a>
            <a
              href="https://x.com/entrypointlabs"
              target="_blank"
              rel="noreferrer"
              className="ep-btn ep-btn-secondary"
            >
              Follow on X
            </a>
          </div>
        </div>
        <div className="group">
          <LabPanel />
        </div>
      </div>
    </section>
  );
}
