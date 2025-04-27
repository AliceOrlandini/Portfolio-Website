import Image from 'next/image'
import NextLogo from "@/public/assets/next_logo.png";
import TailwindCSSLogo from "@/public/assets/tailwindcss_logo.png";
import SupabaseLogo from "@/public/assets/supabase_logo.png";
import BunnyCDNLogo from "@/public/assets/bunny_cdn_logo.png";
import VercelLogo from "@/public/assets/vercel_logo.png";
import InfiniteLogoSlider from '@/components/ui/infinite-logo-slider';

export default function Tecnologies() {
  return (
    <section>
      <div>
        <h1 className="font-raleway text-center font-bold text-2xl mx-5 desktop:mx-0 desktop:text-4xl">Tecnologie con cui lavoro</h1>
      </div>
      <div className="flex justify-center items-center space-x-32 my-14 desktop:my-20">
        <InfiniteLogoSlider>
          <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
            <Image
              src={NextLogo}
              alt="Next.js Logo"
              className="w-44 desktop:w-64 h-auto opacity-40 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300"
            />
          </a>
          <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
            <Image
              src={TailwindCSSLogo}
              alt="TailwindCSS Logo"
              className="w-44 desktop:w-64 h-auto opacity-40 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300"
            />
          </a>
          <a href='https://supabase.com/' target='_blank' rel='noreferrer'>
            <Image
              src={SupabaseLogo}
              alt="Supabase Logo"
              className="w-44 desktop:w-64 h-auto opacity-40 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300"
            />
          </a>
          <a href='https://bunny.net/' target='_blank' rel='noreferrer'>
            <Image
              src={BunnyCDNLogo}
              alt="Bunny CDN Logo"
              className="w-44 desktop:w-64 h-auto opacity-40 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300"
            />
          </a>
          <a href='https://vercel.com/' target='_blank' rel='noreferrer'>
            <Image
              src={VercelLogo}
              alt="Vercel Logo"
              className="w-44 desktop:w-64 h-auto opacity-40 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300"
            />
          </a>
        </InfiniteLogoSlider>
      </div>
    </section>
  );
}