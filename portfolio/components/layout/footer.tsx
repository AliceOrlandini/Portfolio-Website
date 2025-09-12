import { NAVBAR_ITEMS } from '@/lib/constants';
import Link from 'next/link';
import {
  Mail,
  LinkedinIcon,
  GithubIcon,
  ChevronRight,
  ScrollText,
  Cookie
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer>
      <div className='desktop:gap-4 desktop:px-32 desktop:py-20 font-raleway mt-20 grid grid-cols-12 items-center gap-y-10 px-5'>
        <div className='tablet:col-span-4 col-span-12 w-fit'>
          <div className='flex items-center gap-4'>
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
                className='desktop:w-10 h-auto w-7'
              />
            </picture>
            <h1 className='desktop:text-2xl text-title text-xl font-bold'>
              Alice Orlandini
            </h1>
          </div>
          <div className='mt-10 flex items-center gap-4'>
            <hr className='border-primary my-4 w-10 border-t-2' />
            <p className='text-paragraph desktop:text-base text-sm font-medium'>
              Blog Personale in cui parlo di tecnologie, esperienze e
              ripetizioni
            </p>
          </div>
        </div>
        <div className='tablet:col-span-4 tablet:mx-auto col-span-12 w-fit'>
          <nav>
            <ul className='text-paragraph desktop:text-lg flex flex-col gap-4 text-base font-semibold'>
              {NAVBAR_ITEMS.map(({ id, title, href }) => (
                <li key={id}>
                  <Button asChild variant={'ghost'} size={'none'}>
                    <Link href={href}>
                      {title}
                      <ChevronRight className='group-hover:text-primary size-6' />
                    </Link>
                  </Button>
                </li>
              ))}
              <li>
                <Button asChild variant={'ghost'} size={'none'}>
                  <Link href='/contatti'>
                    Contatti
                    <ChevronRight className='group-hover:text-primary size-6' />
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className='tablet:col-span-4 tablet:mx-auto col-span-12 w-fit space-y-10'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-title desktop:text-2xl text-lg font-bold'>
              Altri Contatti
            </h2>
            <div className='flex gap-4'>
              <a aria-label='mail' href='mailto:orlandinialice13@gmail.com'>
                <Mail className='text-paragraph hover:text-primary transition-transform duration-300 hover:scale-110 hover:cursor-pointer' />
              </a>
              <a
                aria-label='linkedin'
                href='https://www.linkedin.com/in/aliceorlandini/'
                target='_blank'
              >
                <LinkedinIcon className='text-paragraph hover:text-primary transition-transform duration-300 hover:scale-110 hover:cursor-pointer' />
              </a>
              <a
                aria-label='github'
                href='https://github.com/aliceorlandini'
                target='_blank'
              >
                <GithubIcon className='text-paragraph hover:text-primary transition-transform duration-300 hover:scale-110 hover:cursor-pointer' />
              </a>
            </div>
          </div>

          <div className='font-raleway text-paragraph flex flex-col items-center gap-3'>
            <Button asChild variant={'overlay'} size={'sm'}>
              <a
                href='https://www.iubenda.com/privacy-policy/27117967'
                target='_blank'
                rel='noopener noreferrer'
                title='Privacy Policy'
              >
                <ScrollText className='tablet:size-3 desktop:size-4 size-[10px]' />
                Privacy Policy
              </a>
            </Button>
            <Button asChild variant={'overlay'} size={'sm'}>
              <a
                href='https://www.iubenda.com/privacy-policy/27117967/cookie-policy'
                target='_blank'
                rel='noopener noreferrer'
                title='Cookie Policy'
              >
                <Cookie className='tablet:size-3 desktop:size-4 size-[10px]' />
                Cookie Policy
              </a>
            </Button>
          </div>
        </div>
      </div>
      <hr className='border-gray my-4 w-full border-t-1 opacity-20' />
      <p className='font-raleway tablet:text-base my-10 text-center text-sm font-medium text-gray-600'>
        &copy; 2025. Tutti i diritti riservati
      </p>
    </footer>
  );
}
