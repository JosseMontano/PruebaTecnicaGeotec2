interface Params {
  imgCat: string;
}

const Img = ({ imgCat }: Params) => {
  return (
    <div className="hidden sm:flex sm:items-center">
      <div className="text-white text-xl font-bold">
        <img
          src={imgCat}
          alt="gatitos"
          className="h-12 w-14 rounded-full object-cover"
          role="Imagen-nav"
        />
      </div>
    </div>
  );
};

export default Img;
