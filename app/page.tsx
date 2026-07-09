import { Inter, Pixelify_Sans } from "next/font/google";

import { BackedBy } from "@/components/squads/backed-by";
import { Loader } from "@/components/squads/loader";
import { Nav } from "@/components/squads/nav";
import { Hero } from "@/components/squads/hero";
import { ProductCards } from "@/components/squads/product-cards";
import { MultisigCard } from "@/components/squads/multisig-card";
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

export default function Page() {
  return (
    <div
      className={`${inter.variable} ${pixelify.variable} sq-canvas relative min-h-screen overflow-x-clip`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <Loader />
      <Nav />
      <main>
        <Hero />
        <ProductCards />
        <MultisigCard />
        <BackedBy className="mt-24 lg:mt-32" />
      </main>
      <SiteFooter />
    </div>
  );
}
