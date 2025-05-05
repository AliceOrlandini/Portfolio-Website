import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-4 desktop:mx-32 rounded-xl bg-primary text-white pb-10">
      <div className="grid grid-cols-12 gap-4 px-10 desktop:px-20 pt-15 desktop:pt-20">
        <div className="col-span-12 desktop:col-span-6">
          <h1 className="text-2xl desktop:text-5xl font-bold leading-8 desktop:leading-14">Ti va di leggere qualche articolo?</h1>
          <p className="mt-10 text-sm desktop:text-lg font-medium">In questo blog parlo di informatica, ripetizioni, tecnologie e delle mie esperienze. Se sei curioso di sapere di cosa tratto, dai un&#39;occhiata agli articoli!</p>
          <div className="mt-10 tablet:mt-16">
            <Link
              href="/blog"
              className="bg-tertiary font-semibold w-fit mx-auto py-4 px-7 tablet:mx-0 text-paragraph rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300 block"
            >
              Vai agli Articoli
            </Link>
          </div>
        </div>
        <div className="col-span-12 desktop:col-span-6">
          <picture>
            <source
              srcSet="
                /assets/contact-me/contact-me-1-480.webp 480w,
                /assets/contact-me/contact-me-1-768.webp 768w,
                /assets/contact-me/contact-me-1-1024.webp 1024w
              "
              sizes="(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw"
              type="image/webp"
            />
            <source
              srcSet="
                /assets/contact-me/contact-me-1-480.png 480w,
                /assets/contact-me/contact-me-1-768.png 768w,
                /assets/contact-me/contact-me-1-1024.png 1024w
              "
              sizes="(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw"
              type="image/jpeg"
            />
            <img
              src="/assets/contact-me/contact-me-1-1024.png"
              alt="Contattami"
              decoding="async"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full tablet:w-1/2 desktop:w-full max-w-xl tablet:mx-auto h-full object-cover rounded-md"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}