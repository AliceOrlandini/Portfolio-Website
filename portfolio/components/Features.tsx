import Image from "next/image";
import FeatureImage from "@/public/assets/features.png";
import { Gauge, Compass, Smartphone, User } from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    icon: <Gauge className="text-tertiary mb-3" />,
    title: "Siti Veloci e Performanti",
    copy: "Realizzo siti web ottimizzati per garantire tempi di caricamento rapidissimi, offrendo agli utenti un'esperienza di navigazione fluida."
  },
  {
    id: 2,
    icon: <Compass className="text-tertiary mb-3" />,
    title: "SEO Ottimizzato",
    copy: "Progetto ogni sito seguendo le migliori pratiche SEO, per aiutarti a posizionarti meglio su Google e farti trovare facilmente dai tuoi potenziali clienti a Lucca e non solo."
  },
  {
    id: 3,
    icon: <Smartphone className="text-tertiary mb-3" />,
    title: "Design Responsive",
    copy: "I tuoi clienti navigano da smartphone, tablet e computer: per questo creo siti che si adattano perfettamente a qualsiasi dispositivo, mantenendo sempre una grafica curata e funzionale."
  },
  {
    id: 4,
    icon: <User className="text-tertiary mb-3" />,
    title: "Gestione Facile e Autonoma",
    copy: "Sviluppo siti che puoi aggiornare in autonomia, senza bisogno di conoscenze tecniche, per mantenere sempre i tuoi contenuti freschi e aggiornati."
  }
];

export default function Features() {
  return (
    <section>
      <div className="w-full bg-primary font-raleway text-white py-24">
        <h1 className="font-bold text-4xl px-16">Features</h1>
        <div className="grid grid-cols-12 gap-8 my-20">
          <div className="col-span-8 grid grid-cols-2 gap-8 px-16">
            {FEATURES.map(({ id, icon, title, copy }) => (
              <div
                key={id}
                className="flex flex-col items-start text-left"
              >
                {icon}
                <h2 className="font-bold text-2xl mb-4">{title}</h2>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <div className="col-span-4 flex justify-center items-center">
            <Image src={FeatureImage} alt="Features" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}