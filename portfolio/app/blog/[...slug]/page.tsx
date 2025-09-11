import { posts } from '#site/content';
import FAQ from '@/components/faq';
import { MDXContent } from '@/components/mdx-components';
import { Button } from '@/components/ui/button';
import { formatDate, sortBlogPosts } from '@/lib/utils';
import {
  Calendar,
  MoveRight,
  MoveLeft,
  House,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{ slug: string[] }>;
}

async function getPostFromParams(slugArray: string[]) {
  const slugPath = slugArray.join('/');
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
    slug: post.slugAsParams.split('/')
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostFromParams(slug);
  if (!post) {
    return {
      title: 'Post non trovato',
      description: 'Il post che stai cercando non esiste.'
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
          height: 333
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} (${year})`,
      description: post.description,
      images: [`${post.image}.png`] // must be an absolute URL
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
      <div>
        <nav
          aria-label='breadcrumb'
          className='tablet:mx-auto mx-5 mb-10 max-w-2xl'
        >
          <ol className='font-raleway text-navigation flex flex-wrap items-center space-x-2'>
            <li className='flex space-x-2'>
              <Link href='/'>
                <House className='size-5 transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
              </Link>
              <ChevronRight className='size-5' />
            </li>
            <li className='flex space-x-2'>
              <Link
                href='/blog'
                className='font-medium transition-transform duration-300 hover:scale-105 hover:cursor-pointer'
              >
                blog
              </Link>
              <ChevronRight className='size-5' />
            </li>
            <li className='font-semibold transition-transform duration-300 hover:scale-105 hover:cursor-pointer'>
              <Link href={post.slugAsParams}>{post.slugAsParams}</Link>
            </li>
          </ol>
        </nav>
        <article className='desktop:mx-0 mx-5'>
          <h1 className='font-raleway desktop:text-5xl desktop:leading-14 mx-auto max-w-2xl text-4xl font-bold'>
            {post.title}
          </h1>
          <div className='mx-auto mt-4 flex max-w-2xl flex-row'>
            <div className='font-raleway flex items-center gap-2 font-medium'>
              <Calendar size={18} />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className='ml-auto'>
              <p className='font-raleway font-medium'>
                Tempo di lettura: {post.timing} min
              </p>
            </div>
          </div>
          <hr className='mx-auto my-8 h-px max-w-2xl border-0 bg-black' />
          <div className='font-raleway tablet:text-lg mx-auto max-w-2xl text-base leading-relaxed'>
            <MDXContent code={post.body} />
          </div>
        </article>
        <hr className='desktop:mx-20 mx-5 my-20 h-px border-0 bg-black' />
        <div>{post.faqs && <FAQ items={post.faqs} />}</div>
        <div className='desktop:mx-20 font-raleway mx-2 mt-10 flex justify-between font-semibold'>
          {prev ? (
            <Button asChild variant={'primary'} size={'base'}>
              <Link href={`/blog/${prev.slugAsParams}`}>
                <MoveLeft /> Precedente
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {next ? (
            <Button asChild variant={'primary'} size={'base'}>
              <Link href={`/blog/${next.slugAsParams}`}>
                Successivo <MoveRight />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  );
}
