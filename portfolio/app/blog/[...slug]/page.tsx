import { posts } from "#site/content";
import { MDXContent } from "@/components/MDXComponents";
import { formatDate, sortBlogPosts } from "@/lib/utils";
import { Calendar, MoveRight, MoveLeft } from "lucide-react";
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

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post = await getPostFromParams(slug);
  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(posts, post.slugAsParams);

  return (
    <article className="mx-5 desktop:mx-0">
      <h1 className="font-raleway max-w-2xl text-5xl font-bold mx-auto">{post.title}</h1>
      <div className="flex items-center gap-2 font-raleway font-medium max-w-2xl mx-auto mt-4">
        <Calendar size={18} />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <hr className="h-px my-8 bg-gray-400 border-0 max-w-2xl mx-auto" />
      <div className="font-raleway max-w-2xl text-base tablet:text-lg mx-auto">
        <MDXContent code={post.body} />
      </div>
      <hr className="h-px my-20 bg-gray-400 border-0 desktop:mx-20" />
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
    </article>
  );
}