import styles from './style.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './CarouselDotButton';
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrowButtons';

export interface CarouselProps {
  /**
   * Array of image URL/paths to display in the carousel.
   */
  images: { src: string; alt: string }[];
}

/**
 * {@link https://www.embla-carousel.com/examples/predefined/#loop}  
 * CSS Modulesを使うように変更済み
 */
export default function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={`${styles.embla__viewport} ${styles.frosted}`} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((image, i) => (
            <div className={styles.embla__slide} key={i}>
                <img src={image.src} alt={image.alt} className={styles.embla__slide__image} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot} ${index === selectedIndex ? styles['embla__dot--selected'] : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
