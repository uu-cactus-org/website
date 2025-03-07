// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// import updateArticle from './scripts/remark-ruby';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), react()],
    legacy: {
        collections: true
    },
    markdown: {
        rehypePlugins: [
            // updateArticle
        ]
    }
});