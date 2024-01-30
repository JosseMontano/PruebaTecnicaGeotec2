
interface Params {
  handleRedirect: (url: string) => void;
  url: string;
  text: string;
}

const Url = ({ handleRedirect, url, text }: Params) => {
  return (
    <a
      onClick={() => handleRedirect(url)}
      className="text-whit cursor-pointer uppercase font-semibold text-customPrimary  rounded-md p-1 hover:bg-customPrimary hover:text-customSecondary"
      role="url"
    >
      {text}
    </a>
  );
};

export default Url;
