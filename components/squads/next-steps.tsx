import { ArrowRight } from "./brand";

const STEPS = [
  {
    title: "Read the protocol",
    body: "We build on open networks, and open source the parts of the stack that make the ecosystem stronger.",
    href: "https://prydd.co/litepaper.pdf",
    label: "Read the litepaper",
    external: true,
    tone: "primary" as const,
  },
  {
    title: "The company",
    body: "A small product research and development lab. Design, protocol, application, and infrastructure sit under one roof.",
    href: "/company",
    label: "About the lab",
    external: false,
    tone: "outline" as const,
  },
];

export function NextSteps() {
  return (
    <section className="ep-wrap py-20 lg:py-28">
      <h2 className="ep-h2 mb-10 text-center text-[30px] sm:text-[36px]">
        Where to go next
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {STEPS.map((step) => (
          <article
            key={step.title}
            className="flex flex-col rounded-[22px] bg-[#f6f5f3] p-8 ring-1 ring-black/[0.04] lg:p-10"
          >
            <h3 className="text-[24px] font-medium tracking-[-0.02em] text-[#0a0a0a]">
              {step.title}
            </h3>
            <p className="mt-3 max-w-[40rem] text-[15px] leading-6 text-[#0a0a0a]/70">
              {step.body}
            </p>
            <a
              href={step.href}
              {...(step.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className={`ep-btn ep-btn-block mt-8 ${
                step.tone === "primary" ? "ep-btn-primary" : "ep-btn-outline bg-white"
              }`}
            >
              {step.label}
              <ArrowRight size={14} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
