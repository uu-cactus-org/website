import { getCollection } from "astro:content";
import type { AuthorSchema } from '@config';

import cactakunNoimage from '@assets/logos/cactus/cactakun_noimage.webp';

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

/**
 * @param profileImage profileImage from an author data entry
 * @returns src of the profile image. Default to cactakun_noimage.
 */
export function getProfileImage(profileImage: AuthorSchema['profileImage']): string {
  if (typeof profileImage === 'string') return profileImage;
  return (profileImage ?? cactakunNoimage).src;
}

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
};