import { useEffect, useState } from "react";
import { InfoFavCatType } from "../../shared/interfaces/catFav";

const Index = () => {
  // =============== Inicio: obtener favs del local storage ===============
  const [favs, setFavs] = useState<InfoFavCatType[]>([]);

  useEffect(() => {
    const favs = localStorage.getItem("favs");
    if (favs) {
      const favsJson: InfoFavCatType[] = JSON.parse(favs);
      setFavs(favsJson);
    }
  }, []);

  return (
    <div className="h-screen grid place-content-center">
      <div className="flex flex-wrap gap-2">
        {!!favs.length &&
          favs.map((item) => (
            <div key={item.fact} className="w-52 h-52">
              <img
                src={item.img}
                alt="gato"
                className="w-52 h-52 object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
