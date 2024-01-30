import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InfoFavCatType } from "../../../shared/interfaces/catFav";
import { Card } from "./card";

type HorizontalScrollProps = {
  searchQuery: string;
  filteredItems: InfoFavCatType[];
  handleOpen: (fact?: string) => void;
  favs: InfoFavCatType[];
};

export const HorizontalScroll = ({
  searchQuery,
  filteredItems,
  favs,
  handleOpen,
}: HorizontalScrollProps) => {
  // =============== Inicio: scroll y carousel ===============
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  // =============== fin: scroll y carousel ===============

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-8 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-2 card-grid-favs">
            {searchQuery.length > 0
              ? !!filteredItems.length &&
                filteredItems.map((item) => (
                  <Card handleOpen={handleOpen} v={item} key={item.fact} />
                ))
              : !!favs.length &&
                favs.map((item) => (
                  <Card handleOpen={handleOpen} v={item} key={item.fact} />
                ))}
          </motion.div>
        </div>
      </section>

    </>
  );
};
