import { getCollection } from "astro:content";

const blogEntries = await getCollection("blog");
const nonDraftblogEntries = blogEntries.filter((entry) => !entry.data.draft);

export const sortedblogEntriesList = nonDraftblogEntries.sort((a, b) => {
    const aDate = new Date(a.data.pubdate);
    const bDate = new Date(b.data.pubdate);
    return bDate.getTime() - aDate.getTime();
});
