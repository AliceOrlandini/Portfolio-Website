import Image from 'next/image';
import Ellipse from '@/public/assets/ellipse.png';
import { HOW_IT_WORKS_ITEMS } from '@/lib/constants';

export default function HowItWorks() {
  return (
    <section className="relative isolate pt-24 tablet:pt-52 desktop:pt-72 mt-24 overflow-hidden font-raleway tablet:py-32">
      <h2 className="absolute text-center inset-x-0 top-0 font-bold text-2xl desktop:text-4xl font-raleway">Com&#39;è il mio carattere?</h2>
      <Image
        src={Ellipse}
        alt="Ellisse decorativa di sfondo"
        loading="lazy"
        className="pointer-events-none hidden tablet:absolute left-1/2 top-0 w-[900px] -translate-x-1/2 select-none"
      />
      <div className="relative mx-auto mb-20 tablet:mb-0 max-w-7xl px-4 tablet:px-6 desktop:px-8">
        <div className="grid grid-cols-1 gap-y-20 tablet:grid-cols-3 tablet:gap-x-8">
          {HOW_IT_WORKS_ITEMS.map(({ title, copy, img }, idx) => (
            <article
              key={idx}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={img}
                alt={title}
                className={`mb-6 w-[250px] ${
                  idx === 1 ? 'tablet:-mt-36 w-[350px]' : ''
                }`}
              />

              <div className="relative mb-6 inline-flex items-center justify-center">
                <span className="absolute inline-flex h-12 w-12 rounded-full ring-2 ring-secondary/70 ring-offset-2 ring-offset-white" />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-semibold text-white">
                  {idx + 1}
                </span>
              </div>

              <h2 className="font-semibold text-2xl text-title">{title}</h2>
              <p className="mt-3 max-w-xs text-paragraph desktop:text-[17px] font-medium tablet:max-w-md">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
