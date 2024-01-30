import { useEffect, useMemo, useState } from "react";
import UseFetch from "../../shared/hooks/useFetch";
import SkeletonCard from "./components/skeletonCard";

//icons
import { FaRegSave, FaRegCopy } from "react-icons/fa";

//toast
import toast, { Toaster } from "react-hot-toast";
import { InfoCatType } from "../../shared/interfaces/catType";
import { useLanguage } from "../../shared/context/useLanguage";

import ContenentCard from "./components/contenentCard";

const Index = () => {
  const { words } = useLanguage();


  // =============== fin: Traducir datos que se obtienen de la Api ===============
  // =============== inicio: obtener fondo de la card aleatoria ===============
  const background = useMemo(() => {
    return ["bg-customTertiary", "bg-customQuartenary", "bg-customSenary"];
  }, []);

  const [classBackground, setClassBackground] = useState(background[0]);

  useEffect(() => {
    const handleRandom = () => {
      const randomNumber = Math.floor(Math.random() * 3);
      const res = background[randomNumber];
      setClassBackground(res);
    };
    handleRandom();
  }, [background]);
  // =============== fin: obtener fondo de la card aleatoria ===============

  // =============== inicio: obtener datos aleatorios ===============
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
  const colorIcon = !loadingSkeleton
    ? "text-gray-800 cursor-pointer"
    : "text-gray-100";

  const { data } = UseFetch<InfoCatType>({
    url: "https://catfact.ninja/fact",
  });
  const [imgUrl, setImgUrl] = useState("https://cataas.com/cat/says/");

  useEffect(() => {
    if (data.fact) {
      setLoadingSkeleton(true);
      const firstWord = data.fact?.split(" ");
      setImgUrl(imgUrl + firstWord[0]);

      //setLoadingSkeleton(false);
      setTimeout(() => {
        setLoadingSkeleton(false);
      }, 1500);
    }
  }, [data]);
  // =============== fin: obtener datos aleatorios ===============

  // =============== inicio: copiar al portapapeles ===============
  const handleCopyText = async () => {
    await navigator.clipboard.writeText(data.fact);
    toast.success("Copiado al portapapeles", {
      duration: 4000,
      position: "top-right",
    });
  };
  // =============== fin: copiar al portapapeles ===============

  // =============== inicio: guardar en el local Storage===============
  const handleGuardarLocalStorage = () => {
    //preparamos el nuevo dato
    const newFav = {
      img: imgUrl,
      fact: data.fact,
    };
    //vector auxiliar para agregar el nuevo dato
    let guardados = [];
    //obtenemos el valor del localStorage
    const storedData = localStorage.getItem("favs");
    if (storedData != null) {
      guardados = JSON.parse(storedData);
    }
    //agregar el valor nuevo al vector auxiliar
    guardados.push(newFav);
    //guardamos en el localStorage
    localStorage.setItem("favs", JSON.stringify(guardados));
    toast.success("Guardado con exito", {
      duration: 4000,
      position: "top-right",
    });
  };
  // =============== fin: guardar en el local Storage===============

  return (
    <>
      <div className="h-screen grid place-content-center">
        {loadingSkeleton && imgUrl ? (
          <SkeletonCard />
        ) : (
          <div className="h-96 w-72 bg-customSecondary border-2 border-gray-200 rounded-md  ">
            <div className={`h-1/4 ${classBackground}`}>
              <div className="relative top-12 flex flex-col items-center ">
                <img
                  className="h-24 w-24 rounded-full object-cover object-center"
                  src={imgUrl}
                  alt="nature image"
                />
                <h2 className="text-customSenary text-3xl">
                  {words.NuevaCuriosidadTitle}
                </h2>
                {data && (
                  <ContenentCard description={data.fact} />
                )}
              </div>
            </div>
          </div>
        )}

        <div className="relative bottom-10 rounded-md flex justify-evenly gap-3 border-t-2 border-gray-800">
          <div className="absolute left-1/2 border-r-2 border-gray-800 h-full"></div>
          <FaRegSave
            size={38}
            className={colorIcon}
            onClick={handleGuardarLocalStorage}
          />

          <FaRegCopy size={38} className={colorIcon} onClick={handleCopyText} />
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default Index;
