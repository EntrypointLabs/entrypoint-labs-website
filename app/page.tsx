import { inter, pixelify } from "@/app/fonts";

import { BackedBy } from "@/components/squads/backed-by";
import { Loader } from "@/components/squads/loader";
import { Nav } from "@/components/squads/nav";
import { Hero } from "@/components/squads/hero";
import { ProductCards } from "@/components/squads/product-cards";
import { MultisigCard } from "@/components/squads/multisig-card";
import { SiteFooter } from "@/components/squads/site-footer";

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
