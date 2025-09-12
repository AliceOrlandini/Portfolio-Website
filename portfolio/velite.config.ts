import { defineConfig, defineCollection, s } from 'velite';

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/')
});

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s
        .path()
        .refine((value): value is string => typeof value === 'string', {
          message: 'Slug must be a string'
        }),
      title: s.string().max(99),
      description: s.string().max(999),
      alt: s.string().max(150),
      date: s.isodate(),
      published: s.boolean().default(true),
      timing: s.number().default(1),
      image: s.string(),
      faqs: s
        .array(
          s.object({
            question: s.string().max(99),
            answer: s.string().max(999),
            url: s.string()
          })
        )
        .optional(),
      body: s.mdx()
    })
    .transform(computedFields)
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: []
  }
});
