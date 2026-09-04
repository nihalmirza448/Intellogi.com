import { ApproachSection } from "@/components/approach-section";
import { ClientsSection } from "@/components/clients-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { MarketingChrome } from "@/components/marketing-chrome";
import { ServicesSection } from "@/components/services-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <MarketingChrome>
      <Hero />
      <ClientsSection />
      <ServicesSection />
      <WorkSection />
      <ApproachSection />
      <ContactSection />
    </MarketingChrome>
  );
}
