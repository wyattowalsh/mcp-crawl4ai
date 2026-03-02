import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    // MDX options for enhanced documentation
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
