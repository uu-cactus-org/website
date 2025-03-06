import type { UseEmblaCarouselType } from 'embla-carousel-react';

/**
 * `embla-carousel-react`からEmblaCarouselTypeがexportされていないため、型を抽出しておく
 */
export type EmblaCarouselType = NonNullable<UseEmblaCarouselType[1]>;
