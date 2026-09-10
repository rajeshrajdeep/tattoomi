// app/page.tsx

import { PageFooter } from "@/components/navigation/PageFooter";
import { AboutSection } from "@/components/pagesections/AboutSection";
import { AddressSection } from "@/components/pagesections/AddressSection";
import { HeroSection } from "@/components/pagesections/HeroSection";
import { PortfolioSection } from "@/components/pagesections/PortfolioSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <AddressSection />
      <PageFooter />
    </main>
  );
}
