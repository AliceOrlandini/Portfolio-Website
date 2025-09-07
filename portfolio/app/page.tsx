import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Tecnologies from '@/components/Tecnologies';

export default function Home() {
  return (
    <main className='font-raleway max-w-screen'>
      <Hero />
      <Features />
      <HowItWorks />
      <Tecnologies />
      <CTA />
    </main>
  );
}
