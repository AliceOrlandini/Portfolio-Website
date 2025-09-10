import { CHARACTER_ITEMS } from '@/lib/constants';

export default function Character() {
  return (
    <section className='tablet:pt-52 desktop:pt-72 font-raleway tablet:py-32 relative isolate mt-24 overflow-hidden pt-24'>
      <h2 className='desktop:text-4xl font-raleway absolute inset-x-0 top-0 text-center text-2xl font-bold'>
        Com&#39;è il mio carattere?
      </h2>
      <picture>
        <source
          srcSet='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/ellipse/ellipse.webp'
          type='image/webp'
        />
        <img
          src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/ellipse/ellipse.png'
          alt='Ellisse decorativa di sfondo'
          decoding='async'
          width={768}
          height={768}
          className='tablet:block tablet:absolute pointer-events-none top-0 left-1/2 hidden w-[900px] -translate-x-1/2 select-none'
        />
      </picture>
      <div className='tablet:mb-0 tablet:px-6 desktop:px-8 relative mx-auto mb-20 max-w-7xl px-4'>
        <div className='tablet:grid-cols-3 tablet:gap-x-8 grid grid-cols-1 gap-y-20'>
          {CHARACTER_ITEMS.map(({ id, title, copy, img }, idx) => (
            <article
              key={id}
              className='flex flex-col items-center text-center'
            >
              <picture>
                <source
                  srcSet={`
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/how-it-works/${img}-480.webp 480w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/how-it-works/${img}-768.webp 768w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/how-it-works/${img}-1024.webp 1024w
                  `}
                  sizes='(max-width: 768px) 70vw, 33.33vw'
                  type='image/webp'
                />
                <source
                  srcSet={`
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/how-it-works/${img}-480.png 480w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/how-it-works/${img}-768.png 768w,
                    https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/how-it-works/${img}-1024.png 1024w
                  `}
                  sizes='(max-width: 768px) 70vw, 33.33vw'
                  type='image/png'
                />
                <img
                  src={`https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/how-it-works/${img}-1024.png`}
                  alt={title}
                  decoding='async'
                  loading='lazy'
                  width={1024}
                  height={idx === 1 ? 683 : 1024}
                  className={`mb-6 w-[250px] ${
                    idx === 1 ? 'tablet:-mt-36 w-[350px]' : ''
                  }`}
                />
              </picture>

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
