import type { MetadataRoute } from 'next';
import { posts } from '#site/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: 'https://aliceorlandini.it/',
    lastModified: new Date(),
    priority: 1
  };

  const blog = {
    url: 'https://aliceorlandini.it/blog',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8
  };

  if (!posts) {
    return [home, blog];
  }

  const blogPosts = posts.map((post) => ({
    url: `https://aliceorlandini.it/blog/${post.slugAsParams}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [home, blog, ...blogPosts];
}
