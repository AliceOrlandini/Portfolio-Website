import { FEATURES_ITEMS } from "@/lib/constants";

export default function Features() {
  return (
    <>
      <picture>
        <img 
          src="assets/svg/wavy-loops-bottom.svg" 
          alt="Onda decorativa di separazione" 
          width="100vw"
          height={150}
          className="w-full h-auto -mt-3"
        />
      </picture>
      <section>
        <div className="w-full bg-primary font-raleway text-white py-24">
          <h1 className="text-2xl desktop:text-4xl font-bold mx-5 desktop:mx-16">Di cosa parlo nel mio blog?</h1>
          <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="col-span-12 desktop:col-span-8 grid desktop:grid-cols-2 gap-8 px-5 desktop:px-16">
              {FEATURES_ITEMS.map(({ icon, title, copy }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start text-left"
                >
                  {icon}
                  <h2 className="font-bold text-xl desktop:text-2xl mb-4">{title}</h2>
                  <p className="font-medium leading-7 text-base desktop:text-[17px]">{copy}</p>
                </div>
              ))}
            </div>
            <div className="col-span-12 mx-5 desktop:mx-0 desktop:col-span-4 flex justify-center items-center">
              <picture>
                <source
                  srcSet="
                    /assets/features/features-480.webp 480w,
                    /assets/features/features-768.webp 768w,
                    /assets/features/features-1024.webp 1024w
                  "
                  sizes="(max-width: 1024px) 70vw, 33.33vw"
                  type="image/webp"
                />
                <source
                  srcSet="
                    /assets/features/features-480.png 480w,
                    /assets/features/features-768.png 768w,
                    /assets/features/features-1024.png 1024w
                  "
                  sizes="(max-width: 1024px) 70vw, 33.33vw"
                  type="image/jpeg"
                />
                <img
                  src="/assets/features/features-1024.png"
                  alt="Alice Orlandini su un robot rosso nella foresta"
                  decoding="async"
                  loading="lazy"
                  width="1024"
                  height="1024"
                  className="w-full h-auto drop-shadow-md"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <picture>
        <img 
          src="assets/svg/wavy-loops-top.svg" 
          alt="Onda decorativa di separazione" 
          className="w-full h-auto -mb-3"
          width="100vw"
          height={150}
        />
      </picture>
    </>
  );
}