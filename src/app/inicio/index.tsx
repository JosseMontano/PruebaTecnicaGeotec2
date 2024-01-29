import UseRoute from "../../shared/hooks/useRoute";
import { CarouselComponent } from "./components/carousel";
import { Info } from "./components/info";

//img
import Img1 from "./assets/cat1.jpg";
import Img2 from "./assets/cat2.jpg";
import Img3 from "./assets/cat3.jpg";
import Img4 from "./assets/cat4.jpg";
import Img5 from "./assets/cat5.jpg";

const Index = () => {
  const { handleRedirect } = UseRoute();

  const images = [Img1, Img2, Img3, Img4, Img5];

  return (
    <div className="h-screen grid place-content-center">
      <div className="flex w-screen lg:flex-row lg:justify-around flex-col items-center gap-6">
        <Info handleRedirect={() => handleRedirect("Nueva-curiosidad")} />
        <CarouselComponent images={images} />
      </div>
    </div>
  );
};

export default Index;
