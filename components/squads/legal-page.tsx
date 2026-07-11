import type { ReactNode } from "react";
import { Inter, Pixelify_Sans } from "next/font/google";

import { Loader } from "@/components/squads/loader";
import { Nav } from "@/components/squads/nav";
import { SiteFooter } from "@/components/squads/site-footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-pixel",
});

const COLUMN = "mx-auto w-[800px] max-w-full px-6 lg:px-0";

export function LegalSection({ children }: { children: ReactNode }) {
  return <p className="text-[20px] leading-[28px] text-black/60">{children}</p>;
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
    <div
      className={`${inter.variable} ${pixelify.variable} relative min-h-screen overflow-x-clip bg-[#FCFCFE]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <Loader />
      <Nav />
      <main>
        <div className="pt-[120px] lg:pt-[140px]">
          <h1 className="px-6 text-center font-medium tracking-[-1.5px] text-[40px] leading-[44px] text-black lg:px-0 lg:tracking-[-2px] lg:text-[56px] lg:leading-[61.6px]">
            {title}
          </h1>
          <p className="mt-5 text-center text-[20px] leading-[28px] text-black/60">
            Last Updated: {lastUpdated}
          </p>
          <div className={`${COLUMN} mt-16 space-y-7 pb-[160px]`}>
            {children}
          </div>
        </div>
      </main>
      {/* SiteFooter is transparent and relies on a dark backdrop from the page. */}
      <div className="bg-[var(--sq-canvas)]">
        <SiteFooter />
      </div>
    </div>
  );
}
