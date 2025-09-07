import { cn, formatDate } from '@/lib/utils';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Calendar } from 'lucide-react';

export default function ArticleCard({
  className,
  title,
  description,
  slug,
  date,
  image,
  priority = false
}: {
  className?: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
  priority?: boolean;
}) {
  return (
    <article
      className={cn(
        'font-raleway tablet:min-h-[600px] mt-10 flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md',
        className
      )}
    >
      <picture>
        <source srcSet={`${image}.webp`} type='image/webp' />
        <img
          src={`${image}.png`}
          alt="Copertina dell'articolo"
          decoding='async'
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'low'}
          width={500}
          height={300}
          className='-mt-10 rounded-lg object-fill'
        />
      </picture>
      <h2 className='text-xl font-bold'>{title}</h2>
      <div className='flex items-center gap-2'>
        <Calendar size={18} />
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
      <p>{description}</p>
      <Link
        href={slug}
        className='tablet:mt-auto bg-primary text-button-text mx-auto mt-7 flex w-full flex-row items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer'
      >
        <span>Leggi</span>
        <ArrowUpRight size={20} />
      </Link>
    </article>
  );
}
