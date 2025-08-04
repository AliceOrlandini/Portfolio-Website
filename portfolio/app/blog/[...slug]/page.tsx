import { posts } from "#site/content";
import FAQ from "@/components/FAQ";
import { MDXContent } from "@/components/MDXComponents";
import { formatDate, sortBlogPosts } from "@/lib/utils";
import { Calendar, MoveRight, MoveLeft, House, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{ slug: string[] }>;
}

async function getPostFromParams(slugArray: string[]) {
  const slugPath = slugArray.join("/");
  return posts.find((p) => p.slugAsParams === slugPath) ?? null;
}

function getAdjacentPosts(allPosts: typeof posts, currentSlug: string) {
  const sorted = sortBlogPosts(allPosts);

  const idx = sorted.findIndex((p) => p.slugAsParams === currentSlug);
  const prev = idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const next = idx > 0 ? sorted[idx - 1] : null;
  return { prev, next };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostFromParams(slug);
  if (!post) {
    return {
      title: "Post non trovato",
      description: "Il post che stai cercando non esiste.",
    };
  }
  const year = new Date(post.date).getFullYear();

  return {
    title: `${post.title} (${year})`,
    description: post.description,
    openGraph: {
      title: `${post.title} (${year})`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      author: 'Alice Orlandini',
      url: `https://aliceorlandini.it/blog/${post.slugAsParams}`,
      images: [
        {
          url: `${post.image}.png`,
          width: 500,
          height: 333,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} (${year})`,
      description: post.description,
      images: [`${post.image}.png`], // must be an absolute URL
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post = await getPostFromParams(slug);
  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(posts, post.slugAsParams);

  return (
    <>
      <div className="mx-5 desktop:mx-0">
        <nav aria-label="breadcrumb" className="max-w-2xl mx-auto mb-10">
          <ol className="font-raleway text-navigation flex flex-wrap items-center space-x-2">
            <li className="flex space-x-2">
              <Link href="/">
                <House className="size-5 hover:cursor-pointer hover:scale-105 transition-transform duration-300" />
              </Link>
              <ChevronRight className="size-5" />
            </li>
            <li className="flex space-x-2">
              <Link href="/blog" className="font-medium hover:cursor-pointer hover:scale-105 transition-transform duration-300">blog</Link>
              <ChevronRight className="size-5" />
            </li>
            <li className="font-semibold hover:cursor-pointer hover:scale-105 transition-transform duration-300">
              <Link href={post.slugAsParams}>{post.slugAsParams}</Link>
            </li>
          </ol>
        </nav>
        <article>
          <h1 className="font-raleway max-w-2xl text-4xl desktop:text-5xl desktop:leading-14 font-bold mx-auto">{post.title}</h1>
          <div className="flex flex-row max-w-2xl mx-auto mt-4">
            <div className="flex items-center gap-2 font-raleway font-medium">
              <Calendar size={18} />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="ml-auto">
              <p className="font-raleway font-medium">
                Tempo di lettura: {post.timing} min
              </p>
            </div>
          </div>
          <hr className="h-px my-8 bg-black border-0 max-w-2xl mx-auto" />
          <div className="font-raleway max-w-2xl text-base tablet:text-lg mx-auto leading-relaxed">
            <MDXContent code={post.body} />
          </div>
        </article>
        <hr className="h-px my-20 bg-black border-0 mx-5 desktop:mx-20" />
        <div>
          <FAQ items={post.faqs}/>
        </div>
        <div className="flex justify-between mt-10 desktop:mx-20 font-raleway font-semibold">
          {prev ? (
            <Link
              href={`/blog/${prev.slugAsParams}`}
              className="flex flex-row items-center bg-primary text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <MoveLeft className="mr-3" size={16} /> Precedente
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/blog/${next.slugAsParams}`}
              className="flex flex-row items-center bg-primary text-button-text py-4 px-7 rounded-2xl shadow-md hover:cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              Successivo <MoveRight className="ml-3" size={16} />
            </Link>
          ) : <div />}
      </div>
      </div>
    </>
  );
}