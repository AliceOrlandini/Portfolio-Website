import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import ContactMe1Image from '@/public/assets/contact-me/contact-me-1-1024.png';

export default function CTA() {
  return (
    <section className='desktop:mx-32 bg-primary mx-4 rounded-xl pb-10 text-white'>
      <div className='desktop:px-20 desktop:pt-20 grid grid-cols-12 gap-4 px-10 pt-15'>
        <div className='desktop:col-span-6 col-span-12'>
          <h1 className='desktop:text-5xl desktop:leading-14 text-2xl leading-8 font-bold'>
            Ti va di leggere qualche articolo?
          </h1>
          <p className='desktop:text-lg mt-10 text-base font-medium'>
            In questo blog parlo di informatica, ripetizioni, tecnologie e delle
            mie esperienze. Se sei curioso di sapere di cosa tratto, dai
            un&#39;occhiata agli articoli!
          </p>
          <Button asChild variant={'secondary'} size={'base'} className='mt-10'>
            <Link href='/blog' aria-label='vai alla pagina degli articoli'>
              Vai agli Articoli <MoveRight />
            </Link>
          </Button>
        </div>
        <div className='desktop:col-span-6 col-span-12'>
          <Image
            src={ContactMe1Image}
            alt='Contattami'
            sizes='(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw'
            className='tablet:w-1/2 desktop:w-full tablet:mx-auto h-full w-full max-w-xl rounded-md object-cover'
          />
        </div>
      </div>
    </section>
  );
}
