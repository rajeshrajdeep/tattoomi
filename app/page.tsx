// app/page.tsx

import { AddressSection } from "@/components/pagesections/AddressSection";
import { HeroSection } from "@/components/pagesections/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AddressSection />
    </main>
  );
}
