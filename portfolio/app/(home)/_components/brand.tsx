type BrandProps = {
  compact?: boolean;
  screen: 'mobile' | 'desktop';
};

export default function Brand({ compact = false, screen }: BrandProps) {
  return (
    <>
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
          className={`${screen === 'mobile' ? 'size-8' : 'size-10'}`}
        />
      </picture>
      {!compact && (
        <h1
          className={`text-title font-bold ${screen === 'mobile' ? 'mx-2 my-auto text-lg' : 'text-2xl'}`}
        >
          Alice Orlandini
        </h1>
      )}
    </>
  );
}
