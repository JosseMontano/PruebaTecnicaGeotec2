import { InfoFavCatType } from "../../../shared/interfaces/catFav";

type CardProps = {
  v: InfoFavCatType;
  handleOpen: (fact?: string) => void;
};

export const Card = ({ v, handleOpen }: CardProps) => (
  <div key={v.fact} className="w-72 h-72 card-favs">
    <img
      src={v.img}
      alt="gato"
      className="w-72 h-72 object-cover cursor-pointer"
      onClick={() => handleOpen(v.fact)}
    />
  </div>
);
