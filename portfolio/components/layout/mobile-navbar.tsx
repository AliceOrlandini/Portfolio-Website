'use client';
import Link from 'next/link';
import { NAVBAR_ITEMS } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { Squash as Hamburger } from 'hamburger-react';
import { useEffect, useMemo, useState, useRef } from 'react';
import Brand from '@/app/(home)/_components/brand';

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [completion, setCompletion] = useState(0);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Prevent scrolling when menu is open
  useEffect(() => {
    const { body } = document;
    if (isMenuOpen) {
      const prev = body.style.overflow;
      body.style.overflow = 'hidden';
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  // Close menu on Escape key press and focus first link when menu opens
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      // this is done for accessibility reasons, to allow closing the menu with the keyboard
      // and to focus the first link when the menu opens for screen readers users
      document.addEventListener('keydown', onKeyDown);
      const id = setTimeout(() => firstLinkRef.current?.focus(), 10);
      return () => {
        clearTimeout(id);
        document.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [isMenuOpen]);

  // Show sticky navbar after scrolling down 500px and update scroll progress
  // of the blog post progress bar
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsStickyVisible(y > 500);

      const currentProgress = y;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      } else {
        setCompletion(0);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Check if the link is active based on the current pathname
  // and save the function in a useMemo to avoid unnecessary re-renders
  const isActive = useMemo(
    () => (href: string) =>
      href === '/' ? pathname === '/' : pathname?.startsWith(href),
    [pathname]
  );

  return (
    <div className='desktop:hidden'>
      {/* Mobile Navbar On Top */}
      <div className='relative isolate z-30 w-full p-10 px-5'>
        <div className='flex flex-row items-center'>
          <Brand compact={isMenuOpen} screen='mobile' />
          <div className='ml-auto'>
            <Hamburger
              rounded
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              size={20}
              label='apri/chiudi menu'
              direction='right'
            />
          </div>
        </div>
      </div>

      {/* Mobile Sticky Navbar */}
      <div
        className={`fixed top-0 right-0 left-0 z-50 max-w-screen transition-transform duration-300 ease-in-out ${isStickyVisible ? 'translate-y-0' : '-translate-y-full'} `}
      >
        <div
          className={`bg-background h-fit max-w-screen p-5 ${isStickyVisible && !isMenuOpen ? 'shadow-md' : ''}`}
        >
          <div className='flex flex-row items-center'>
            <a href='#top'>
              <Brand compact screen='mobile' />
            </a>
            <div className='ml-auto'>
              <Hamburger
                rounded
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                size={20}
                label='apri/chiudi menu'
                direction='right'
              />
            </div>
          </div>
        </div>
        {pathname.startsWith('/blog/') && !isMenuOpen && (
          <span
            style={{ transform: `translateX(${completion - 100}%)` }}
            className={`bg-primary absolute bottom-0 h-[0.20rem] w-full transition-transform duration-150`}
          />
        )}
      </div>

      {/* Dropdown menu */}
      <nav
        className={`bg-background font-raleway text-paragraph ${isStickyVisible ? 'fixed top-0 right-0 left-0' : 'absolute inset-x-0 top-0'} z-20 transform overflow-hidden px-5 pt-16 pb-10 font-semibold transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen translate-y-0 opacity-100 shadow-md' : 'pointer-events-none max-h-0 -translate-y-10 opacity-0'} `}
      >
        <ul className='tablet:text-lg mx-auto my-5 w-fit space-y-5 text-base'>
          {NAVBAR_ITEMS.map(
            (item: { id: number; title: string; href: string }) => {
              return (
                <li
                  key={item.id}
                  className={`${isActive(item.href) ? 'text-primary' : ''} text-center transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
                >
                  <Link onClick={() => setIsMenuOpen(false)} href={item.href}>
                    {item.title}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
        <div className='flex justify-center'>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href='/contatti'
            className='bg-primary text-button-text rounded-2xl px-7 py-4 shadow-md transition-transform duration-300 hover:scale-110 hover:cursor-pointer'
          >
            <span>Contattami</span>
          </Link>
        </div>
      </nav>

      {/* Clickable overlay to close menu */}
      <button
        aria-hidden={!isMenuOpen}
        tabIndex={-1}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-10 bg-black/10 transition-opacity ${
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />
    </div>
  );
}
