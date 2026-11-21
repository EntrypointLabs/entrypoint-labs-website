import { ArrowRight } from "./brand";

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

function LabPanel() {
  return (
    <div className="relative min-h-[380px] overflow-hidden rounded-[22px] bg-[#f6f5f3] ring-1 ring-black/[0.05] lg:min-h-[460px]">
      <CornerMarks />
      <div
        className="absolute right-[-6%] top-[9%] w-[78%]"
        style={{ transform: "rotate(-1.4deg)" }}
      >
        <div className="motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-1">
          <img
            src="/products/cortex-app.png"
            alt=""
            className="aspect-[16/10] w-full rounded-xl object-cover shadow-[0_22px_50px_-28px_rgba(10,10,10,0.55)] ring-1 ring-black/10"
          />
        </div>
      </div>
      <div
        className="absolute bottom-[8%] left-[6%] w-[62%]"
        style={{ transform: "rotate(1.6deg)" }}
      >
        <div className="motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-1.5">
          <img
            src="/products/pontoon-app.png"
            alt=""
            className="aspect-[16/10] w-full rounded-xl object-cover object-left-top shadow-[0_18px_40px_-22px_rgba(10,10,10,0.5)] ring-1 ring-black/10"
          />
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
