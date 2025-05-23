import { NAVBAR_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { Mail, LinkedinIcon, GithubIcon, ChevronRight, ScrollText, Cookie } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-12 gap-y-10 mt-20 desktop:gap-4 px-5 desktop:px-32 desktop:py-20 items-center font-raleway">
        <div className="col-span-12 tablet:col-span-4 w-fit">
          <div className="flex items-center gap-4">
            <picture>
              <source srcSet="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.webp" type="image/webp" />
              <img
                src="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png"
                alt="Logo"
                decoding="async"
                width={50}
                height={50}
                className="w-7 desktop:w-10 h-auto"
              />
            </picture>
            <h1 className="text-xl desktop:text-2xl font-bold text-title">Alice Orlandini</h1>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <hr className="my-4 w-10 border-t-2 border-primary" />
            <p className="text-paragraph font-medium text-sm desktop:text-base">Blog Personale in cui parlo di tecnologie, esperienze e ripetizioni</p>
          </div>
        </div>
        <div className="col-span-12 tablet:col-span-4 w-fit tablet:mx-auto">
          <nav>
            <ul className="flex flex-col gap-4 font-semibold text-paragraph text-base desktop:text-lg">
              {NAVBAR_ITEMS.map(({title, href}, idx) => (
                <li key={idx} className="hover:cursor-pointer group hover:scale-110 hover:text-primary transition-transform duration-300">
                  <Link href={href}>{title}</Link>
                  <ChevronRight className="inline-block ml-2 text-paragraph group-hover:text-primary" />
                </li>
              ))}
              <li className="hover:cursor-pointer group hover:scale-110 hover:text-primary transition-transform duration-300">
                <Link href="/contatti">Contatti</Link>
                <ChevronRight className="inline-block ml-2 text-paragraph group-hover:text-primary" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-12 space-y-10 tablet:col-span-4 w-fit tablet:mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-title font-bold text-lg desktop:text-2xl">Altri Contatti</h2>
            <div className="flex gap-4">
              <a aria-label="mail" href="mailto:orlandinialice13@gmail.com"><Mail className="text-paragraph hover:text-primary hover:cursor-pointer hover:scale-110 transition-transform duration-300"/></a>
              <a aria-label="linkedin" href="https://www.linkedin.com/in/aliceorlandini/" target="_blank"><LinkedinIcon className="text-paragraph hover:text-primary hover:cursor-pointer hover:scale-110 transition-transform duration-300"/></a>
              <a aria-label="github" href="https://github.com/aliceorlandini" target="_blank"><GithubIcon className="text-paragraph hover:text-primary hover:cursor-pointer hover:scale-110 transition-transform duration-300"/></a>
            </div>
          </div>

          <div className="flex flex-col gap-3 font-raleway">
            <a 
              href="https://www.iubenda.com/privacy-policy/27117967" 
              target="_blank"
              rel="noopener noreferrer"
              title="Privacy Policy"
              className="text-xs desktop:text-sm text-paragraph border border-paragraph w-fit rounded-md px-5 py-2 flex flex-row font-montserrat font-bold hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <ScrollText className="text-paragraph size-[10px] my-auto tablet:size-3 desktop:size-4 mr-2 desktop:mr-3" />
                Privacy Policy
            </a>
            <a 
              href="https://www.iubenda.com/privacy-policy/27117967/cookie-policy" 
              target="_blank"
              rel="noopener noreferrer"
              title="Cookie Policy"
              className="text-xs desktop:text-sm text-paragraph border border-paragraph w-fit rounded-md px-5 py-2 flex flex-row font-montserrat font-bold hover:scale-105 hover:cursor-pointer transition-transform duration-300">
                <Cookie className="text-paragraph size-[10px] my-auto tablet:size-3 desktop:size-4 mr-2 desktop:mr-3" />
                Cookie Policy
            </a>
          </div>
        </div>
      </div>
      <hr className="my-4 w-full border-t-1 opacity-20 border-gray" />
      <p className="font-raleway text-sm tablet:text-base font-medium text-gray-600 text-center my-10">&copy; 2025. Tutti i diritti riservati</p>
    </footer>
  );
}