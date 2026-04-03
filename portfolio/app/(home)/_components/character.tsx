import Image from 'next/image';
import { CHARACTER_ITEMS } from '@/lib/constants';
import Character1 from '@/public/assets/character/character-1-1024.png';
import Character2 from '@/public/assets/character/character-2-1024.png';
import Character3 from '@/public/assets/character/character-3-1024.png';
import EllipseImage from '@/public/assets/ellipse/ellipse.png';

const characterImages: Record<string, any> = {
  'character-1': Character1,
  'character-2': Character2,
  'character-3': Character3
};

export default function Character() {
  return (
    <section className='tablet:pt-52 desktop:pt-72 font-raleway tablet:py-32 relative isolate mt-24 overflow-hidden pt-24'>
      <h2 className='desktop:text-4xl font-raleway absolute inset-x-0 top-0 text-center text-2xl font-bold'>
        Com&#39;è il mio carattere?
      </h2>
      <Image
        src={EllipseImage}
        alt='Ellisse decorativa di sfondo'
        className='tablet:block tablet:absolute pointer-events-none top-0 left-1/2 hidden w-225 -translate-x-1/2 select-none'
      />
      <div className='tablet:mb-0 tablet:px-6 desktop:px-8 relative mx-auto mb-20 max-w-7xl px-4'>
        <div className='tablet:grid-cols-3 tablet:gap-x-8 grid grid-cols-1 gap-y-20'>
          {CHARACTER_ITEMS.map(({ id, title, copy, img }, idx) => (
            <article
              key={id}
              className='flex flex-col items-center text-center'
            >
              <Image
                src={characterImages[img]}
                alt={title}
                sizes='(max-width: 768px) 70vw, 33.33vw'
                className={`mb-6 w-62.5 ${
                  idx === 1 ? 'tablet:-mt-48 w-87.5' : ''
                }`}
              />

              <div className='relative mb-6 inline-flex items-center justify-center'>
                <span className='ring-secondary/70 absolute inline-flex h-12 w-12 rounded-full ring-2 ring-offset-2 ring-offset-white' />
                <span className='bg-secondary inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold text-white'>
                  {idx + 1}
                </span>
              </div>

              <h2 className='text-title text-2xl font-semibold'>{title}</h2>
              <p className='text-paragraph desktop:text-[17px] tablet:max-w-md mt-3 max-w-xs font-medium'>
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
