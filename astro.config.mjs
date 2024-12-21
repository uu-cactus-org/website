// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import updateArticle from './remark-ruby';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    legacy: {
        collections: true
    },
    markdown: {
        rehypePlugins: [
            // updateArticle
        ]
    }
});
