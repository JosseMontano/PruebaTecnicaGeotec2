import { create } from "zustand";

interface Options {
  NavbarSubtitle1: string;
  NavbarSubtitle2: string;
}

interface TranslateType {
  en: Options;
  es: Options;
}

const translationsValue: TranslateType = {
  es: {
    NavbarSubtitle1: "Inicio",
    NavbarSubtitle2: "Mis curiosidades",
  },
  en: {
    NavbarSubtitle1: "Start",
    NavbarSubtitle2: "My curiosity",
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
