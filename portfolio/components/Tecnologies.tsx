import Image from 'next/image'
import InfiniteLogoSlider from '@/components/ui/infinite-logo-slider';
import { TECNOLOGIES_ITEMS } from '@/lib/constants';

export default function Tecnologies() {
  return (
    <section>
      <div>
        <h1 className="font-raleway text-center font-bold text-2xl mx-5 desktop:mx-0 desktop:text-4xl">Le mie tecnologie preferite</h1>
      </div>
      <div className="flex justify-center items-center space-x-32 my-14 desktop:my-20">
        <InfiniteLogoSlider>
          {TECNOLOGIES_ITEMS.map(({ title, icon, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={icon}
                alt={title}
                className="w-44 desktop:w-64 h-auto opacity-40 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300"
              />
            </a>
          ))}
        </InfiniteLogoSlider>
      </div>
    </section>
  );
}