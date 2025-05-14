import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Calendar } from "lucide-react"

export default function ArticleCard({
  className,
  title,
  description,
  slug,
  date,
  image
}: {
  className?: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
}) {
  return (
    <article className={cn("font-raleway desktop:min-h-[600px] mt-10 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md", className)}>
      <picture>
        <source srcSet={`${image}.webp`} type="image/webp" />
        <img
          src={`${image}.png`}
          alt="Copertina dell'articolo"
          decoding="async"
          loading="lazy"
          width={500}
          height={300}
          className="object-fill rounded-lg -mt-10"
        />
      </picture>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex items-center gap-2">
        <Calendar size={18} />
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
      <p>{description}</p>
      <Link href={slug} className="bg-primary mt-7 desktop:mt-auto w-full justify-center flex flex-row gap-2 mx-auto text-base font-semibold items-center text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-105 transition-transform duration-300">
        <span>Leggi</span>
        <ArrowUpRight size={20}/>
      </Link>
    </article>
  );
}