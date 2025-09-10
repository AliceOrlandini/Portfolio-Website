import { cn, formatDate } from '@/lib/utils';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { z } from 'zod';

const ArticleCardSchema = z.object({
  title: z.string().min(1, 'Il titolo non può essere vuoto'),
  description: z.string().min(1, 'La descrizione non può essere vuota'),
  alt: z.string().min(1, 'Il testo alternativo non può essere vuoto'),
  slug: z.string().min(1, 'Lo slug non può essere vuoto'),
  date: z.string().min(1, 'La data non può essere vuota'),
  image: z.string().min(1, "L'immagine non può essere vuota")
});

type ArticleCardProps = z.infer<typeof ArticleCardSchema> & {
  className?: string;
  hasPriority?: boolean;
};

export default function ArticleCard({
  className,
  title,
  description,
  alt,
  slug,
  date,
  image,
  hasPriority = false
}: ArticleCardProps) {
  const result = ArticleCardSchema.safeParse({
    title,
    description,
    alt,
    slug,
    date,
    image
  });
  if (!result.success) {
    console.error(result.error);
    return <p>Errore nei dati dell'articolo</p>;
  }

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
          alt={alt}
          decoding='async'
          loading={hasPriority ? 'eager' : 'lazy'}
          fetchPriority={hasPriority ? 'high' : 'low'}
          width={500}
          height={300}
          className='-mt-10 rounded-lg object-fill'
        />
      </picture>
      <h2 className='tablet:min-h-14 text-xl font-bold'>{title}</h2>
      <div className='flex items-center gap-2'>
        <Calendar size={18} />
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
      <p>{description}</p>
      <Link
        aria-label='Leggi articolo'
        href={slug}
        className='tablet:mt-auto bg-primary text-button-text mx-auto mt-7 flex w-full flex-row items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer'
      >
        <span>Leggi</span>
        <ArrowUpRight size={20} />
      </Link>
    </article>
  );
}
