import { Flower, Compass, GraduationCap, Cpu } from 'lucide-react';
import NextLogo from "@/public/assets/next_logo.png";
import TailwindCSSLogo from "@/public/assets/tailwindcss_logo.png";
import SupabaseLogo from "@/public/assets/supabase_logo.png";
import BunnyCDNLogo from "@/public/assets/bunny_cdn_logo.png";
import FirebaseLogo from "@/public/assets/firebase_logo.png";
import Step1Img from '@/public/assets/how_it_works_1.png';
import Step2Img from '@/public/assets/how_it_works_2.png';
import Step3Img from '@/public/assets/how_it_works_3.png';
import VetrinaIcon from "@/public/assets/vetrina.png"
import ProfessionalIcon from "@/public/assets/professional.png"
import EcommerceIcon from "@/public/assets/ecommerce.png"
import ArubaLogo from "@/public/assets/aruba_logo.png";

export const NAVBAR_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" }
];

export const TECNOLOGIES_ITEMS = [
  {
    title: "Next.js",
    icon: NextLogo,
    link: "https://nextjs.org/",
  },
  {
    title: "Tailwind CSS",
    icon: TailwindCSSLogo,
    link: "https://tailwindcss.com/",
  },
  {
    title: "Supabase",
    icon: SupabaseLogo,
    link: "https://supabase.com/",
  },
  {
    title: "Bunny CDN",
    icon: BunnyCDNLogo,
    link: "https://bunny.net/",
  },
  {
    title: "Firebase",
    icon: FirebaseLogo,
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
    img: Step1Img
  },
  {
    title: "Energica",
    copy:
      "Quando ho in mente un nuovo progetto non vedo l’ora di iniziarlo. Questa carica mi porta energie fresche tanto che lavorarci diventa un piacere. Non mi stanco mai di studiare, approfondire e scoprire cose nuove.",
    img: Step2Img
  },
  {
    title: "Collaborativa",
    copy:
      "Infine, è per me un piacere collaborare con persone che hanno le stesse passioni. Chiedo senza timori consigli a colleghi (e ad amici), e vedo che anche loro si affidano a me per pareri su come approcciare un problema.",
    img: Step3Img
  },
];

export const PRICING_ITEMS = [
  {
    title: "Vetrina 1 Pagina",
    subtitle: "Una pagina essenziale ma d’impatto, perfetta per presentare chi sei e cosa fai in modo semplice e professionale.",
    icon: VetrinaIcon,
    price: "€300",
    features: [
      "Design personalizzato e adattabile a tutti i dispositivi",
      "Sito composto da più sezioni in una sola pagina (ad esempio: Chi sono, Servizi, Contatti)",
      "Ottimizzazione SEO di base",
      "Inserimento dei testi e immagini che fornisci (o posso aiutarti se vuoi una mano!)",
      "Messa online del sito inclusa: ti carico il sito su un tuo dominio o su uno nuovo",
      "Informazioni di contatto con mappa",
      "Privacy Policy e Cookie Policy creata e gestita da me",
    ],
    link: "/prezzi#vetrina-1-pagina"
  },
  {
    title: "Vetrina Multi-Pagina",
    subtitle: "Più pagine per raccontare meglio i tuoi servizi, progetti o prodotti, con una navigazione semplice e chiara.", 
    icon: ProfessionalIcon,
    price: "€900",
    features: [
      "Design personalizzato e adattabile a tutti i dispositivi",
      "Fino a 5 pagine complete (ad esempio: Home, Chi sono, Servizi, Galleria, Contatti)",
      "SEO curata per ogni pagina",
      "Inserimento dei testi e immagini che fornisci (o posso aiutarti se vuoi una mano!)",
      "Messa online del sito inclusa: ti carico il sito su un tuo dominio o su uno nuovo",
      "Form di contatto su misura",
      "Privacy Policy e Cookie Policy creata e gestita da me",
    ],
    link: "/prezzi#multi-pagina"
  },
  {
    title: "Dinamico",
    subtitle: "Un sito che puoi aggiornare in autonomia: ad esempio aggiungendo news, articoli… tutto sotto il tuo controllo.",
    icon: EcommerceIcon,
    price: "€2000",
    features: [
      "Tutto ciò che è incluso nel sito multi-pagina",
      "Pannello per modificare o aggiungere i contenuti",
      "SEO più avanzata per struttura e contenuti aggiornabili",
      "Supporto post-pubblicazione per eventuali dubbi o modifiche",
    ],
    link: "/prezzi#dinamico"
  }
];

