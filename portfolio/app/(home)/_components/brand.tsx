import Image from 'next/image';
import LogoImage from '@/public/assets/logo/logo.png';

type BrandProps = {
  compact?: boolean;
  screen: 'mobile' | 'desktop';
  href: string;
};

export default function Brand({ compact = false, screen, href }: BrandProps) {
  return (
    <a href={href}>
      <div className='flex flex-row items-center'>
        <Image
          src={LogoImage}
          alt='Logo'
          className={`${screen === 'mobile' ? 'size-8' : 'size-10'}`}
        />
        {!compact && (
          <h1
            className={`text-title ml-3 font-bold ${screen === 'mobile' ? 'my-auto text-lg' : 'text-2xl'}`}
          >
            Alice Orlandini
          </h1>
        )}
      </div>
    </a>
  );
}
