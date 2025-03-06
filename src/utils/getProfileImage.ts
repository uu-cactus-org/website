import type { AuthorSchema } from '@config';
import cactakunNoimage from '@assets/logos/cactus/cactakun_noimage.webp';

/**
 * @param profileImage profileImage from an author data entry
 * @returns src of the profile image. Default to cactakun_noimage.
 */
export function getProfileImage(profileImage: AuthorSchema['profileImage']): string {
  if (typeof profileImage === 'string') return profileImage;
  return (profileImage ?? cactakunNoimage).src;
}
