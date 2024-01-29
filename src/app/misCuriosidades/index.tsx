import { useEffect, useState, useRef } from "react";
import { InfoFavCatType } from "../../shared/interfaces/catFav";
import { motion, useTransform, useScroll } from "framer-motion";
import "./index.css";

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

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
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
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </section>
    );
  };

  return <div className="">{HorizontalScrollCarousel()}</div>;
};

export default Index;
