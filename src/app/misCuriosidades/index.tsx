import { useEffect, useState } from "react";
import { InfoFavCatType } from "../../shared/interfaces/catFav";
import "./index.css";
import Dialog from "../../shared/components/dialog";

import { Search } from "./components/search";
import { HorizontalScroll } from "./components/horizontalScroll";
import { handleCopiarPortaPapeles } from "../../shared/utilities/copiarPortapapeles";
import { useLanguage } from "../../shared/context/useLanguage";
import { UseTranslate } from "../../shared/hooks/useLanguage";
import { NotFound } from "../../shared/components/notFound";

const Index = () => {
  const { words, lenguajeActual } = useLanguage();
  const { MehottraducirText } = UseTranslate();
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
  const [openModal, setOpenModal] = useState(false);
  const [curiosidadAcutal, setCuriosidadAcutal] = useState("");

  const handleOpen = async (fact = "") => {
    const res = await MehottraducirText(lenguajeActual, fact);
    setCuriosidadAcutal(res);
    setOpenModal(!openModal);
  };

  const [copiarPortapepelesClass, setCopiarPortapepelesClass] = useState("");
  const handleCopyText = async () => {
    await handleCopiarPortaPapeles(curiosidadAcutal);
    setCopiarPortapepelesClass("text-customTertiary");
    setTimeout(() => {
      setCopiarPortapepelesClass("");
    }, 120);
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

      {favs.length == 0 ? (
        <NotFound />
      ) : (
        <HorizontalScroll
          favs={favs}
          filteredItems={filteredItems}
          handleOpen={handleOpen}
          searchQuery={searchQuery}
        />
      )}

      <Dialog
        description={curiosidadAcutal}
        handleOpen={handleOpen}
        handleCopyText={handleCopyText}
        openModal={openModal}
        title={words.DialogTitle}
        copiarPortapepelesClass={copiarPortapepelesClass}
      />
    </>
  );
};

export default Index;
