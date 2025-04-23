import Image from "next/image";
import Clouds from "@/public/assets/clouds.png"
import VetrinaIcon from "@/public/assets/vetrina.png"
import ProfessionalIcon from "@/public/assets/professional.png"
import EcommerceIcon from "@/public/assets/ecommerce.png"
import Link from "next/link";

const PRICINGDATA = [
  {
    title: "Vetrina",
    subtitle: "Ideale per chi desidera una presenza online semplice ma efficace.",
    icon: VetrinaIcon,
    price: "€600",
    features: [
      "Sito web vetrina",
      "Fino a 5 pagine",
      "Contatti e mappa",
      "Form di contatto",
      "Ottimizzazione SEO",
      "Assistenza 24/7",
    ],
    link: "/vetrina"
  },
  {
    title: "Professionale",
    subtitle: "Perfetto per aziende e professionisti che vogliono un sito completo e personalizzato.​", 
    icon: ProfessionalIcon,
    price: "€1200",
    features: [
      "Sito web professionale",
      "Fino a 10 pagine",
      "Contatti e mappa",
      "Form di contatto",
      "Ottimizzazione SEO",
      "Assistenza 24/7",
    ],
    link: "/professionale"
  },
  {
    title: "E-commerce",
    subtitle: "Pensato per chi desidera vendere online con un negozio su misura.",
    icon: EcommerceIcon,
    price: "€2000",
    features: [
      "Sito web e-commerce",
      "Fino a 20 pagine",
      "Contatti e mappa",
      "Form di contatto",
      "Ottimizzazione SEO",
      "Assistenza 24/7",
    ],
    link: "/ecommerce"
  }
];

export default function Pricing() {
  return (
    <section>
      <Image src={Clouds} alt="clouds" className="absolute -z-10" />
      <div className="grid grid-cols-12 gap-4 py-20 mx-32">
        {PRICINGDATA.map((item, index) => (
          <div
            key={index}
            className={`${index === 1 ? "" : "mt-10"} col-span-4 bg-white shadow-lg rounded-xl px-10 pt-16 flex flex-col justify-between`}
          >
            <div>
              <div className="grid grid-cols-12 gap-4 mb-6">
                <div className="col-span-4 flex flex-col items-center justify-center">
                  <Image src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
                  <h3 className="text-3xl text-secondary font-bold mb-4">
                    <span className="text-base font-normal">fino a<br /></span>
                    {item.price}
                  </h3>
                </div>
                <div className="col-span-8">
                  <h2 className="text-3xl text-title font-bold mb-2">{item.title}</h2>
                  <p className="text-paragraph mb-4">{item.subtitle}</p>
                </div>
              </div>
              <hr className="border-t-1 border-gray-400 opacity-45 mb-6" />
              <ul className="list-disc list-inside mb-6 space-y-5">
                {item.features.map((feature, index) => (
                  <li key={index} className="text-paragraph font-medium">{feature}</li>
                ))}
              </ul>
            </div>
            <div className="pb-6 hover:cursor-pointer hover:scale-105 transition-transform duration-300">
              <Link
                href={item.link}
                className="underline"
              >
                Come calcolo il prezzo?
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}