
import { getDataUtility } from "../utilities/getData";

interface TranslationResponse {
  responseData: {
    translatedText: string;
  };
}

export const UseTranslate = () => {


  const MehottraducirText = async (
    lenaguajeATraducir: string,
    palabraPorTraducir: string
  ) => {
    const guardarOptionTraduccion =
      lenaguajeATraducir == "es" ? "en|es" : "es|en";
    const { val } = await getDataUtility<TranslationResponse>(
      `https://api.mymemory.translated.net/get?q=${palabraPorTraducir}&langpair=${guardarOptionTraduccion}`
    );
    const palabraTraducida = val.responseData.translatedText;

    return palabraTraducida;
  };

  return { MehottraducirText };
};
