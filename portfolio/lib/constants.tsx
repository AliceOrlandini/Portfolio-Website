import { Flower, Compass, GraduationCap, Cpu } from 'lucide-react';

export const NAVBAR_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" }
];

export const TECNOLOGIES_ITEMS = [
  {
    title: "Next.js",
    icon: "nextjs-logo",
    link: "https://nextjs.org/",
  },
  {
    title: "Tailwind CSS",
    icon: "tailwindcss-logo",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Supabase",
    icon: "supabase-logo",
    link: "https://supabase.com/",
  },
  {
    title: "Bunny CDN",
    icon: "bunnycdn-logo",
    link: "https://bunny.net/",
  },
  {
    title: "Firebase",
    icon: "firebase-logo",
    link: "https://firebase.com/",
  }
];

export const FEATURES_ITEMS = [
  {
    icon: <Cpu className="text-tertiary mb-3" />,
    title: "Tecnologie",
    copy: "In questi articoli mi piacerebbe fare confronti tra le varie tecnologie, ce ne sono tantissime ed è difficile capire per ogni caso d'uso quale sia la migliore. Scrivere questi articoli mi dà l'opportunità di approfondirle e sviluppare occhio critico. Parlerò sia di tecnologie che uso giornalmente, ma anche di quelle che non uso, spiegando le mie motivazioni. Sarei felice se si aprisse un dibattito, è il miglior modo per crescere e imparare di più."
  },
  {
    icon: <GraduationCap className="text-tertiary mb-3" />,
    title: "Lezioni di Informatica",
    copy: "Ho iniziato a fare ripetizioni ormai 3 anni fa. Nel corso di questi anni ho avuto esperienze di ogni tipo, da studenti svogliati costretti palesemente dai genitori a fare lezione, a studenti che pur avendo la sufficienza sentivano di aver bisogno di un insegnante migliore. Sono convinta che insegnare sia un atto da non prendere alla leggera perciò ho deciso di condividere ciò che ho imparato nel mio blog."
  },
  {
    icon: <Flower className="text-tertiary mb-3" />,
    title: "Le mie esperienze",
    copy: "All'Università, a lavoro, facendo ripetizioni, nella squadra corse. In tutti questi ambienti ho vissuto esperienze che desidero raccontare. Ad esempio, ho svolto tutta la magistrale in Ingegneria Informatica essendo l'unica ragazza del corso, cosa che non si vive tutti i giorni. Oppure, quella volta in cui ho fatto ripetizioni e non sono stata pagata, una vera e propria truffa. Ogni esperienza mi ha aiutata a capire come funziona questo mondo e spero che le mie storie possano aiutare molte altre persone."
  },
  {
    icon: <Compass className="text-tertiary mb-3" />,
    title: "Guide e Tutorial",
    copy: "Un sito bello ma difficile da trovare non serve a nessuno! Con me, la SEO è già inclusa nella realizzazione del tuo sito: scelgo con cura titoli, testi e struttura tecnica per favorire il miglior posizionamento possibile. Se vuoi un sito internet che non sia solo online, ma anche trovato facilmente su Google, ti aiuto a raggiungere questo obiettivo fin dall'inizio."
  },
];

export const HOW_IT_WORKS_ITEMS = [
  {
    title: "Riflessiva",
    copy:
      "\"Pensate prima di mettere le mani sulla tastiera\". Così disse un professore che ho avuto all'Università. Da quel momento, ho deciso di progettare, studiare e comprendere prima di avventurarmi un un nuovo progetto.",
    img: "how-it-works-1"
  },
  {
    title: "Energica",
    copy:
      "Quando ho in mente un nuovo progetto non vedo l’ora di iniziarlo. Questa carica mi porta energie fresche tanto che lavorarci diventa un piacere. Non mi stanco mai di studiare, approfondire e scoprire cose nuove.",
    img: "how-it-works-2"
  },
  {
    title: "Collaborativa",
    copy:
      "Infine, è per me un piacere collaborare con persone che hanno le stesse passioni. Chiedo senza timori consigli a colleghi (e ad amici), e vedo che anche loro si affidano a me per pareri su come approcciare un problema.",
    img: "how-it-works-3"
  },
];
