import { useEffect, useState } from "react";
import { InfoFavCatType } from "../../shared/interfaces/catFav";
import "./index.css";
import Dialog from "../../shared/components/dialog";

import { Search } from "./components/search";
import { HorizontalScroll } from "./components/horizontalScroll";

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
  // =============== fin: obtener favs del local storage ===============

  // =============== Inicio: Modal ===============
  const [size, setSize] = useState(false);
  const [curiosidadAcutal, setCuriosidadAcutal] = useState("");

  const handleOpen = (fact = "") => {
    setCuriosidadAcutal(fact);
    setSize(!size);
  };
  // =============== fin: Modal ===============

  // =============== Inicio: Buscador ===============

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<InfoFavCatType[]>([]); //guardar datos para el busacdor
  const handleSearch = (query: string) => {
    const filtered = favs.filter((item) => {
      const firstWord = item.fact.split(/\s+/)[0].toLowerCase();
      return firstWord.includes(query.toLowerCase());
    });
    setFilteredItems(filtered);
    setSearchQuery(query);
  };

  return (
    <>
      <Search handleSearch={handleSearch} searchQuery={searchQuery} />

      <HorizontalScroll
        favs={favs}
        filteredItems={filteredItems}
        handleOpen={handleOpen}
        searchQuery={searchQuery}
      />

      <Dialog
        description={curiosidadAcutal}
        handleOpen={handleOpen}
        openModal={size}
        title={"Curiosidad"}
      />
    </>
  );
};

export default Index;
