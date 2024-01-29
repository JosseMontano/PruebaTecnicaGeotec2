import { useEffect, useState, useRef } from "react";
import { InfoFavCatType } from "../../shared/interfaces/catFav";
import { motion, useTransform, useScroll } from "framer-motion";
import "./index.css";
import Dialog from "../../shared/components/dialog";
import { MdSearch } from "react-icons/md";

const Index = () => {
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

  // =============== Inicio: scroll y carousel ===============
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  // =============== fin: scroll y carousel ===============

  // =============== Inicio: Modal ===============
  const [size, setSize] = useState(false);
  const [curiosidadAcutal, setCuriosidadAcutal] = useState("");

  const handleOpen = (fact = "") => {
    setCuriosidadAcutal(fact);
    setSize(!size);
  };

  const HorizontalScrollCarousel = () => {
    return (
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-8 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-2 card-grid-favs">
            {!!favs.length &&
              favs.map((item) => (
                <div key={item.fact} className="w-72 h-72 card-favs">
                  <img
                    src={item.img}
                    alt="gato"
                    className="w-72 h-72 object-cover cursor-pointer"
                    onClick={() => handleOpen(item.fact)}
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <>
      <div className="sticky top-1/4 flex justify-center z-10">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-72"
          />
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <MdSearch className="h-5 w-5 text-gray-400" />
          </span>
        </div>
      </div>

      {HorizontalScrollCarousel()}

      <Dialog
        description={curiosidadAcutal}
        handleOpen={handleOpen}
        openModal={size}
        title={"Curiosidad"}
      />
    </>
  );
};

export default Index;
