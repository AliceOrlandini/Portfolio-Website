import Image from 'next/image';
import { TECNOLOGIES_ITEMS } from '@/lib/constants';
import dynamic from 'next/dynamic';
import NextjsLogo from '@/public/assets/technologies/nextjs-logo.png';
import TailwindLogo from '@/public/assets/technologies/tailwindcss-logo.png';
import SupabaseLogo from '@/public/assets/technologies/supabase-logo.png';
import BunnyCdnLogo from '@/public/assets/technologies/bunnycdn-logo.png';
import FirebaseLogo from '@/public/assets/technologies/firebase-logo.png';

const InfiniteLogoSlider = dynamic(
  () => import('@/components/ui/infinite-logo-slider')
);

const techImages: Record<string, any> = {
  'nextjs-logo': NextjsLogo,
  'tailwindcss-logo': TailwindLogo,
  'supabase-logo': SupabaseLogo,
  'bunnycdn-logo': BunnyCdnLogo,
  'firebase-logo': FirebaseLogo,
};

export default function Tecnologies() {
  return (
    <section>
      <div>
        <h1 className='font-raleway desktop:mx-0 desktop:text-4xl mx-5 text-center text-2xl font-bold'>
          Le mie tecnologie preferite
        </h1>
      </div>
      <div className='desktop:my-20 my-14 flex items-center justify-center space-x-32'>
        <InfiniteLogoSlider>
          {TECNOLOGIES_ITEMS.map(({ id, title, icon, link }) => (
            <a key={id} href={link} target='_blank' rel='noreferrer'>
              <Image
                src={techImages[icon]}
                alt={title}
                className='desktop:w-64 h-auto w-44 opacity-40 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100'
              />
            </a>
          ))}
        </InfiniteLogoSlider>
      </div>
    </section>
  );
}
