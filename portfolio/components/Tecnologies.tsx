import InfiniteLogoSlider from '@/components/ui/infinite-logo-slider';
import { TECNOLOGIES_ITEMS } from '@/lib/constants';

export default function Tecnologies() {
  return (
    <section>
      <div>
        <h1 className='font-raleway desktop:mx-0 desktop:text-4xl mx-5 text-center text-2xl font-bold'>
          Le mie tecnologie preferite
        </h1>
      </div>
      <div className='desktop:my-20 my-14 flex items-center justify-center space-x-32'>
        <InfiniteLogoSlider>
          {TECNOLOGIES_ITEMS.map(({ title, icon, link }, idx) => (
            <a key={idx} href={link} target='_blank' rel='noreferrer'>
              <picture>
                <source
                  srcSet={`https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/technologies/${icon}.webp`}
                  type='image/webp'
                />
                <img
                  src={`https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/tecnologies/${icon}.png`}
                  alt={title}
                  decoding='async'
                  loading='lazy'
                  width={250}
                  height={50}
                  className='desktop:w-64 h-auto w-44 opacity-40 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100'
                />
              </picture>
            </a>
          ))}
        </InfiniteLogoSlider>
      </div>
    </section>
  );
}
