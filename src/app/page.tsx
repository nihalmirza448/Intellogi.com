import { ApproachSection } from "@/components/approach-section";
import { ClientsSection } from "@/components/clients-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ServicesSection />
        <WorkSection />
        <ClientsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
