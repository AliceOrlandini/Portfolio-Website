import CTA from '@/app/(home)/_components/cta';
import Features from '@/app/(home)/_components/features';
import Hero from '@/app/(home)/_components/hero';
import Character from '@/app/(home)/_components/character';
import Tecnologies from '@/app/(home)/_components/tecnologies';

export default function Home() {
  return (
    <main className='font-raleway max-w-screen'>
      <Hero />
      <Features />
      <Character />
      <Tecnologies />
      <CTA />
    </main>
  );
}
