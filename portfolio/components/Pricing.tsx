import Image from "next/image";
import Clouds from "@/public/assets/clouds.png"
import Link from "next/link";
import { PRICING_ITEMS, FIXED_PRICING_ITEMS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section>
      <Image src={Clouds} alt="clouds" className="hidden tablet:absolute -z-10" />
      <div className="grid grid-cols-12 gap-4 py-20 mx-4 desktop:mx-32">
        <h1 className="font-raleway col-span-12 font-bold text-center text-title text-2xl tablet:text-4xl">Ma quanto costa realizzare un Sito Web?</h1>
        <p className="font-raleway col-span-12 text-center font-medium mb-10 text-base tablet:text-lg">La maggior parte dei creatori di siti web ti risponderà con il classico: &#34;dipende&#34;.<br/>Io preferisco dare subito una stima di quello che spenderai.<br/>Ho quindi deciso di dividere le tipologie di siti in 3 categorie e di dare ad ognuna un prezzo massimo.</p>
        {PRICING_ITEMS.map(({title, subtitle, icon, price, features, link}, idx) => (
          <div
            key={idx}
            className={`${idx === 1 ? "" : "tablet:mt-10"} col-span-12 tablet:col-span-4 bg-white shadow-lg rounded-xl px-10 tablet:px-5 desktop:px-10 pt-16 flex flex-col justify-between relative`}
          >
            {idx === 1 && (
              <div className="absolute top-0 left-0 w-full h-4 bg-secondary rounded-t-xl"></div>
            )}
            <div>
              <div className="grid grid-cols-12 gap-4 mb-6">
                <div className="col-span-4 tablet:col-span-12 desktop:col-span-4 flex flex-col items-center justify-center">
                  <Image src={icon} alt={title} className="w-16 h-16 mb-4" />
                  <h3 className="text-2xl desktop:text-3xl text-secondary font-bold mb-4">
                    <span className="text-base font-normal">fino a <br className="tablet:hidden desktop:fixed"/></span>
                    {price}
                  </h3>
                </div>
                <div className="col-span-8 tablet:col-span-12 desktop:col-span-8">
                  <h2 className="text-xl desktop:text-3xl text-title font-bold mb-2 text-left tablet:text-center desktop:text-left">{title}</h2>
                  <p className="text-paragraph text-sm desktop:text-base mb-4 text-left tablet:text-center desktop:text-left">{subtitle}</p>
                </div>
              </div>
              <hr className="border-t-1 border-gray-400 opacity-45 mb-6" />
              <ul className="list-disc list-inside mb-6 space-y-5">
                {features.map((feature, idx) => (
                  <li key={idx} className="text-paragraph text-sm desktop:text-base font-medium">{feature}</li>
                ))}
              </ul>
            </div>
            <div className="pb-6 text-sm desktop:text-base hover:cursor-pointer hover:scale-105 transition-transform duration-300">
              <Link
                href={link}
                className="underline"
              >
                Come calcolo il prezzo?
              </Link>
            </div>
          </div>
        ))}
        <h1 className="font-raleway mb-10 mt-20 col-span-12 font-bold text-center text-title text-2xl tablet:text-4xl">E per quanto riguarda invece i costi fissi annuali?</h1>
        <p className="font-raleway col-span-12 text-center font-medium mb-10 text-base tablet:text-lg">I costi fissi annuali sono quei costi che non dipendono dallo sviluppo del sito, ma dall&#39;acquisto dello spazio di hosting e del dominio.<br/>Questi costi non sono correlati allo sviluppo del sito ma sono necessari per il suo funzionamento.<br/>Per i miei clienti propongo due soluzioni tra cui scegliere:</p>
        {FIXED_PRICING_ITEMS.map(({title, subtitle, icon, price, features}, idx) => (
          <div
            key={idx}
            className="col-span-12 tablet:col-span-6 bg-white shadow-lg rounded-xl px-10 tablet:px-5 desktop:px-10 pt-16 flex flex-col justify-between relative"
          >
            <div>
              <div className="grid grid-cols-12 gap-4 mb-6">
                <div className="col-span-4 tablet:col-span-12 desktop:col-span-4 flex flex-col items-center justify-center">
                  <Image src={icon} alt={title} className="w-32 h-auto mb-4" />
                  <h3 className="text-2xl desktop:text-3xl text-secondary font-bold mb-4">
                    {price}
                    <span className="text-base font-normal"> /anno<br className="tablet:hidden desktop:fixed"/></span>
                  </h3>
                </div>
                <div className="col-span-8 tablet:col-span-12 desktop:col-span-8">
                  <h2 className="text-xl desktop:text-3xl text-title font-bold mb-2 text-left tablet:text-center desktop:text-left">{title}</h2>
                  <p className="text-paragraph text-sm desktop:text-base mb-4 text-left tablet:text-center desktop:text-left">{subtitle}</p>
                </div>
              </div>
              <hr className="border-t-1 border-gray-400 opacity-45 mb-6" />
              <ul className="list-disc list-inside mb-6 space-y-5">
                {features.map((feature, idx) => (
                  <li key={idx} className="text-paragraph text-sm desktop:text-base font-medium">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}