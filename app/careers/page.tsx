import type { Metadata } from "next";

import { ArrowRight } from "@/components/squads/brand";
import { Loader } from "@/components/squads/loader";
import { Nav } from "@/components/squads/nav";
import { SiteFooter } from "@/components/squads/site-footer";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at Entrypoint Labs.",
  alternates: {
    canonical: "/careers",
  },
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Loader />
      <Nav />
      <main
        id="content"
        className="ep-wrap flex flex-1 flex-col items-center justify-center py-36 text-center"
      >
        <p className="ep-eyebrow">Careers</p>
        <h1 className="ep-display mt-4 max-w-[16ch] text-[40px] sm:text-[52px]">
          No open roles right now.
        </h1>
        <p className="mt-5 max-w-md text-[17px] leading-7 text-[#0a0a0a]/70">
          We&apos;re a small lab. When that changes, you&apos;ll see it here first.
        </p>
        <a href="/" className="ep-btn ep-btn-secondary mt-8">
          <ArrowRight size={14} className="rotate-180" />
          Back home
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
