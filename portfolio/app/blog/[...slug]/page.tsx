import { posts } from "#site/content";
import { MDXContent } from "@/components/MDXComponents";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {

  if (!params || !params.slug) {
    return null;
  }

  const slug = params.slug.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}