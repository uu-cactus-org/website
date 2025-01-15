import { getCollection, type CollectionEntry } from "astro:content";

const blogEntries = await getCollection("blog");
const nonDraftblogEntries = blogEntries.filter((entry) => !entry.data.draft);

export const sortedblogEntriesList = nonDraftblogEntries.sort((a, b) => {
    const aDate = new Date(a.data.pubdate);
    const bDate = new Date(b.data.pubdate);
    return bDate.getTime() - aDate.getTime();
});

interface BlogQueryOptions {
    nonDraft?: boolean;
    tags?: string[];
    authorId?: string;
    sortByLatest?: boolean;
    limit?: number;
}

export async function getBlogs(options?: BlogQueryOptions) {
    const blogEntries = await getCollection("blog");

    let results: CollectionEntry<"blog">[] = [];
    for (const entry of blogEntries) {
        if (options?.nonDraft && entry.data.draft) continue;
        if (options?.tags && !entry.data.tags.some(tag => options.tags!.includes(tag))) continue;
        if (options?.authorId && !entry.data.authors.includes(options.authorId)) continue;
        results.push(entry);
    }

    if (options?.sortByLatest) {
        results.sort((a, b) => new Date(b.data.pubdate).getTime() - new Date(a.data.pubdate).getTime());
    }

    if (options?.limit) {
        results = results.slice(0, options.limit);
    }

    return results;
}
