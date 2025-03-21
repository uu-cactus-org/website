// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
// @ts-expect-error No types available in this module
import rlc from 'remark-link-card';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';

// import updateArticle from './scripts/remark-ruby';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), react()],
    legacy: {
        collections: true
    },
    markdown: {
        remarkPlugins: [
            [
                rlc,
                { shortenUrl: true }
            ]
        ],
        rehypePlugins: [
            rehypeRaw,
            [
                rehypeExternalLinks,
                {
                    target: '_blank',
                }
            ]
        ]
    }
});