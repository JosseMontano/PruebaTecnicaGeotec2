import { Button } from "@material-tailwind/react";

interface Params {
  handleRedirect: () => void;
}

export const Info = ({ handleRedirect }: Params) => {
  return (
    <div className="flex flex-col gap-4 basis-1/4 w-4/6">
      <h1 className="text-5xl sm:text-6xl md:text-7xl">CuriosiCats</h1>
      <p className="text-sm md:text-lg">
        {" "}
        "CuriosiCats" es una aplicación divertida y educativa para amantes de
        gatos. Ofrece curiosidades aleatorias con imágenes adorables,
        permitiendo a los usuarios guardar sus favoritas. La interfaz intuitiva
        y la opción de cambiar idiomas hacen que la experiencia sea
        personalizada y entretenida. Ideal para aprender de manera lúdica sobre
        el fascinante mundo de los gatos.
      </p>
      <Button
        placeholder={"xd"}
        className="w-44 bg-customSecondary text-customPrimary"
        onClick={handleRedirect}
      >
        nueva curiosidad
      </Button>
    </div>
  );
};
