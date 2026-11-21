import { ArrowRight } from "./brand";

const PARAGRAPH =
  "We build consumer payments, onchain markets, AI memory and developer tools to bring open networks to everyday life for everyone.";

export function Hero() {
  return (
    <section className="ep-wrap ep-in pt-32 text-center sm:pt-40">
      <h1 className="ep-display mx-auto max-w-[16ch] text-[40px] sm:text-[52px] lg:text-[60px]">
        Products and tools for the onchain{" "}
        <span className="ep-ul">economy</span>
      </h1>
      <p className="mx-auto mt-5 max-w-[40rem] text-[17px] leading-7 text-[#0a0a0a] sm:text-[18px] sm:leading-8">
        {PARAGRAPH}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://prydd.co/litepaper.pdf"
          target="_blank"
          rel="noreferrer"
          className="ep-btn ep-btn-primary"
        >
          Read the litepaper
          <ArrowRight size={14} />
        </a>
        <a href="/company" className="ep-btn ep-btn-secondary">
          Company
        </a>
      </div>
    </section>
  );
}
