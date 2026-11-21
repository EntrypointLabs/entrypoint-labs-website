import { BackedBy } from "@/components/squads/backed-by";
import { Hero } from "@/components/squads/hero";
import { LabSection } from "@/components/squads/lab-section";
import { Loader } from "@/components/squads/loader";
import { Nav } from "@/components/squads/nav";
import { NextSteps } from "@/components/squads/next-steps";
import { Pillars } from "@/components/squads/pillars";
import { ProductCards } from "@/components/squads/product-cards";
import { SiteFooter } from "@/components/squads/site-footer";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Loader />
      <Nav />
      <main id="content">
        <Hero />
        <ProductCards />
        <LabSection />
        <Pillars />
        <NextSteps />
        <BackedBy />
      </main>
      <SiteFooter />
    </div>
  );
}
