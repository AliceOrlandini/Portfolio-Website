import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import Birds from "@/public/assets/birds.png";
import HeroImage from "@/public/assets/hero.png";

export default function Hero() {
  return (
    <section className="h-screen">
      <div className="relative">
        <Image src={Birds} alt="Birds" className="absolute -top-10 left-72" />
      </div>
      <div className="grid grid-cols-12 gap-4 px-32 py-20 items-center">
        <div className="col-span-6 w-fit">
          <h1 className="text-6xl font-bold text-title max-w-xl leading-20">Creazione Siti Web<br/> a <FlipWords words={["Lucca", "Capannori", "Pisa", "Altopascio"]} /></h1>
          <p className="text-paragraph mt-10 text-lg leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam culpa adipisci omnis ducimus a corporis iure, cumque sint ab, commodi impedit voluptate vel possimus consequatur nisi quibusdam reiciendis aperiam quisquam.</p>
          <button className="mt-20 bg-primary font-semibold py-4 px-7 text-button-text rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">Richiedi un Preventivo</button>
        </div>
        <div className="col-span-6">
          <Image src={HeroImage} alt="Hero" className="w-full h-auto drop-shadow-md" />
        </div>
      </div>
    </section>
  );
}