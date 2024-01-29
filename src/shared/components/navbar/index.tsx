import { useState } from "react";
import UseRoute from "../../hooks/useRoute";

//imagenes
import ImgCat from "./assets/cats.jpg";
import Img from "./components/img";
import Url from "./components/url";
import { languagesCurrentlyType, useLanguage } from "../../context/useLanguage";

const Index = () => {
  const { words, handleChangeLanguage } = useLanguage();

  const [changeLanguage, setChangeLanguage] = useState(false);
  const { handleRedirect } = UseRoute();

  const handleChangeLanguageCss = (language: languagesCurrentlyType) => {
    setChangeLanguage(!changeLanguage);
    handleChangeLanguage(language);
  };

  const visible = changeLanguage ? "  " : "invisible";
  const visible1 = changeLanguage ? "invisible" : "  ";

  return (
    <nav className="bg-customSecondary p-4 absolute w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Img imgCat={ImgCat} />

        <div className="flex justify-center sm:justify-end space-x-4 w-screen">
          <Url
            handleRedirect={handleRedirect}
            url="/"
            text={words.NavbarSubtitle1}
          />
          <Url
            handleRedirect={handleRedirect}
            url="/Mis-curiosidades"
            text={words.NavbarSubtitle2}
          />
          <div className="bg-customPrimary rounded-xl px-5 flex justify-between items-center w-20 animation-rotate">
            <div
              className={visible1}
              onClick={() => handleChangeLanguageCss("es")}
            >
              <p className="bg-customSecondary text-customPrimary p-0.5 rounded-full cursor-pointer">
                En
              </p>
            </div>
            <div
              className={visible}
              onClick={() => handleChangeLanguageCss("en")}
            >
              <p className="bg-customSecondary text-customPrimary p-0.5 rounded-full cursor-pointer">
                Es
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
