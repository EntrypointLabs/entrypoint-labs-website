const PILLARS = [
  {
    title: "Consumer payments",
    caption: "PRYDD — hold dollars, send by username.",
  },
  {
    title: "Onchain markets",
    caption: "OpenFutures — perps across every venue.",
  },
  {
    title: "AI memory and developer tools",
    caption: "Cortex and Pontoon.",
  },
];

export function Pillars() {
  return (
    <section className="ep-wrap">
      <dl className="grid grid-cols-1 gap-y-8 border-y border-[#d5d9e2] py-8 sm:grid-cols-3 sm:gap-x-10 sm:py-10">
        {PILLARS.map((pillar, index) => (
          <div
            key={pillar.title}
            className={index > 0 ? "sm:border-l sm:border-[#0a0a0a]/10 sm:pl-10" : ""}
          >
            <dd className="text-[32px] font-medium leading-[1.12] tracking-[-0.03em] text-[#0a0a0a] lg:text-[40px]">
              {pillar.title}
            </dd>
            <dt className="mt-2 text-[14px] font-medium leading-5 text-[#0a0a0a]/62">
              {pillar.caption}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
