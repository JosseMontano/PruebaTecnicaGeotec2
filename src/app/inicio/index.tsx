import UseRoute from "../../shared/hooks/useRoute";
import { CarouselComponent } from "./components/carousel";
import { Info } from "./components/info";

const Index = () => {
  const { handleRedirect } = UseRoute();

  const images = [
    "https://placekitten.com/800/400",
    "https://placekitten.com/800/401",
    "https://placekitten.com/800/402",
    "https://placekitten.com/800/403",
    "https://placekitten.com/800/404",
    "https://placekitten.com/800/405",
  ];

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
