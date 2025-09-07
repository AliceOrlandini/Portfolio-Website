'use client';
import Link from 'next/link';
import { NAVBAR_ITEMS } from '@/lib/constants';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Squash as Hamburger } from 'hamburger-react';

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStickyMenuOpen, setIsStickyMenuOpen] = useState(false);
  const [showDesktopStickyNavbar, setShowDesktopStickyNavbar] = useState(false);
  const [showMobileStickyNavbar, setShowMobileStickyNavbar] = useState(false);
  const [completion, setCompletion] = useState(0);

  const closeMenu = useCallback(() => {
    if (window.scrollY < 500) {
      setIsMenuOpen(false);
    } else {
      setIsStickyMenuOpen(false);
    }
  }, [setIsMenuOpen, setIsStickyMenuOpen]);

  useEffect(() => {
    if (isMenuOpen || isStickyMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
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

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen, isStickyMenuOpen, closeMenu]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className='font-raleway desktop:flex hidden items-center justify-between px-10 py-5'>
        <div className='flex items-center gap-3'>
          <picture>
            <source
              srcSet='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.webp'
              type='image/webp'
            />
            <img
              src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png'
              alt='Logo'
              decoding='async'
              width={50}
              height={50}
              className='size-10'
            />
          </picture>
          <h1 className='text-title text-2xl font-bold'>Alice Orlandini</h1>
        </div>
        <div>
          <ul className='text-navigation flex items-center gap-14 text-base font-semibold'>
            {NAVBAR_ITEMS.map(({ title, href }, idx) => {
              const isActive = pathname.split('/')[1] === href.split('/')[1];
              return (
                <li
                  key={idx}
                  className={`${isActive ? 'text-primary' : ''} transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
                >
                  <Link href={href}>{title}</Link>
                </li>
              );
            })}
            <Link
              href='/contatti'
              className='bg-primary text-button-text rounded-2xl px-7 py-4 shadow-md transition-transform duration-300 hover:scale-110 hover:cursor-pointer'
            >
              <span>Contattami</span>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className='desktop:hidden relative isolate w-full p-10 px-5'>
        <div className='flex flex-row items-center'>
          <picture>
            <source
              srcSet='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.webp'
              type='image/webp'
            />
            <img
              src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png'
              alt='Logo'
              decoding='async'
              width={50}
              height={50}
              className='size-8'
            />
          </picture>
          <h1 className='tablet:text-2xl text-title mx-2 my-auto text-xl font-bold'>
            Alice Orlandini
          </h1>

          <div className='z-10 ml-auto'>
            <Hamburger
              rounded
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              label='menu button'
              size={20}
            />
          </div>
        </div>
        <nav
          className={`bg-background font-raleway text-paragraph absolute inset-x-0 top-0 mt-8 transform overflow-hidden p-5 font-semibold transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen translate-y-0 opacity-100' : 'pointer-events-none max-h-0 -translate-y-10 opacity-0'} `}
        >
          <ul className='tablet:text-lg mx-auto my-5 w-fit space-y-5 text-base'>
            {NAVBAR_ITEMS.map(({ title, href }, idx) => {
              const isActive = pathname.split('/')[1] === href.split('/')[1];
              return (
                <li
                  key={idx}
                  className={`${isActive ? 'text-primary' : ''} z-50 text-center transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
                >
                  <Link onClick={closeMenu} href={href}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className='flex justify-center'>
            <Link
              onClick={closeMenu}
              href='/contatti'
              className='bg-primary text-button-text rounded-2xl px-7 py-4 shadow-md transition-transform duration-300 hover:scale-110 hover:cursor-pointer'
            >
              <span>Contattami</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Desktop Sticky Navbar */}
      <nav
        className={`desktop:visible font-raleway invisible fixed top-0 right-0 left-0 z-50 transition-transform duration-300 ease-in-out ${showDesktopStickyNavbar ? 'translate-y-0 shadow-md' : '-translate-y-full'} `}
      >
        <div className='bg-background flex flex-row items-center px-5 py-3'>
          <a href='#top' className='flex items-center gap-3'>
            <picture>
              <source
                srcSet='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.webp'
                type='image/webp'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png'
                alt='Logo'
                decoding='async'
                width={50}
                height={50}
                className='size-10'
              />
            </picture>
            <h1 className='text-title text-2xl font-bold'>Alice Orlandini</h1>
          </a>
          <div className='ml-auto'>
            <ul className='text-navigation flex items-center gap-14 text-base font-semibold'>
              {NAVBAR_ITEMS.map(({ title, href }, idx) => {
                const isActive = pathname.split('/')[1] === href.split('/')[1];
                return (
                  <li
                    key={idx}
                    className={`${isActive ? 'text-primary' : ''} transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                );
              })}
              <Link
                href='/contatti'
                className='bg-primary text-button-text rounded-2xl px-7 py-4 shadow-md transition-transform duration-300 hover:scale-110 hover:cursor-pointer'
              >
                <span>Contattami</span>
              </Link>
            </ul>
          </div>
        </div>
        {pathname.startsWith('/blog/') && (
          <span
            style={{ transform: `translateX(${completion - 100}%)` }}
            className={`bg-primary absolute bottom-0 h-[0.20rem] w-full transition-transform duration-150`}
          />
        )}
      </nav>

      {/* Mobile Sticky Navbar */}
      <div
        className={`desktop:hidden fixed top-0 right-0 left-0 z-50 max-w-screen transition-transform duration-300 ease-in-out ${showMobileStickyNavbar ? 'translate-y-0' : '-translate-y-full'} `}
      >
        <div
          className={`bg-background h-fit max-w-screen p-5 ${showMobileStickyNavbar ? 'shadow-md' : ''}`}
        >
          <div className='flex flex-row items-center'>
            <a href='#top'>
              <picture>
                <source
                  srcSet='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.webp'
                  type='image/webp'
                />
                <img
                  src='https://cdn.jsdelivr.net/gh/AliceOrlandini/Portfolio-Website@b3b6982/portfolio/assets/logo/logo.png'
                  alt='Logo'
                  decoding='async'
                  width={50}
                  height={50}
                  className='size-8'
                />
              </picture>
            </a>
            <div className='z-40 ml-auto'>
              <Hamburger
                rounded
                toggled={isStickyMenuOpen}
                toggle={setIsStickyMenuOpen}
                label='menu button'
                size={20}
              />
            </div>
          </div>
          <nav
            hidden={!isStickyMenuOpen}
            className={`bg-background font-raleway text-paragraph absolute inset-x-0 top-0 mt-8 transform overflow-hidden p-5 font-semibold transition-all duration-500 ease-in-out ${isStickyMenuOpen ? 'max-h-screen translate-y-0 opacity-100' : 'pointer-events-none max-h-0 -translate-y-10 opacity-0'} `}
          >
            <ul className='tablet:text-lg mx-auto my-5 w-fit space-y-5 text-base'>
              {NAVBAR_ITEMS.map(({ title, href }, idx) => {
                const isActive = pathname.split('/')[1] === href.split('/')[1];
                return (
                  <li
                    key={idx}
                    className={`${isActive ? 'text-primary' : ''} z-50 text-center transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
                  >
                    <Link onClick={closeMenu} href={href}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className='flex justify-center'>
              <Link
                onClick={closeMenu}
                href='/contatti'
                className='bg-primary text-button-text rounded-2xl px-7 py-4 shadow-md transition-transform duration-300 hover:scale-110 hover:cursor-pointer'
              >
                <span>Contattami</span>
              </Link>
            </div>
          </nav>
        </div>
        {pathname.startsWith('/blog/') && !isStickyMenuOpen && (
          <span
            style={{ transform: `translateX(${completion - 100}%)` }}
            className={`bg-primary absolute bottom-0 h-[0.20rem] w-full transition-transform duration-150`}
          />
        )}
      </div>
    </>
  );
}
