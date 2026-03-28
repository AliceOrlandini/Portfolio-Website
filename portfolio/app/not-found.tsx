import Image from 'next/image';
import NotFound404Image from '@/public/assets/404/404-1024.png';

export default function NotFound() {
  return (
    <div className='font-raleway flex flex-col items-center justify-center'>
      <h1 className='tablet:text-4xl mx-5 mt-10 text-center text-3xl font-bold'>
        Oops! Pagina non trovata
      </h1>
      <Image
        src={NotFound404Image}
        alt='Pagina non trovata'
        sizes='(max-width: 1024px) 70vw, 80vw'
        className='desktop:w-1/2 tablet:w-2/3 mx-auto mt-10 drop-shadow-md'
      />
    </div>
  );
}
