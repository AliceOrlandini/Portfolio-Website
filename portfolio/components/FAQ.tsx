import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import FAQImage from "@/public/assets/faq.png"
import JsonLd from "@/components/JsonLd";

interface FAQItem {
  question: string;
  answer: string;
  url: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(({ question, answer, url }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer,
        "url": url
      },
    })),
  };

  return (
    <section className="bg-quaternary w-full mt-24">
      <JsonLd data={faqJsonLd} />
      <div className="font-raleway px-4 tablet:px-20 py-20">
        <div className="grid grid-cols-12 tablet:gap-10">
          <div className="col-span-12 tablet:col-span-6">
            <h2 className="text-title text-2xl desktop:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-paragraph text-sm desktop:text-base font-semibold mt-7">Qui trovi le domande più frequenti che mi vengono poste riguardo questo argomento.<br/>Se hai bisogno di ulteriori informazioni non esitare a contattarmi!</p>
          </div>
          <Image src={FAQImage} alt="FAQ" className="col-span-12 tablet:col-span-6 mt-10 tablet:mt-0 mx-auto w-1/2 tablet:w-[300px]"/>
        </div>
        <Accordion type="single" collapsible className="text-white font-raleway mt-10">
          {items.map(({ question, answer }, idx) => (
            <AccordionItem value={`item-${idx}`} key={idx}>
              <AccordionTrigger className="text-lg desktop:text-2xl font-bold">{question}</AccordionTrigger>
              <AccordionContent className="font-medium text-sm desktop:text-[16px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}