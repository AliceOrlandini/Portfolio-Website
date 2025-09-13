import { Flower, Compass, GraduationCap, Cpu } from 'lucide-react';

export const NAVBAR_ITEMS = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Blog', href: '/blog' }
];

export const TECNOLOGIES_ITEMS = [
  {
    id: 1,
    title: 'Next.js',
    icon: 'nextjs-logo',
    link: 'https://nextjs.org/'
  },
  {
    id: 2,
    title: 'Tailwind CSS',
    icon: 'tailwindcss-logo',
    link: 'https://tailwindcss.com/'
  },
  {
    id: 3,
    title: 'Supabase',
    icon: 'supabase-logo',
    link: 'https://supabase.com/'
  },
  {
    id: 4,
    title: 'Bunny CDN',
    icon: 'bunnycdn-logo',
    link: 'https://bunny.net/'
  },
  {
    id: 5,
    title: 'Firebase',
    icon: 'firebase-logo',
    link: 'https://firebase.com/'
  }
];

export const FEATURES_ITEMS = [
  {
    id: 1,
    icon: <Cpu className='text-tertiary mb-3' />,
    title: 'Tecnologie',
    copy: 'Scrivere di tecnologie per me è un modo per esplorare, capire e crescere. Mi piace raccontare quelle che uso ogni giorno e quelle che evito, spiegando perché. Confrontarmi con altri è la parte più bella: dal dialogo nasce sempre qualcosa di nuovo.'
  },
  {
    id: 2,
    icon: <GraduationCap className='text-tertiary mb-3' />,
    title: 'Lezioni di Informatica',
    copy: 'Da tre anni faccio ripetizioni e ogni studente mi ha lasciato qualcosa: chi era lì controvoglia e chi invece cercava di migliorarsi nonostante i buoni voti. Ho imparato che insegnare è un atto di cura e per questo voglio condividere esperienze e riflessioni qui nel blog.'
  },
  {
    id: 3,
    icon: <Flower className='text-tertiary mb-3' />,
    title: 'Le mie esperienze',
    copy: 'All’università, a lavoro, nelle ripetizioni e persino in squadra corse: ogni esperienza mi ha lasciato qualcosa. Dall’essere l’unica ragazza in magistrale a tante sfide diverse, ho imparato molto e spero che i miei racconti possano essere d’aiuto ad altri.'
  },
  {
    id: 4,
    icon: <Compass className='text-tertiary mb-3' />,
    title: 'Guide e Tutorial',
    copy: 'In questo blog troverai guide e tutorial: credo che il modo migliore per imparare sia insegnare. Scrivere mi aiuta a fissare i concetti e a restare aggiornata in un mondo che evolve di continuo.'
  }
];

export const CHARACTER_ITEMS = [
  {
    id: 1,
    title: 'Riflessiva',
    copy: '"Pensate prima di mettere le mani sulla tastiera". Così disse un professore che ho avuto all\'Università. Da quel momento, ho deciso di progettare, studiare e comprendere prima di avventurarmi un un nuovo progetto.',
    img: 'character-1'
  },
  {
    id: 2,
    title: 'Energica',
    copy: 'Quando ho in mente un nuovo progetto non vedo l’ora di iniziarlo. Questa carica mi porta energie fresche tanto che lavorarci diventa un piacere. Non mi stanco mai di studiare, approfondire e scoprire cose nuove.',
    img: 'character-2'
  },
  {
    id: 3,
    title: 'Collaborativa',
    copy: 'Infine, è per me un piacere collaborare con persone che hanno le stesse passioni. Chiedo senza timori consigli a colleghi (e ad amici), e vedo che anche loro si affidano a me per pareri su come approcciare un problema.',
    img: 'character-3'
  }
];
