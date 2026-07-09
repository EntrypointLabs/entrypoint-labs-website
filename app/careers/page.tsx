import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Logomark, Wordmark } from "@/components/squads/brand";
import { Loader } from "@/components/squads/loader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Careers — Entrypoint Labs",
  description: "Open roles at Entrypoint Labs.",
};

export default function Page() {
  return (
    <div
      className={`${inter.variable} flex min-h-screen flex-col items-center justify-center bg-[#FCFCFE] text-[#111113]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <Loader />
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3 text-[#111113]">
          <Logomark size={28} />
          <Wordmark className="text-lg" />
        </div>
        <h1 className="mt-12 text-[40px] font-[500] tracking-tight text-[#111113]">
          No open roles right now.
        </h1>
        <p className="mt-4 max-w-md text-base leading-6 text-[#111113]/55">
          We&apos;re a small lab. When that changes, you&apos;ll see it here first.
        </p>
        <a
          href="/"
          className="mt-10 text-sm text-[#111113]/55 transition-opacity hover:opacity-70"
        >
          ← Back home
        </a>
      </div>
    </div>
  );
}
