import { useEffect, useState } from "react";
import { useLanguage } from "../../../shared/context/useLanguage";
import { getDataUtility } from "../../../shared/utilities/getData";

interface Params {
  description: string;
}
const ContenentCard = ({ description }: Params) => {
  // =============== inicio: Traducir datos que se obtienen de la Api ===============
  const { lenguajeActual } = useLanguage();

  const [curiosidadGato, setCuriosidadGato] = useState("");
  const handleTranlateText = async () => {
    const guardarOptionTraduccion = lenguajeActual == "es" ? "es|en" : "en|es";

    /*   const { val } = await getDataUtility(
      `https://api.mymemory.translated.net/get?q=${description}&langpair=${guardarOptionTraduccion}`
    );
    const palabraTraducida = val.responseData.translatedText;

    setCuriosidadGato(palabraTraducida); */
    setCuriosidadGato("");
  };
  useEffect(() => {
    handleTranlateText();
  }, [lenguajeActual]);
  return (
    <p className="text-ellipsis overflow-hidden text-gray-800 px-5 py-2 text-center h-36 ">
      {curiosidadGato}
    </p>
  );
};

export default ContenentCard;
