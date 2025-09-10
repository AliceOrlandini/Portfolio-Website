'use client';
import Link from 'next/link';
import { NAVBAR_ITEMS } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState, useRef } from 'react';
import Brand from '@/app/(home)/_components/brand';

export default function DesktopNavbar() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [completion, setCompletion] = useState(0);
  const pathname = usePathname();

  // Show sticky navbar after scrolling down window.innerHeight and
  // update scroll progress of the blog post progress bar
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsStickyVisible(y > window.innerHeight);

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
    <div className='desktop:block hidden'>
      {/* Desktop Navbar On Top */}
      <nav className='font-raleway flex items-center justify-between px-10 py-5'>
        <div className='flex items-center gap-3'>
          <Brand screen='desktop' />
        </div>
        <div>
          <ul className='text-navigation flex items-center gap-14 text-base font-semibold'>
            {NAVBAR_ITEMS.map(
              (item: { id: number; title: string; href: string }) => {
                return (
                  <li
                    key={item.id}
                    className={`${isActive(item.href) ? 'text-primary' : ''} transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              }
            )}
            <Link
              href='/contatti'
              className='bg-primary text-button-text rounded-2xl px-7 py-4 shadow-md transition-transform duration-300 hover:scale-110 hover:cursor-pointer'
            >
              <span>Contattami</span>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Desktop Sticky Navbar */}
      <nav
        className={`font-raleway fixed top-0 right-0 left-0 z-50 transition-transform duration-300 ease-in-out ${isStickyVisible ? 'translate-y-0 shadow-md' : '-translate-y-full'} `}
      >
        <div className='bg-background flex flex-row items-center px-5 py-3'>
          <a href='#top' className='flex items-center gap-3'>
            <Brand compact screen='desktop' />
          </a>
          <div className='ml-auto'>
            <ul className='text-navigation flex items-center gap-14 text-base font-semibold'>
              {NAVBAR_ITEMS.map(
                (item: { id: number; title: string; href: string }) => {
                  return (
                    <li
                      key={item.id}
                      className={`${isActive(item.href) ? 'text-primary' : ''} transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  );
                }
              )}
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
    </div>
  );
}
