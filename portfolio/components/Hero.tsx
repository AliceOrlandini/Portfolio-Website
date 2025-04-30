import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import Birds from "@/public/assets/birds.png";
import HeroImage from "@/public/assets/hero.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-fit desktop:h-screen">
      <div className="relative">
        <Image src={Birds} alt="Birds" className="absolute -z-10 w-20 tablet:w-28 -top-14 desktop:-top-10 left-48 tablet:left-72" />
      </div>
      <div className="grid grid-cols-12 gap-4 px-10 desktop:px-32 py-14 desktop:py-20 items-center">
        <div className="col-span-12 tablet:col-span-7 desktop:col-span-6 w-fit">
          <h1 className="text-4xl desktop:text-6xl font-bold text-title desktop:max-w-xl leading-12 desktop:leading-20">Ciao sono Alice! In questo blog parlo<br/>di<FlipWords className="-z-10" words={["Informatica", "Ripetizioni", "Tecnologie", "Esperienze"]} /></h1>
          <p className="text-paragraph mt-10 text-base desktop:text-lg leading-8 font-medium">
            La passione per l&#39;informatica è nata sui banchi di scuola quando mi sono resa conto che quando arrivava l’ora di informatica dicevo <em>&#34;ooh via, ora ci si rilassa&#34;</em>.<br/>
            Da lì è iniziato il mio viaggio in questo mondo, mi sono iscritta ad Ingegneria Informatica a Pisa durante la quale ho lavorato, fatto parte di una squadra corse e fatto tanti progetti personali. Ma non spoilero nulla, ci sarà modo di approfondire tutto nel mio blog!</p>
          <div className="mt-10 desktop:mt-20 w-fit bg-primary font-semibold py-4 px-7 text-button-text rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">
            <Link href="/blog" className="">Vai agli articoli</Link>
          </div>
        </div>
        <div className="col-span-12 tablet:col-span-5 desktop:col-span-6 mt-10 desktop:mt-0">
          <Image src={HeroImage} alt="Hero" className="w-full h-auto drop-shadow-md" />
        </div>
      </div>
    </section>
  );
}