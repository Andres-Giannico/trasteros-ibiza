import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Locations from "@/components/Locations";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import FAQs from "@/components/FAQs";
import CTA from "@/components/CTA";
import StorageWidget from "@/components/StorageWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Stats />
      <WhyUs />
      <Services />
      <Locations />
      <Pricing />
      <StorageWidget />
      <FAQs />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
