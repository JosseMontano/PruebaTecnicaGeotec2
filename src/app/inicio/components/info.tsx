import { Button } from "@material-tailwind/react";
import { useLanguage } from "../../../shared/context/useLanguage";

interface Params {
  handleRedirect: () => void;
}

export const Info = ({ handleRedirect }: Params) => {
  const { words } = useLanguage();
  return (
    <div className="flex flex-col gap-4 basis-1/4 w-4/6">
      <h1 className="text-5xl sm:text-6xl md:text-7xl">CuriosiCats</h1>
      <p className="text-sm md:text-lg">{words.InicioSubtitle}</p>
      <Button
        placeholder={"xd"}
        className="w-44 bg-customSecondary text-customPrimary"
        onClick={handleRedirect}
      >
        {words.InicioBtn}
      </Button>
    </div>
  );
};
