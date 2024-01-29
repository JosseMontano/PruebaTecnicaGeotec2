import { useNavigate } from "react-router-dom";
const UseRoute = () => {
  const navigate = useNavigate();

  const handleRedirect = (url: string) => {
    navigate(url);
  };

  return {handleRedirect};
};

export default UseRoute;
