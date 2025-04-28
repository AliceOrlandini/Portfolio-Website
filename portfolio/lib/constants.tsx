import { Gauge, Compass, Smartphone, BadgeEuro } from 'lucide-react';
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
  { title: "Prezzi", href: "/prezzi" }
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
    icon: <Gauge className="text-tertiary mb-3" />,
    title: "Siti Veloci e Performanti",
    copy: "La velocità di caricamento è fondamentale per chi visita il tuo sito, infatti, un sito lento fa perdere visitatori (il 53% degli utenti abbandona un sito se impiega più di 3 secondi a caricarsi). Grazie a tecnologie moderne, realizzo siti web super veloci e ottimizzati, con tempi di risposta rapidissimi."
  },
  {
    icon: <Compass className="text-tertiary mb-3" />,
    title: "SEO già Inclusa",
    copy: "Un sito bello ma difficile da trovare non serve a nessuno! Con me, la SEO è già inclusa nella realizzazione del tuo sito: scelgo con cura titoli, testi e struttura tecnica per favorire il miglior posizionamento possibile. Se vuoi un sito internet che non sia solo online, ma anche trovato facilmente su Google, ti aiuto a raggiungere questo obiettivo fin dall'inizio."
  },
  {
    icon: <Smartphone className="text-tertiary mb-3" />,
    title: "Design Responsive",
    copy: "Oggi più del 70% delle visite ai siti web avviene da smartphone o tablet. Ogni sito che realizzo è completamente responsive: significa che si adatta perfettamente a qualsiasi schermo, garantendo un'esperienza utente fluida e professionale."
  },
  {
    icon: <BadgeEuro className="text-tertiary mb-3" />,
    title: "Prezzi Trasparenti",
    copy: "Con me hai subito un'idea chiara di quanto spenderai: sul mio sito trovi prezzi indicativi per siti vetrina (a una o più pagine) e siti dinamici, senza costi nascosti. In più, ti aiuto a ridurre i costi fissi annuali, garantendoti alte prestazioni."
  }
];

export const HOW_IT_WORKS_ITEMS = [
  {
    title: 'Progettazione',
    copy:
      'Progettiamo insieme il sito decidendo sezioni, colori e toni dei testi. In seguito, creo un prototipo con un programma di grafica per mostrarti come sarà il sito e sul quale puoi dirmi tutte le modifiche che desideri apportare.',
    img: Step1Img
  },
  {
    title: 'Sviluppo',
    copy:
      'Una volta approvato il prototipo, inizio a sviluppare il sito web. I tempi di realizzazione dipendono dal tipo di sito che hai scelto.',
    img: Step2Img
  },
  {
    title: 'Consegna',
    copy:
      'Infine, ti invio un\'anteprima del sito e potrai decidere di apportare le ultime modifiche di perfezionamento. A questo punto il tuo sito sarà ufficialmente online!',
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
    price: "45€",
    features: [
      "In particolare: 12€ per il dominio e 33€ per tenerlo online tutto l'anno",
      "Il sito si carica lentamente, soprattutto se è molto visitato",
      "Se un giorno tante persone visitano il tuo sito, rischia di rallentare o bloccarsi",
      "Non puoi migliorare la velocità senza cambiare contratto e spendere di più",
    ]
  },
  {
    title: "Costo Variabile",
    subtitle: "Con Firebase, la formula si chiama \"Pay As You Go\", ovvero inizi non pagando niente e spendi solo se il tuo sito diventa molto visitato.",
    icon: FirebaseLogo,
    price: "12€ + consumo",
    features: [
      "In particolare: 12€ per il dominio, mentre l\'hosting è gratis se hai pochi visitatori, sotto i 100 al giorno. Superata questa soglia, bisogna comprare le visite. Per comprare 2000 visite, il costo è di 0.13€.",
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