import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/assets/logo.png"
import { NAVBAR_ITEMS } from "@/lib/constants"

export default function Navbar() {
  return (
    <nav className="font-raleway flex justify-between items-center px-10 py-5">
      <div className="flex gap-3 items-center">
        <Image src={Logo} alt="Logo" className="size-10" />
        <h1 className="font-bold text-2xl text-title">Alice Orlandini</h1>
      </div>
      <div>
        <ul className="flex gap-14 text-base font-semibold text-navigation items-center">
          {NAVBAR_ITEMS.map(({ title, href }, idx) => (
            <li key={idx} className="hover:cursor-pointer hover:scale-110 transition-transform duration-300">
              <Link href={href}>{title}</Link>
            </li>
          ))}
          <li>
            <button className="bg-primary text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">Contattami</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}