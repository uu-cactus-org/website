// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
// @ts-expect-error No types available in this module
import rlc from 'remark-link-card';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';

import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

// https://astro.build/config
export default defineConfig({
    integrations: [
        expressiveCode({
            themes: ['github-dark'],
            plugins:[
                pluginLineNumbers()
            ],
            frames: {
                showCopyToClipboardButton: true,
            },
        }),
        mdx(),
        react(),
    ],
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