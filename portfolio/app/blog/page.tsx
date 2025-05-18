import ArticleCard from "@/components/ArticleCard";
import { posts } from "#site/content";
import { sortBlogPosts } from "@/lib/utils";

export default async function BlogPage() {
  const sortedPosts = sortBlogPosts(posts.filter((post) => post.published));

  return (
    <section className="mx-10 my-10 flex flex-col gap-y-10">
      <h1 className="font-raleway text-2xl desktop:text-5xl font-bold leading-8 desktop:leading-14">Ti va di leggere qualche articolo?</h1>
      {sortedPosts?.length > 0 ? (
        <ul className="grid grid-cols-12 gap-4 w-full">
          {sortedPosts.map((post, idx) => (
            <li key={post.slug} className="col-span-12 tablet:col-span-6 small-laptop:col-span-4 desktop:col-span-3">
              <ArticleCard 
                title={post.title}
                description={post.description}
                slug={post.slug}
                date={post.date}
                image={post.image}
                priority={idx === 0 ? true : false}
              />
            </li>
          ))}

        </ul>
      ): (
        <div className="col-span-12 flex justify-center items-center">
          <h2 className="text-2xl font-semibold font-raleway">Ancora nessun articolo pubblicato...</h2>
        </div>
      )}
    </section>
  );
}