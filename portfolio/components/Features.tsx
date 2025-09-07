import { FEATURES_ITEMS } from '@/lib/constants';

export default function Features() {
  return (
    <>
      <picture>
        <img
          src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/svg/wavy-loops-bottom.svg'
          alt='Onda decorativa di separazione'
          width='100vw'
          height={10}
          className='-mt-3 h-auto w-full'
        />
      </picture>
      <section>
        <div className='bg-primary font-raleway w-full py-24 text-white'>
          <h1 className='desktop:text-4xl desktop:mx-16 mx-5 text-2xl font-bold'>
            Di cosa parlo nel mio blog?
          </h1>
          <div className='mt-10 grid grid-cols-12 gap-8'>
            <div className='desktop:col-span-8 desktop:grid-cols-2 desktop:px-16 col-span-12 grid gap-8 px-5'>
              {FEATURES_ITEMS.map(({ icon, title, copy }, idx) => (
                <div key={idx} className='flex flex-col items-start text-left'>
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
            <div className='desktop:mx-0 desktop:col-span-4 col-span-12 mx-5 flex items-center justify-center'>
              <picture>
                <source
                  srcSet='
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/features/features-480.webp 480w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/features/features-768.webp 768w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/features/features-1024.webp 1024w
                  '
                  sizes='(max-width: 1024px) 70vw, 33.33vw'
                  type='image/webp'
                />
                <source
                  srcSet='
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/features/features-480.png 480w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/features/features-768.png 768w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/features/features-1024.png 1024w
                  '
                  sizes='(max-width: 1024px) 70vw, 33.33vw'
                  type='image/jpeg'
                />
                <img
                  src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/features/features-1024.png'
                  alt='Alice Orlandini su un robot rosso nella foresta'
                  decoding='async'
                  loading='lazy'
                  width='1024'
                  height='1024'
                  className='h-auto w-full drop-shadow-md'
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <picture>
        <img
          src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/svg/wavy-loops-top.svg'
          alt='Onda decorativa di separazione'
          className='-mb-3 h-auto w-full'
          width='100vw'
          height={10}
        />
      </picture>
    </>
  );
}
