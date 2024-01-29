

const SkeletonCard = () => {
  return (
    <>
      <div className="h-96 w-72 bg-customSecondary border-2 border-gray-200 rounded-md">
        <div className={`h-1/4 `}>
          <div className="relative top-12 flex flex-col items-center gap-2">
            <div className="h-24 w-24 animate-pulse rounded-full bg-gray-300"></div>
            <h2 className="h-6 w-3/5 text-3xl animate-pulse rounded-full bg-gray-300"></h2>
            <p className="h-24 w-5/6 text-center animate-pulse rounded-sm bg-gray-300"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
