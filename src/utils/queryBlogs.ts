import { getCollection } from "astro:content";

const blogEntries = await getCollection("blog");
const nonDraftblogEntries = blogEntries.filter((entry) => !entry.data.draft);

export const sortedblogEntriesList = nonDraftblogEntries.sort((a, b) => {
    const aDate = new Date(a.data.pubdate);
    const bDate = new Date(b.data.pubdate);
    return bDate.getTime() - aDate.getTime();
});

export interface BlogQueryOptions {
    includeDraft?: boolean;
    tags?: string[];
    authorId?: string;
    sortBy?: 'date' | 'title';
    limit?: number;
}

export async function queryBlogs(options: BlogQueryOptions = {}) {
    const blogs = await getCollection("blog");

    const results = blogs.filter(entry => 
        (options.includeDraft || !entry.data.draft) &&
        (!options.tags || entry.data.tags.some(tag => options.tags?.includes(tag))) &&
        (!options.authorId || entry.data.authors.includes(options.authorId))
    );

    if (options.sortBy) {
        results.sort((a, b) => {
            switch (options.sortBy) {
                case 'date':
                    return new Date(b.data.pubdate).getTime() - new Date(a.data.pubdate).getTime();
                case 'title':
                    return a.data.title.localeCompare(b.data.title);
                default:
                    return 0;
            }
        });
    }

    return results.slice(0, options.limit ?? Infinity);
}
