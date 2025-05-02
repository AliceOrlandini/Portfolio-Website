"use client";
import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/assets/logo.png"
import { NAVBAR_ITEMS } from "@/lib/constants"
import BurgerMenuIcon from "@/public/assets/svg/burger_menu.svg"
import XMenuIcon from "@/public/assets/svg/x_symbol.svg"
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStickyMenuOpen, setIsStickyMenuOpen] = useState(false);
  const [showDesktopStickyNavbar, setShowDesktopStickyNavbar] = useState(false);
  const [showMobileStickyNavbar, setShowMobileStickyNavbar] = useState(false);

  const openMenu = () => {
    if(window.scrollY < 500) {
      setIsMenuOpen((prev) => !prev);
    } else {
      setIsStickyMenuOpen((prev) => !prev);
    }
  }

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
          <Image 
            src={Logo} 
            alt="Logo Alice Orlandini" 
            className="size-10"
            priority />
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
        <div className="flex flex-row">
          <Image 
            src={Logo}
            alt="Logo Alice Orlandini"
            priority
            className="z-10 size-8" />
          <h1 className="font-bold mx-2 -z-10 text-xl tablet:text-2xl my-auto text-title">Alice Orlandini</h1>
          <button onClick={openMenu} className="ml-auto">
            <Image 
              src={isMenuOpen ? XMenuIcon : BurgerMenuIcon}
              alt="Menù di navigazione"
              priority
              className={`z-10 transition-transform duration-300 ease-in-out ${isMenuOpen ? "size-[18px] tablet:size-6 desktop:size-8 rotate-90 scale-110" : "size-6 tablet:size-7 desktop:size-10 rotate-0 scale-100"}`}
            />
          </button>
        </div>
        <div 
          className={`-z-10 mt-8 absolute inset-x-0 top-0 bg-background p-5 font-raleway transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}>
          <nav className="absolute -z-10 inset-x-0 top-0 bg-background p-5 font-raleway text-paragraph font-semibold">
            <ul className="w-fit mx-auto text-base tablet:text-lg space-y-5 my-5">
              {NAVBAR_ITEMS.map(({ title, href }, idx) => {
                const isActive = pathname.split("/")[1] === href.split("/")[1]
                return (
                <li key={idx} className={`${isActive ? "text-primary": ""} text-center hover:cursor-pointer hover:scale-110 transition-transform duration-300`}>
                  <Link onClick={closeMenu} href={href}>{title}</Link>
                </li>
              )})}
            </ul>
            <div className="flex justify-center">
              <Link onClick={closeMenu} href="/contatti" className="bg-primary text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">
                <span>Contattami</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Sticky Navbar */}
      <div
        className={`
          invisible desktop:visible fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ease-in-out font-raleway
          ${showDesktopStickyNavbar ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className="bg-background flex flex-row items-center py-3 px-5">
          <div className="flex gap-3 items-center">
            <Image 
              src={Logo} 
              alt="Logo Alice Orlandini" 
              className="size-10"
              priority />
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
      </div>

      {/* Mobile Sticky Navbar */}
      <div
        className={`
          desktop:hidden fixed top-0 left-0 right-0 z-50
          transition-transform duration-300 ease-in-out
          ${showMobileStickyNavbar ? "translate-y-0" : "-translate-y-full"}
          desktop:hidden
        `}
      >
        <div className={`bg-background h-fit p-5 ${isStickyMenuOpen ? "" : "shadow-md"}`}>
          <div className="flex flex-row">
            <Image 
              src={Logo}
              alt="Logo Alice Orlandini"
              priority
              className="h-8 w-auto" />
            <button onClick={openMenu} className="ml-auto">
              <Image 
                src={isStickyMenuOpen ? XMenuIcon : BurgerMenuIcon}
                alt="Menù di navigazione"
                priority
                className={`z-10 transition-transform duration-300 ease-in-out ${isStickyMenuOpen ? "size-[18px] tablet:size-6 desktop:size-8 rotate-90 scale-110" : "size-6 tablet:size-7 desktop:size-10 rotate-0 scale-100"}`}
              />
            </button>
          </div>
          <div 
            className={`-z-10 mt-10 absolute inset-x-0 top-0 bg-background p-5 font-raleway text-white font-bold text-lg transform transition-all duration-300 ease-in-out ${
              isStickyMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
            }`}>
            <nav className="absolute -z-10 inset-x-0 top-0 bg-background p-5 text-paragraph font-semibold text-lg">
              <ul className="w-fit mx-auto text-base tablet:text-lg space-y-5 my-5">
                {NAVBAR_ITEMS.map(({ title, href }, idx) => {
                  const isActive = pathname.split("/")[1] === href.split("/")[1]
                  return (
                  <li key={idx} className={`${isActive ? "text-primary": ""} text-center hover:cursor-pointer hover:scale-110 transition-transform duration-300`}>
                    <Link onClick={closeMenu} href={href}>{title}</Link>
                  </li>
                )})}
              </ul>
              <div className="flex justify-center">
                <Link onClick={closeMenu} href="/contatti" className="bg-primary text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300">
                  <span>Contattami</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}