import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { NAVBAR_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { Mail, FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-12 gap-4 px-32 py-20 items-center font-raleway">
        <div className="col-span-4 w-fit">
          <div className="flex items-center gap-4">
            <Image src={Logo} alt="Logo" className="w-10 h-auto" />
            <h1 className="text-2xl font-bold text-title">Alice Orlandini</h1>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <hr className="my-4 w-10 border-t-2 border-primary" />
            <p className="text-paragraph font-medium">Creazione Siti Web a Lucca, Capannori, Pisa, Altopascio</p>
          </div>
        </div>
        <div className="col-span-4 w-fit mx-auto text-center">
          <nav>
            <ul className="flex flex-col gap-4 font-bold text-paragraph text-lg">
              {NAVBAR_ITEMS.map(({title, href}, idx) => (
                <li key={idx} className="hover:cursor-pointer hover:scale-110 hover:text-primary transition-transform duration-300">
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-span-4 w-fit mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-title font-bold text-2xl">Contatti</h2>
            <div className="flex gap-4">
              <Mail className="text-primary hover:cursor-pointer hover:scale-110 transition-transform duration-300"/>
              <LinkedinIcon className="text-primary hover:cursor-pointer hover:scale-110 transition-transform duration-300"/>
              <FacebookIcon className="text-primary hover:cursor-pointer hover:scale-110 transition-transform duration-300"/>
              <InstagramIcon className="text-primary hover:cursor-pointer hover:scale-110 transition-transform duration-300"/>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 w-full border-t-1 opacity-20 border-gray" />
      <p className="font-raleway font-medium text-navigation text-center my-10">&copy; 2025. Tutti i diritti riservati</p>
    </footer>
  );
}