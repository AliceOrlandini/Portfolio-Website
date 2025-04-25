import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Tecnologies from "@/components/Tecnologies";

export default function Home() {
  return (
    <main className="font-raleway">
      <Hero />
      <Tecnologies />
      <HowItWorks />
      <Features />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
