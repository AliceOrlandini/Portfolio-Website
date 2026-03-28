import { FEATURES_ITEMS } from '@/lib/constants';
import WavyLoopsBottom from '@/public/assets/dividers/wavy-loops-bottom.svg';
import WavyLoopsTop from '@/public/assets/dividers/wavy-loops-top.svg';
import Image from 'next/image';
import FeaturesImage from '@/public/assets/features/features-1024.png';

export default function Features() {
  return (
    <>
      <Image
        src={WavyLoopsBottom}
        alt='Onda decorativa di separazione'
        className='-mt-3 h-auto w-full'
      />
      <section>
        <div className='bg-primary font-raleway w-full py-24 text-white'>
          <h1 className='desktop:text-4xl desktop:mx-16 mx-5 text-2xl font-bold'>
            Di cosa parlo nel mio blog?
          </h1>
          <div className='mt-10 grid grid-cols-12 gap-8'>
            <div className='desktop:col-span-8 desktop:grid-cols-2 desktop:px-16 col-span-12 grid gap-8 px-5'>
              {FEATURES_ITEMS.map(({ id, icon, title, copy }) => (
                <div key={id} className='flex flex-col items-start text-left'>
                  {icon}
                  <h2 className='desktop:text-2xl mb-4 text-xl font-bold'>
                    {title}
                  </h2>
                  <p className='desktop:text-[17px] text-base leading-7 font-medium'>
                    {copy}
                  </p>
                </div>
              ))}
            </div>
            <div className='desktop:mx-0 tablet:mx-auto desktop:col-span-4 col-span-12 mx-5 flex max-w-md items-center justify-center'>
              <Image
                src={FeaturesImage}
                alt='Alice Orlandini su un robot rosso nella foresta'
                sizes='(max-width: 1024px) 70vw, 33.33vw'
                className='h-auto w-full drop-shadow-md'
              />
            </div>
          </div>
        </div>
      </section>
      <Image
        src={WavyLoopsTop}
        alt='Onda decorativa di separazione'
        className='-mb-3 h-auto w-full'
      />
    </>
  );
}
