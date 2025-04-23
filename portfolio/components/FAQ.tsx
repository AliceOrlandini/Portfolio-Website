import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import FAQImage from "@/public/assets/faq.png"
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section className="bg-quaternary w-full my-24">
      <div className="font-raleway px-20 py-20">
        <div className="grid grid-cols-2 gap-10">
          <div className="grid-cols-6">
            <h1 className="text-title text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="text-paragraph font-semibold mt-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis cumque labore repudiandae dolore doloribus facilis, laudantium voluptatibus. Est mollitia tenetur totam quis debitis similique praesentium eos in ducimus. Repudiandae, ex.</p>
          </div>
          <Image src={FAQImage} alt="FAQ" className="grid-cols-6 mx-auto"/>
        </div>
        <Accordion type="single" collapsible className="text-white font-raleway mt-10">
          {FAQ_ITEMS.map(({ question, answer }, idx) => (
            <AccordionItem value={`item-${idx}`} key={idx}>
              <AccordionTrigger className="text-2xl font-bold">{question}</AccordionTrigger>
              <AccordionContent className="font-medium text-[16px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}