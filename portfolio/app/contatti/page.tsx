import FormContacts from "@/components/FormContacts";
import Image from "next/image";
import ContactMeImage from "@/public/assets/contact_me_2.png";

export default function ContactsPage() {
  return (
    <section>
      <div className="mx-0 tablet:mx-5 desktop:mx-auto size-fit mb-20 font-raleway flex flex-col bg-primary py-10 px-5 tablet:px-10 shadow-lg tablet:rounded-xl tablet:flex-row">
        <div className="m-auto size-fit text-white">
          <div className="space-y-5">
            <h1 className="text-3xl tablet:text-4xl font-bold">Teniamoci in Contatto</h1>
            <p className="text-base tablet:text-lg font-medium">
              Riempi il modulo di lato e ti ricontatterò in meno di 24 ore!
            </p>
            <Image src={ContactMeImage} alt="Contattami" className="w-3/4 mx-auto" />
          </div>
        </div>
        <div className="mt-10 h-full bg-white rounded-xl p-10 desktop:mt-0 desktop:w-1/2">
          <FormContacts />
        </div>
      </div>
    </section>
  );
}