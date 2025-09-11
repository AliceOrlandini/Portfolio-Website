import Link from 'next/link';
import FlipWordsClient from '@/components/flip-words-client';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className='desktop:h-screen h-fit'>
      <div className='relative'>
        <picture>
          <source
            srcSet='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/birds/birds.webp'
            type='image/webp'
          />
          <img
            src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/birds/birds.png'
            alt='Birds'
            decoding='async'
            fetchPriority='high'
            loading='eager'
            width={119}
            height={65}
            className='tablet:w-28 desktop:-top-10 tablet:left-72 absolute -top-14 left-48 -z-10 w-20'
          />
        </picture>
      </div>
      <div className='desktop:px-32 desktop:py-20 grid grid-cols-12 items-center gap-4 px-10 py-14'>
        <div className='tablet:col-span-7 desktop:col-span-6 col-span-12 w-fit'>
          <h1 className='desktop:text-6xl text-title desktop:max-w-xl desktop:leading-20 text-4xl leading-12 font-bold'>
            Ciao sono Alice! In questo blog parlo
            <br />
            di
            <FlipWordsClient
              className='-z-10 max-w-screen'
              words={['Informatica', 'Ripetizioni', 'Tecnologie', 'Esperienze']}
            />
          </h1>
          <p className='text-paragraph desktop:text-lg mt-10 text-base leading-8 font-medium'>
            La passione per l&#39;informatica è nata sui banchi di scuola quando
            mi sono resa conto che quando arrivava l’ora di informatica dicevo{' '}
            <em>&#34;ooh via, ora ci si rilassa&#34;</em>.<br />
            Da lì è iniziato il mio viaggio in questo mondo, mi sono iscritta ad
            Ingegneria Informatica a Pisa durante la quale ho lavorato, fatto
            parte di una squadra corse e fatto tanti progetti personali. Ma non
            spoilero nulla, ci sarà modo di approfondire tutto nel mio blog!
          </p>
          <Button asChild className='mt-10' variant={'primary'} size={'base'}>
            <Link href='/blog' aria-label='vai alla pagina degli articoli'>
              Vai agli articoli <MoveRight />
            </Link>
          </Button>
        </div>
        <div className='tablet:col-span-5 desktop:col-span-6 desktop:mt-0 col-span-12 mt-10'>
          <picture>
            <source
              srcSet='
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-480.webp 480w,
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-768.webp 768w,
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-1024.webp 1024w
              '
              sizes='(max-width: 768px) 70vw, (max-width: 1024px) 33.33vw, 50vw'
              type='image/webp'
            />
            <source
              srcSet='
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-480.png 480w,
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-768.png 768w,
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-1024.png 1024w
              '
              sizes='(max-width: 768px) 70vw, (max-width: 1024px) 33.33vw, 50vw'
              type='image/png'
            />
            <img
              src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-1024.png'
              alt="Alice Orlandini con una corona d'alloro e il suo un cane a Lucca"
              decoding='async'
              width={1024}
              height={1024}
              fetchPriority='high'
              className='h-auto w-full drop-shadow-md'
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
