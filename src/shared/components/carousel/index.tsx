import { Carousel } from "@material-tailwind/react";

interface Params {
  images: string[];
}

const CarouselComp = ({ images }: Params) => {
  return (
    <Carousel className="rounded-xl" placeholder={"carousel"}  autoplay={true} autoplayDelay={3000} loop={true}>
      {images.map((v) => (
        <img
          src={v}
          alt="image 1"
          className="h-full w-full object-cover"
          key={v}
        />
      ))}
    </Carousel>
  );
};

export default CarouselComp;
