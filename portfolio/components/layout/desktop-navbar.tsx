'use client';
import Link from 'next/link';
import { NAVBAR_ITEMS } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Brand from '@/app/(home)/_components/brand';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

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
    <div className='desktop:block font-raleway hidden'>
      {/* Desktop Navbar On Top */}
      <BaseNavbar isActive={isActive} />

      {/* Desktop Sticky Navbar */}
      <div
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out will-change-transform ${
          isStickyVisible
            ? 'translate-y-0 opacity-100 shadow-md'
            : 'pointer-events-none -translate-y-[120%] opacity-0'
        }`}
      >
        <BaseNavbar isActive={isActive} showBackground />
        {pathname.startsWith('/blog/') && (
          <span
            style={{ transform: `translateX(${completion - 100}%)` }}
            className={`bg-primary absolute bottom-0 h-[0.20rem] w-full transition-transform duration-150`}
          />
        )}
      </div>
    </div>
  );
}

type BaseNavbarProps = {
  isActive: (href: string) => boolean;
  showBackground?: boolean;
};

function BaseNavbar({ isActive, showBackground = false }: BaseNavbarProps) {
  return (
    <nav
      className={`flex items-center justify-between px-10 py-3 ${showBackground ? 'bg-background' : ''}`}
    >
      <Brand compact screen='desktop' href='#top' />
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
        <Button asChild variant={'primary'} size={'base'}>
          <Link href='/contatti' aria-label='vai alla pagina contatti'>
            Contattami <Send />
          </Link>
        </Button>
      </ul>
    </nav>
  );
}
