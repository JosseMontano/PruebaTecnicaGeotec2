import { useLanguage } from "../../context/useLanguage";
import Img from "./assets/lupa.png";

export const NotFound = () => {
  const { words } = useLanguage();
  return (
    <div className="h-screen grid place-content-center ">
      <div className="flex justify-center">
        <img
          src={Img}
          alt="img"
          className="w-52 h-52"
          style={{
            filter:
              "invert(93%) sepia(73%) saturate(3541%) hue-rotate(176deg) brightness(107%) contrast(105%)",
          }}
        />
      </div>
      <p className="text-center text-3xl text-customSecondary">
        {words.NotFoundMsg}
      </p>
    </div>
  );
};
