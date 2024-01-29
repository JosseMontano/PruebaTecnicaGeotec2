import Carousel from "../../../shared/components/carousel"

interface Props {
  images: string[];
}

export const CarouselComponent = ({ images }: Props) => (
  <div className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
    <Carousel images={images} />
  </div>
);
