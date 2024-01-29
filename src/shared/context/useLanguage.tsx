import { create } from "zustand";
import { InicioSubtitleEn, InicioSubtitleEs } from "./valuesLanguage";

interface Options {
  NavbarSubtitle1: string;
  NavbarSubtitle2: string;
  InicioSubtitle: string;
  InicioBtn: string;
}

interface TranslateType {
  en: Options;
  es: Options;
}

const translationsValue: TranslateType = {
  es: {
    NavbarSubtitle1: "Inicio",
    NavbarSubtitle2: "Mis curiosidades",
    InicioSubtitle: InicioSubtitleEs,
    InicioBtn: "Nueva curiosidad",
  },
  en: {
    NavbarSubtitle1: "Start",
    NavbarSubtitle2: "My curiosity",
    InicioSubtitle: InicioSubtitleEn,
    InicioBtn: "New curiosity",
  },
};

export type languagesCurrentlyType = "en" | "es";

interface MyStore {
  words: TranslateType["en"];
  handleChangeLanguage: (language: languagesCurrentlyType) => void;
}

export const useLanguage = create<MyStore>((set) => ({
  words: translationsValue["en"],
  handleChangeLanguage: (language: languagesCurrentlyType) => {
    set(() => ({
      words: translationsValue[language],
    }));
  },
}));
