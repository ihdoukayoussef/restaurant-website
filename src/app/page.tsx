import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { SiteFooter } from "@/components/site-footer";
import { AtmosphereSection, ExperienceSection, LocationSection, ReservationsSection } from "@/components/site-sections";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ExperienceSection />
        <MenuSection />
        <AtmosphereSection />
        <ReservationsSection />
        <LocationSection />
      </main>
      <SiteFooter />
    </>
  );
}
