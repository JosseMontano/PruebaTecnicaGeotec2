import { useLanguage } from "../../../shared/context/useLanguage";
import DescriptionCard from "./descriptionCard";
import { InfoCatType } from "../../../shared/interfaces/catType";

type CardProps = {
  data: InfoCatType;
  imgUrl: string;
  handleLoadingTraduccion: () => void;
};

export const Card = ({ data, imgUrl, handleLoadingTraduccion }: CardProps) => {
  const { words } = useLanguage();

  return (
    <div className="h-96 w-72 bg-customSecondary border-2 border-gray-200 rounded-md  ">
      <div className={`h-1/4 bg-customQuartenary`}>
        <div className="relative top-12 flex flex-col items-center ">
          <img
            className="h-24 w-24 rounded-full object-cover object-center"
            src={imgUrl}
            alt="nature image"
          />
          <h2 className="text-customSenary text-3xl">
            {words.NuevaCuriosidadTitle}
          </h2>
          {data && (
            <DescriptionCard
              description={data.fact}
              handleLoadingTraduccion={handleLoadingTraduccion}
            />
          )}
        </div>
      </div>
    </div>
  );
};
