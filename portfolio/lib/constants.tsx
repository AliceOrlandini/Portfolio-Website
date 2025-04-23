import { Gauge, Compass, Smartphone, User } from 'lucide-react';
import Step1Img from '@/public/assets/how_it_works_1.png';
import Step2Img from '@/public/assets/how_it_works_2.png';
import Step3Img from '@/public/assets/how_it_works_3.png';
import VetrinaIcon from "@/public/assets/vetrina.png"
import ProfessionalIcon from "@/public/assets/professional.png"
import EcommerceIcon from "@/public/assets/ecommerce.png"

export const NAVBAR_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Tecnologie", href: "/tecnologie" },
  { title: "Prezzi", href: "/prezzi" },
];

export const FEATURES_ITEMS = [
  {
    icon: <Gauge className="text-tertiary mb-3" />,
    title: "Siti Veloci e Performanti",
    copy: "Realizzo siti web ottimizzati per garantire tempi di caricamento rapidissimi, offrendo agli utenti un'esperienza di navigazione fluida."
  },
  {
    icon: <Compass className="text-tertiary mb-3" />,
    title: "SEO Ottimizzato",
    copy: "Progetto ogni sito seguendo le migliori pratiche SEO, per aiutarti a posizionarti meglio su Google e farti trovare facilmente dai tuoi potenziali clienti a Lucca e non solo."
  },
  {
    icon: <Smartphone className="text-tertiary mb-3" />,
    title: "Design Responsive",
    copy: "I tuoi clienti navigano da smartphone, tablet e computer: per questo creo siti che si adattano perfettamente a qualsiasi dispositivo, mantenendo sempre una grafica curata e funzionale."
  },
  {
    icon: <User className="text-tertiary mb-3" />,
    title: "Gestione Facile e Autonoma",
    copy: "Sviluppo siti che puoi aggiornare in autonomia, senza bisogno di conoscenze tecniche, per mantenere sempre i tuoi contenuti freschi e aggiornati."
  }
];

export const HOW_IT_WORKS_ITEMS = [
  {
    title: 'Progettazione',
    copy:
      'Zombie ipsum reversus ab viral inferno, nam Rick Grimes malum cerebro. De carne lumbering animata.',
    img: Step1Img
  },
  {
    title: 'Sviluppo',
    copy:
      'Craven omni memoria patriae zombieland clairvius narcisse religions sunt diri undead historiarum.',
    img: Step2Img
  },
  {
    title: 'Consegna',
    copy:
      'Sicut spargit virus ad impetum, qui supersumus flesh eating.',
    img: Step3Img
  },
];

export const PRICING_ITEMS = [
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

export const FAQ_ITEMS = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "How does it work?",
    answer: "It uses a combination of React and Tailwind CSS.",
  },
  {
    question: "Can I customize it?",
    answer: "Yes. You can customize it using Tailwind CSS classes.",
  },
  {
    question: "Is it responsive?",
    answer: "Yes. It is designed to be responsive and mobile-friendly.",
  },
  {
    question: "What browsers does it support?",
    answer: "It supports all modern browsers.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes. It is open-source and free to use.",
  },
];