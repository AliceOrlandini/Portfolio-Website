import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ArticleCard({
  className,
  title,
  description,
  href,
  image
}: {
  className?: string;
  title: string;
  description: string;
  href: string;
  image: string;
}) {
  return (
    <div className={cn("font-raleway mt-10 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md", className)}>
      <Image 
        width={500}
        height={300}
        src={image} 
        alt="Article Image" 
        className="w-full h-48 object-cover rounded-lg -mt-10" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="font-medium">{description}</p>
      <div className="bg-primary mt-7 w-full justify-center flex flex-row gap-2 mx-auto text-base font-semibold items-center text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-105 transition-transform duration-300">
        <Link href={href}>Leggi</Link>
        <ArrowUpRight size={20}/>
      </div>
    </div>
  );
}