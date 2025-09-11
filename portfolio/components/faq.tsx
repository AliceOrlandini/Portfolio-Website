import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import JsonLd from '@/components/json-ld';
import { z } from 'zod';

const FAQSchema = z.object({
  items: z.array(
    z.object({
      question: z.string().min(1, 'La domanda non può essere vuota'),
      answer: z.string().min(1, 'La risposta non può essere vuota'),
      url: z.url('URL non valido')
    })
  )
});

type FAQProps = z.infer<typeof FAQSchema>;

export default function FAQ({ items }: FAQProps) {
  const result = FAQSchema.safeParse({ items });
  if (!result.success) {
    console.error(result.error);
    return <p>Errore nei dati FAQ</p>;
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer, url }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
        url: url
      }
    }))
  };

  return (
    <section className='bg-quaternary mx-0 mt-24 w-full'>
      <JsonLd data={faqJsonLd} />
      <div className='font-raleway py-20'>
        <div className='desktop:mx-auto tablet:flex mx-10 max-w-6xl items-center justify-center'>
          <div className='w-fit'>
            <h2 className='text-title desktop:text-5xl text-2xl font-bold'>
              Frequently Asked Questions
            </h2>
            <p className='text-paragraph desktop:text-base mt-7 max-w-lg text-sm font-semibold'>
              Qui trovi le domande più frequenti che mi vengono poste riguardo
              questo argomento.
              <br />
              Se hai bisogno di ulteriori informazioni non esitare a
              contattarmi!
            </p>
          </div>
          <div className='tablet:mx-0 tablet:mt-0 mx-auto mt-10 w-fit'>
            <picture>
              <source
                srcSet='
                  https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/faq/faq-480.webp 480w,
                  https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/faq/faq-768.webp 768w,
                  https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/faq/faq-1024.webp 1024w
                '
                sizes='(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw'
                type='image/webp'
              />
              <source
                srcSet='
                  https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/faq/faq-480.png 480w,
                  https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/faq/faq-768.png 768w,
                  https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/faq/faq-1024.png 1024w
                '
                sizes='(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 33.33vw'
                type='image/png'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/faq/faq-1024.png'
                alt='Illustrazione sezione FAQ'
                decoding='async'
                loading='lazy'
                width={1024}
                height={1024}
                className='tablet:w-1/2 mx-auto h-auto w-44 drop-shadow-md'
              />
            </picture>
          </div>
        </div>
        <Accordion
          type='single'
          collapsible
          className='font-raleway desktop:mx-auto tablet:mx-10 mx-5 mt-10 max-w-6xl text-white'
        >
          {items.map(({ question, answer }, idx) => (
            <AccordionItem value={`item-${idx}`} key={idx}>
              <AccordionTrigger className='desktop:text-2xl text-lg font-bold'>
                {question}
              </AccordionTrigger>
              <AccordionContent className='desktop:text-[16px] text-sm font-medium'>
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
