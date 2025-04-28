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
          <h1 className="text-4xl desktop:text-6xl font-bold text-title desktop:max-w-xl leading-12 desktop:leading-20">Creazione Siti Web in provincia<br/>di<FlipWords className="-z-10" words={["Lucca", "Capannori", "Pisa", "Altopascio"]} /></h1>
          <p className="text-paragraph mt-10 text-base desktop:text-lg leading-8 font-medium">Ciao! Sono <span className="text-primary font-medium">Alice Orlandini</span> e realizzo siti internet moderni, veloci e SEO oriented.<br/>Che tu abbia un’attività locale, un ristorante, uno studio medico o un progetto personale, sono qui per aiutarti a portarlo online nel modo giusto!<br/>Lavoro in tutta la provincia di Lucca e Pisa, offrendo siti vetrina e siti dinamici su misura.</p>
          <div className="mt-10 desktop:mt-20 w-fit bg-primary font-semibold py-4 px-7 text-button-text rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">
            <Link href="/contatti" className="">Richiedi un Preventivo</Link>
          </div>
        </div>
        <div className="col-span-12 tablet:col-span-5 desktop:col-span-6 mt-10 desktop:mt-0">
          <Image src={HeroImage} alt="Hero" className="w-full h-auto drop-shadow-md" />
        </div>
      </div>
    </section>
  );
}