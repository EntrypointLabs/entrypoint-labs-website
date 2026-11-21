export function BackedBy({ className = "" }: { className?: string }) {
  return (
    <section className={`ep-wrap flex flex-col items-center gap-4 py-16 text-center lg:py-20 ${className}`}>
      <span className="ep-eyebrow">Backed by</span>
      <a
        href="https://nickels.vc"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-2xl bg-[#0a0a0a] px-4 py-2.5 transition-transform duration-200 motion-safe:hover:-translate-y-0.5"
      >
        <img
          src="/logos/nickelsvc-lockup.png"
          alt="nickels.vc"
          className="h-7 w-auto"
        />
      </a>
    </section>
  );
}
