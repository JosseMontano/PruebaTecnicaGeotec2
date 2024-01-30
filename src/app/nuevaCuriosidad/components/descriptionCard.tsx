import { useEffect, useState } from "react";
import { useLanguage } from "../../../shared/context/useLanguage";
import { UseTranslate } from "../../../shared/hooks/useLanguage";

interface Params {
  description: string;
}
const DescriptionCard = ({ description }: Params) => {
  // =============== inicio: Traducir datos que se obtienen de la Api ===============
  const { lenguajeActual } = useLanguage();

  const { MehottraducirText } = UseTranslate();

  const [curiosidadGato, setCuriosidadGato] = useState("");

  const handleTranlateText = async () => {
    const val = await MehottraducirText(lenguajeActual, description);
    setCuriosidadGato(val);
  };

  useEffect(() => {
    handleTranlateText();
  }, [lenguajeActual, description]); // si la descripcion o el idioma de la aplicacion cambia, que vuelva a traducir
  return (
    <p className="text-ellipsis overflow-hidden text-gray-800 px-5 py-2 text-center h-36 ">
      {curiosidadGato}
    </p>
  );
};

export default DescriptionCard;
