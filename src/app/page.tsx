import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Locations from "@/components/Locations";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import PersonalizedService from "@/components/PersonalizedService";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import FAQs from "@/components/FAQs";
import CTA from "@/components/CTA";
import ClientArea from "@/components/ClientArea";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <TrustBadges />
      <Stats />
      <WhyUs />
      <PersonalizedService />
      <Testimonials />
      <Services />
      <ClientArea />
      <Locations />
      <Pricing />
      <FAQs />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
