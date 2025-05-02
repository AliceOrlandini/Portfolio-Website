import Image from "next/image";
import ContactMeImage from "@/public/assets/contact_me.png";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-4 desktop:mx-32 rounded-xl bg-primary text-white pb-10">
      <div className="grid grid-cols-12 gap-4 px-10 desktop:px-20 pt-15 desktop:pt-20">
        <div className="col-span-12 desktop:col-span-6">
          <h1 className="text-2xl desktop:text-5xl font-bold leading-8 desktop:leading-14">Ti va di leggere qualche articolo?</h1>
          <p className="mt-10 text-sm desktop:text-lg font-medium">In questo blog parlo di informatica, ripetizioni, tecnologie e delle mie esperienze. Se sei curioso di sapere di cosa tratto, dai un&#39;occhiata agli articoli!</p>
          <div className="mt-10 tablet:mt-16 bg-tertiary font-semibold w-fit mx-auto tablet:mx-0 py-4 px-7 text-paragraph rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">
            <Link href="/blog">Vai agli Articoli</Link>
          </div>
        </div>
        <div className="col-span-12 desktop:col-span-6">
          <Image src={ContactMeImage} alt="Contact Me" className="w-full tablet:w-1/2 desktop:w-full max-w-xl tablet:mx-auto h-full object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}