export const FIXED_PRICING_ITEMS = [
  {
    title: "Costo fisso",
    subtitle: "Con Aruba paghi sempre la stessa cifra, ma le prestazioni restano limitate.",
    icon: ArubaLogo,
    price: "48€",
    features: [
      "In particolare: 15€ per il dominio e 33€ per tenerlo online tutto l'anno",
      "Il sito si carica lentamente, soprattutto se è molto visitato",
      "Se un giorno tante persone visitano il tuo sito, rischia di rallentare o bloccarsi",
      "Non puoi migliorare la velocità senza cambiare contratto e spendere di più",
    ]
  },
  {
    title: "Costo Variabile",
    subtitle: "Con Firebase, la formula si chiama \"Pay As You Go\", ovvero inizi non pagando niente e spendi solo se il tuo sito diventa molto visitato.",
    icon: FirebaseLogo,
    price: "15€ + consumo",
    features: [
      "In particolare: 15€ per il dominio, mentre l\'hosting è gratis se hai pochi visitatori, sotto i 100 al giorno. Superata questa soglia, bisogna comprare le visite. Per comprare 2000 visite, il costo è di 0.13€.",
      "Il sito si carica molto velocemente, ovunque nel mondo essendo su server Google",
      "Anche se arrivano tante persone improvvisamente, il sito resta veloce senza nessun intervento manuale",
      "Paghi solo per quello che usi: se hai pochi visitatori, spendi poco o niente. Se improvvisamente hai tanti visitatori paghi solo quel picco di consumo",
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "Quanto costa un sito web a Lucca?",
    answer: "Dipende dal tipo di sito! I miei prezzi partono da 300€ per un sito vetrina di una pagina e arrivano fino a 2000€ per un sito dinamico autogestibile. Trovi tutto nella sezione prezzi, così hai un'idea chiara fin da subito.",
  },
  {
    question: "In quanto tempo sarà pronto il mio sito?",
    answer: "Di solito un sito vetrina semplice è pronto in 2-3 settimane. Per un sito dinamico ci possono volere 1-2 mesi, anche in base a quanto velocemente ricevo i testi e le immagini. Cerco sempre di essere veloce ma precisa!",
  },
  {
    question: "Offri anche siti web per ristoranti, professioni sanitarie, o liberi professionisti?",
    answer: "Sì! Creo siti web personalizzati per ristoranti, studi professioni sanitarie, artigiani, negozi, freelance e tante altre attività locali in provincia di Lucca, Capannori, Altopascio e Pisa.",
  },
  {
    question: "Il sito sarà visibile su Google?",
    answer: "Sì! Ogni sito che realizzo è ottimizzato per la SEO, il che significa che ha una struttura, titoli e contenuti pensati per farti trovare sui motori di ricerca. Se ti affidi a me anche per i testi, possiamo spingere ancora di più sul posizionamento!",
  },
  {
    question: "Posso aggiornare il sito da solo dopo la consegna?",
    answer: "Certo ma solo se scegli un sito dinamico, avrai un pannello di controllo semplice da usare. Altrimenti, per i siti vetrina, posso aiutarti a fare le modifiche che desideri tramite appositi interventi di manutenzione. In ogni caso, sono sempre disponibile per supporto e domande.",
  },
  {
    question: "Chi si occupa di mettere il sito online?",
    answer: "Me ne occupo io! Quando il sito è pronto, lo carico io stessa su un dominio tuo (o nuovo, se non ce l’hai). La messa online è inclusa nel servizio.",
  },
  {
    question: "Posso vedere qualche esempio di sito realizzato?",
    answer: "Sì, certo! Contattami e ti mostrerò alcuni dei miei lavori.",
  }
];