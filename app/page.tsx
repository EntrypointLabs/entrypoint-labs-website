import { Header } from "@/components/header";
import { AnimatedBackground } from "@/components/animated-background";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="flex items-center gap-2 text-muted-foreground mb-12">
              <Globe className="w-5 h-5" />
              <span className="text-sm md:text-base">Global</span>
            </div>

            {/* Hero Section */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              Entrypoint Labs is a web3 & AI research company
            </h1>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground mb-16">
              <p>
                We are currently building{" "}
                <span className="text-foreground font-semibold">Xend</span>, a
                revolutionary platform that plugs stablecoin payments into the
                internet.
              </p>
            </div>

            {/* Backed By Section */}
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-semibold">
                Backed and Supported by
              </h2>

              <div className="flex items-center gap-3">
                <a
                  href="https://nickels.vc"
                  target="_blank"
                  className="flex items-center gap-2 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      N
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg group-hover:underline">
                      Nickels.vc
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Venture Fund
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 mt-auto">
          <p className="text-sm text-muted-foreground">
            © 2025 Entrypoint Labs. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
