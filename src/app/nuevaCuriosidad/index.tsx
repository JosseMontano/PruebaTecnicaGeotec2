import { useEffect, useState } from "react";
import UseFetch from "../../shared/hooks/useFetch";
import SkeletonCard from "./components/skeletonCard";

//toast
import toast, { Toaster } from "react-hot-toast";
import { InfoCatType } from "../../shared/interfaces/catType";
import { Card } from "./components/card";
import { FooterCard } from "./components/footerCard";
import { handleCopiarPortaPapeles } from "../../shared/utilities/copiarPortapapeles";
import { getBase64Image } from "../../shared/utilities/getBase64Imagen";

const Index = () => {
  // =============== inicio: obtener datos aleatorios ===============
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);

  const [loadingTraduccion, setLoadingTraduccion] = useState(true);

  const handleLoadingTraduccion = () => {
    setLoadingTraduccion(false);
  };

  const colorIcon = !loadingSkeleton
    ? "text-gray-800 cursor-pointer"
    : "text-gray-100";

  const { data, handleRefresh } = UseFetch<InfoCatType>({
    url: "https://catfact.ninja/fact",
  });
  const [imgUrl, setImgUrl] = useState(" ");

  const handleGuardarPrevImage = async (url: string) => {
    const base64 = await getBase64Image(url);
    setImgUrl(base64 as string);

    setLoadingSkeleton(false);
  };

  const handleRefreshCat = async () => {
    await handleRefresh();
  };

  useEffect(() => {
    setLoadingSkeleton(true);
    if (data.fact) {
      const firstWord = data.fact?.split(" ");
      handleGuardarPrevImage("https://cataas.com/cat/says/" + firstWord[0]);
    }
  }, [data]);
  // =============== fin: obtener datos aleatorios ===============

  // =============== inicio: copiar al portapapeles ===============
  const handleCopyText = async () => {
    await handleCopiarPortaPapeles(data.fact);
    toast.success("Copiado al portapapeles", {
      duration: 4000,
      position: "top-right",
    });
  };
  // =============== fin: copiar al portapapeles ===============

  // =============== inicio: guardar en el local Storage===============

  const handleGuardarLocalStorage = async () => {
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
        {loadingSkeleton && imgUrl == " " && loadingTraduccion ? (
          <SkeletonCard />
        ) : (
          <Card
            data={data}
            imgUrl={imgUrl}
            handleLoadingTraduccion={handleLoadingTraduccion}
          />
        )}

        <FooterCard
          colorIcon={colorIcon}
          handleCopyText={handleCopyText}
          handleGuardarLocalStorage={handleGuardarLocalStorage}
          handleLoadOtheCat={handleRefreshCat}
        />
      </div>
      {/* =============== Inicio: mostrar toast =============== */}
      <Toaster />
      {/* =============== fin: mostrar toast =============== */}
    </>
  );
};

export default Index;
