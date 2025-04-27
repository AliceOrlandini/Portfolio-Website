import Image from "next/image";
import ContactMeImage from "@/public/assets/contact_me.png";

export default function CTA() {
  return (
    <section className="mx-4 desktop:mx-32 rounded-xl bg-primary text-white pb-10">
      <div className="grid grid-cols-12 gap-4 px-10 desktop:px-20 pt-15 desktop:pt-20">
        <div className="col-span-12 desktop:col-span-6">
          <h1 className="text-2xl desktop:text-5xl font-bold leading-8 desktop:leading-14">Hai un&#39;attività in provincia di Lucca e Pisa? Mettiamo il sito online insieme!</h1>
          <p className="mt-10 text-sm desktop:text-lg font-medium">Che tu abbia un negozio, uno studio, un ristorante o un progetto personale, avere un sito web ti aiuta a farti trovare e a raccontare chi sei. Ti seguo passo passo: dalla scelta dei contenuti alla messa online, in modo semplice e senza stress. Scrivimi e iniziamo a costruire qualcosa di bello!</p>
          <button className="mt-16 bg-tertiary font-semibold py-4 px-7 text-paragraph rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">Parlami del tuo Sito</button>
        </div>
        <div className="col-span-12 desktop:col-span-6">
          <Image src={ContactMeImage} alt="Contact Me" className="w-full tablet:w-1/2 desktop:w-full tablet:mx-auto desktop:mx-0 h-full object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}