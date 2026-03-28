import Link from 'next/link';
import Image from 'next/image';
import FlipWordsClient from '@/components/flip-words-client';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import BirdsImage from '@/public/assets/birds/birds.png';
import HeroImage from '@/public/assets/hero/hero-1024.png';

export default function Hero() {
  return (
    <section className='h-fit'>
      <div className='relative'>
        <Image
          src={BirdsImage}
          alt='Birds'
          priority
          className='tablet:w-28 desktop:-top-10 tablet:left-72 absolute -top-14 left-48 -z-10 w-20'
        />
      </div>
      <div className='desktop:px-32 desktop:py-20 grid grid-cols-12 items-center gap-4 px-10 py-14'>
        <div className='tablet:col-span-7 desktop:col-span-6 col-span-12 w-fit'>
          <h1 className='desktop:text-6xl text-title desktop:max-w-xl desktop:leading-20 text-4xl leading-12 font-bold'>
            Ciao sono Alice! In questo blog parlo
            <br />
            di{' '}
            <FlipWordsClient
              className='-z-10 max-w-screen'
              words={['Informatica', 'Ripetizioni', 'Tecnologie', 'Esperienze']}
            />
          </h1>
          <p className='text-paragraph desktop:text-lg mt-10 text-base leading-8 font-medium'>
            Benvenuto nel mio angolo sul web, dove condivido la mia passione per
            l&#39;informatica, nata sui banchi di scuola quando arrivava
            l&#39;ora di informatica e pensavo
            <em> &#34;ooh via, ora ci si rilassa&#34;</em>.<br />
          </p>
          <Button asChild className='mt-10' variant={'primary'} size={'base'}>
            <Link href='/blog' aria-label='vai alla pagina degli articoli'>
              Vai agli articoli <MoveRight />
            </Link>
          </Button>
        </div>
        <div className='tablet:col-span-5 desktop:col-span-6 desktop:mt-0 col-span-12 mt-10'>
          <Image
            src={HeroImage}
            alt="Alice Orlandini con una corona d'alloro e il suo un cane a Lucca"
            priority
            sizes='(max-width: 768px) 70vw, (max-width: 1024px) 33.33vw, 50vw'
            className='h-auto w-full drop-shadow-md'
          />
        </div>
      </div>
    </section>
  );
}
