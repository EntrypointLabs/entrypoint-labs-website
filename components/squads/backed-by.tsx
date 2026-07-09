export function BackedBy({ className = "" }: { className?: string }) {
  return (
    <section className={`flex flex-col items-center gap-5 ${className}`}>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
        Backed by
      </span>
      <a
        href="https://nickels.vc"
        target="_blank"
        rel="noreferrer"
        className="opacity-85 transition-opacity duration-150 hover:opacity-100"
      >
        <img
          src="/logos/nickelsvc-lockup.png"
          alt="nickels.vc"
          className="h-8 w-auto"
        />
      </a>
    </section>
  );
}
