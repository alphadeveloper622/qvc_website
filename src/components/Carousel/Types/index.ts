import { StaticImageData } from 'next/image';

export type CarouselModel = {
  headerText?: string | null;
  subText?: string | null;
  image: StaticImageData;
};
