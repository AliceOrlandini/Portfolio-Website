"use client";
import Link from "next/link"
import { NAVBAR_ITEMS } from "@/lib/constants"
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Squash as Hamburger } from 'hamburger-react'

export default function Navbar() {
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStickyMenuOpen, setIsStickyMenuOpen] = useState(false);
  const [showDesktopStickyNavbar, setShowDesktopStickyNavbar] = useState(false);
  const [showMobileStickyNavbar, setShowMobileStickyNavbar] = useState(false);
  const [completion, setCompletion] = useState(0);

  const closeMenu = useCallback(() => {
    if(window.scrollY < 500) {
      setIsMenuOpen(false);
    } else {
      setIsStickyMenuOpen(false);
    }
  }, [setIsMenuOpen, setIsStickyMenuOpen]);

  useEffect(() => {
    if (isMenuOpen || isStickyMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowDesktopStickyNavbar(true);
      } else {
        setShowDesktopStickyNavbar(false);
      }

      if (window.scrollY > 500) {
        setShowMobileStickyNavbar(true);
      } else {
        setShowMobileStickyNavbar(false);
      }

      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener("scroll", handleScroll);


    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    };
  }, [isMenuOpen, isStickyMenuOpen, closeMenu]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="font-raleway hidden desktop:flex justify-between items-center px-10 py-5">
        <div className="flex gap-3 items-center">
          <picture>
            <source srcSet="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.webp" type="image/webp" />
            <img
              src="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png"
              alt="Logo"
              decoding="async"
              width={50}
              height={50}
              className="size-10"
            />
          </picture>
          <h1 className="font-bold text-2xl text-title">Alice Orlandini</h1>
        </div>
        <div>
          <ul className="flex gap-14 text-base font-semibold text-navigation items-center">
            {NAVBAR_ITEMS.map(({ title, href }, idx) => {
              const isActive = pathname.split("/")[1] === href.split("/")[1]
              return (
              <li key={idx} className={`${isActive ? "text-primary": ""} hover:cursor-pointer hover:scale-110 transition-transform duration-300`}>
                <Link href={href}>{title}</Link>
              </li>
            )})}
            <Link href="/contatti" className="bg-primary text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">
              <span>Contattami</span>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="desktop:hidden isolate relative px-5 p-10 w-full">
        <div className="flex flex-row items-center">
          <picture>
            <source srcSet="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.webp" type="image/webp" />
            <img
              src="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png"
              alt="Logo"
              decoding="async"
              width={50}
              height={50}
              className="size-8"
            />
          </picture>
          <h1 className="font-bold mx-2 text-xl tablet:text-2xl my-auto text-title">Alice Orlandini</h1>

          <div className="ml-auto z-10">
            <Hamburger rounded toggled={isMenuOpen} toggle={setIsMenuOpen} label="menu button" size={20} />
          </div>
        </div>
        <nav
          className={`
            absolute mt-8 inset-x-0 top-0 bg-background p-5 font-raleway text-paragraph font-semibold
            transform transition-all duration-500 ease-in-out overflow-hidden
            ${isMenuOpen ? "translate-y-0 opacity-100 max-h-screen" : "-translate-y-10 opacity-0 max-h-0 pointer-events-none"}
          `}
        >
          <ul className="w-fit mx-auto text-base tablet:text-lg space-y-5 my-5">
            {NAVBAR_ITEMS.map(({ title, href }, idx) => {
              const isActive = pathname.split("/")[1] === href.split("/")[1];
              return (
                <li
                  key={idx}
                  className={`${isActive ? "text-primary" : ""} z-50 text-center hover:cursor-pointer hover:scale-110 transition-transform duration-300`}
                >
                  <Link onClick={closeMenu} href={href}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <Link
              onClick={closeMenu}
              href="/contatti"
              className="bg-primary text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <span>Contattami</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Desktop Sticky Navbar */}
      <nav
        className={`
          invisible desktop:visible fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out font-raleway
          ${showDesktopStickyNavbar ? 'translate-y-0 shadow-md' : '-translate-y-full'}
        `}
      >
        <div className="bg-background flex flex-row items-center py-3 px-5">
            <div className="flex gap-3 items-center">
            <picture>
              <source srcSet="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.webp" type="image/webp" />
              <img
                src="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png"
                alt="Logo"
                decoding="async"
                width={50}
                height={50}
                className="size-10"
              />
            </picture>
            <h1 className="font-bold text-2xl text-title">Alice Orlandini</h1>
            </div>
          <div className="ml-auto">
            <ul className="flex gap-14 text-base font-semibold text-navigation items-center">
              {NAVBAR_ITEMS.map(({ title, href }, idx) => {
                const isActive = pathname.split("/")[1] === href.split("/")[1]
                return (
                <li key={idx} className={`${isActive ? "text-primary": ""} hover:cursor-pointer hover:scale-110 transition-transform duration-300`}>
                  <Link href={href}>{title}</Link>
                </li>
              )})}
              <Link href="/contatti" className="bg-primary text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">
                <span>Contattami</span>
              </Link>
            </ul>
          </div>
        </div>
        {pathname.startsWith('/blog/') && (
          <span style={{transform: `translateX(${completion - 100}%)`}} className={`absolute bottom-0 w-full transition-transform duration-150 h-[0.20rem] bg-primary`}/>
        )}
      </nav>

      {/* Mobile Sticky Navbar */}
      <div
        className={`
          desktop:hidden max-w-screen fixed top-0 left-0 right-0 z-50
          transition-transform duration-300 ease-in-out
          ${showMobileStickyNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className={`bg-background max-w-screen h-fit p-5 ${showMobileStickyNavbar ? "shadow-md" : ""}`}>
          <div className="flex flex-row items-center">
            <picture>
              <source srcSet="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.webp" type="image/webp" />
              <img
                src="https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png"
                alt="Logo"
                decoding="async"
                width={50}
                height={50}
                className="size-8"
              />
            </picture>
            <div className="ml-auto z-50">
              <Hamburger
                rounded
                toggled={isStickyMenuOpen}
                toggle={setIsStickyMenuOpen}
                label="menu button"
                size={20}
              />
            </div>
          </div>
          <nav
            className={`
              absolute mt-8 inset-x-0 top-0 bg-background p-5 font-raleway text-paragraph font-semibold
              transform transition-all duration-500 ease-in-out overflow-hidden
              ${isStickyMenuOpen ? "translate-y-0 opacity-100 max-h-screen" : "-translate-y-10 opacity-0 max-h-0 pointer-events-none"}
            `}
          >
            <ul className="w-fit mx-auto text-base tablet:text-lg space-y-5 my-5">
              {NAVBAR_ITEMS.map(({ title, href }, idx) => {
                const isActive = pathname.split("/")[1] === href.split("/")[1];
                return (
                  <li
                    key={idx}
                    className={`${isActive ? "text-primary" : ""} z-50 text-center hover:cursor-pointer hover:scale-110 transition-transform duration-300`}
                  >
                    <Link onClick={closeMenu} href={href}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-center">
              <Link
                onClick={closeMenu}
                href="/contatti"
                className="bg-primary text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <span>Contattami</span>
              </Link>
            </div>
          </nav>
        </div>
        {pathname.startsWith('/blog/') && !isStickyMenuOpen && (
          <span style={{transform: `translateX(${completion - 100}%)`}} className={`absolute bottom-0 w-full transition-transform duration-150 h-[0.20rem] bg-primary`}/>
        )}
      </div>
    </>
  )
}