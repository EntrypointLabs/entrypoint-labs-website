import type { ReactNode } from "react";

import { Loader } from "@/components/squads/loader";
import { Nav } from "@/components/squads/nav";
import { SiteFooter } from "@/components/squads/site-footer";

const COLUMN = "mx-auto w-full max-w-[720px] px-4 lg:px-6";

export function LegalSection({ children }: { children: ReactNode }) {
  return (
    <p className="text-[17px] leading-[1.7] text-[#0a0a0a]/78">{children}</p>
  );
}

export function LegalLead({ children }: { children: ReactNode }) {
  return <span className="font-bold">{children}</span>;
}

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-white">
      <Loader />
      <Nav />
      <main id="content">
        <div className={`${COLUMN} pt-32 lg:pt-40`}>
          <p className="ep-eyebrow">Legal</p>
          <h1 className="ep-h2 mt-4 text-[40px] sm:text-[48px]">{title}</h1>
          <p className="mt-4 text-[14px] font-medium text-[#0a0a0a]/60">
            Last Updated: {lastUpdated}
          </p>
          <div className="mt-12 space-y-7 border-t border-[#d5d9e2] pt-10 pb-24">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
