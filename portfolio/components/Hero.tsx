import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-fit desktop:h-screen">
      <div className="relative">
        <picture>
          <source srcSet="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/birds/birds.webp" type="image/webp" />
          <img
            src="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/birds/birds.png"
            alt="Birds"
            decoding="async"
            width={119}
            height={65}
            className="absolute -z-10 w-20 tablet:w-28 -top-14 desktop:-top-10 left-48 tablet:left-72"
          />
        </picture>
      </div>
      <div className="grid grid-cols-12 gap-4 px-10 desktop:px-32 py-14 desktop:py-20 items-center">
        <div className="col-span-12 tablet:col-span-7 desktop:col-span-6 w-fit">
          <h1 className="text-4xl desktop:text-6xl font-bold text-title desktop:max-w-xl leading-12 desktop:leading-20">Ciao sono Alice! In questo blog parlo<br/>di<FlipWords className="-z-10 max-w-screen" words={["Informatica", "Ripetizioni", "Tecnologie", "Esperienze"]} /></h1>
          <p className="text-paragraph mt-10 text-base desktop:text-lg leading-8 font-medium">
            La passione per l&#39;informatica è nata sui banchi di scuola quando mi sono resa conto che quando arrivava l’ora di informatica dicevo <em>&#34;ooh via, ora ci si rilassa&#34;</em>.<br/>
            Da lì è iniziato il mio viaggio in questo mondo, mi sono iscritta ad Ingegneria Informatica a Pisa durante la quale ho lavorato, fatto parte di una squadra corse e fatto tanti progetti personali. Ma non spoilero nulla, ci sarà modo di approfondire tutto nel mio blog!</p>
          <div className="mt-10 desktop:mt-20 w-fit bg-primary font-semibold py-4 px-7 text-button-text rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">
            <Link href="/blog" className="">Vai agli articoli</Link>
          </div>
        </div>
        <div className="col-span-12 tablet:col-span-5 desktop:col-span-6 mt-10 desktop:mt-0">
          <picture>
            <source
              srcSet="
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-480.webp 480w,
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-768.webp 768w,
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-1024.webp 1024w
              "
              sizes="(max-width: 768px) 70vw, (max-width: 1024px) 33.33vw, 50vw"
              type="image/webp"
            />
            <source
              srcSet="
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-480.png 480w,
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-768.png 768w,
                https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-1024.png 1024w
              "
              sizes="(max-width: 768px) 70vw, (max-width: 1024px) 33.33vw, 50vw"
              type="image/jpeg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/hero/hero-1024.png"
              alt="Alice Orlandini con una corona d'alloro e il suo un cane a Lucca"
              decoding="async"
              width={1024}
              height={1024}
              fetchPriority="high"
              className="w-full h-auto drop-shadow-md"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}