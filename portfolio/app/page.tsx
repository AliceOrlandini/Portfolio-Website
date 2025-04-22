import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Tecnologies from "@/components/Tecnologies";

export default function Home() {
  return (
    <main className="font-jakarta">
      <Hero />
      <Tecnologies />
      <HowItWorks />
      <Features />
    </main>
  );
}
