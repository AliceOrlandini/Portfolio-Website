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
              {NAVBAR_ITEMS.map(({ title, href }, idx) => (
                <li
                  key={idx}
                  className='group hover:text-primary transition-transform duration-300 hover:scale-110 hover:cursor-pointer'
                >
                  <Link href={href}>{title}</Link>
                  <ChevronRight className='text-paragraph group-hover:text-primary ml-2 inline-block' />
                </li>
              ))}
              <li className='group hover:text-primary transition-transform duration-300 hover:scale-110 hover:cursor-pointer'>
                <Link href='/contatti'>Contatti</Link>
                <ChevronRight className='text-paragraph group-hover:text-primary ml-2 inline-block' />
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

          <div className='font-raleway flex flex-col gap-3'>
            <a
              href='https://www.iubenda.com/privacy-policy/27117967'
              target='_blank'
              rel='noopener noreferrer'
              title='Privacy Policy'
              className='desktop:text-sm text-paragraph border-paragraph font-montserrat flex w-fit flex-row rounded-md border px-5 py-2 text-xs font-bold transition-transform duration-300 hover:scale-105 hover:cursor-pointer'
            >
              <ScrollText className='text-paragraph tablet:size-3 desktop:size-4 desktop:mr-3 my-auto mr-2 size-[10px]' />
              Privacy Policy
            </a>
            <a
              href='https://www.iubenda.com/privacy-policy/27117967/cookie-policy'
              target='_blank'
              rel='noopener noreferrer'
              title='Cookie Policy'
              className='desktop:text-sm text-paragraph border-paragraph font-montserrat flex w-fit flex-row rounded-md border px-5 py-2 text-xs font-bold transition-transform duration-300 hover:scale-105 hover:cursor-pointer'
            >
              <Cookie className='text-paragraph tablet:size-3 desktop:size-4 desktop:mr-3 my-auto mr-2 size-[10px]' />
              Cookie Policy
            </a>
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
