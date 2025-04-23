import Image from 'next/image';
import Ellipse from '@/public/assets/ellipse.png';
import { HOW_IT_WORKS_ITEMS } from '@/lib/constants';

export default function HowItWorks() {
  return (
    <section className="relative isolate overflow-hidden font-raleway py-24 sm:py-32">
      <Image
        src={Ellipse}
        alt=""
        priority
        className="pointer-events-none absolute left-1/2 top-0 w-[900px] -translate-x-1/2 select-none"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-8">
          {HOW_IT_WORKS_ITEMS.map(({ title, copy, img }, idx) => (
            <article
              key={idx}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={img}
                alt={title}
                className={`mb-6 w-44 md:w-52 lg:w-56 ${
                  idx === 1 ? 'md:-mt-28 lg:-mt-32 w-64 lg:w-72' : ''
                }`}
                sizes='(max-width: 768px) 11rem, 14rem'
              />

              <div className="relative mb-6 inline-flex items-center justify-center">
                <span className="absolute inline-flex h-12 w-12 rounded-full ring-2 ring-orange-300 ring-offset-2 ring-offset-white" />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-semibold text-white">
                  {idx + 1}
                </span>
              </div>

              <h3 className="font-semibold text-2xl text-title">{title}</h3>
              <p className="mt-3 max-w-xs text-paragraph md:max-w-md">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
