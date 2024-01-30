import { useEffect, useState } from "react";
import { getDataUtility } from "../utilities/getData";
import { Spinner } from "@material-tailwind/react";

interface Params {
  url: string;
}

const UseFetch = <DataType,>({ url }: Params) => {
  const [data, setdata] = useState({} as DataType);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(0);

  const handleRefresh = async () => {
    await handleGetData();
  };

  const handleGetData = async () => {
    setLoading(true);
    const { val, error, status } = await getDataUtility<DataType>(url);
    setdata(val);
    setError(error);
    setStatus(status);
    setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, [url]);

  const handleLoading = () => {
    if (loading) return <Spinner className="h-16 w-16 text-gray-900/50" />;
  };

  return {
    data,
    error,
    status,
    loading,
    handleLoading,
    handleGetData,
    handleRefresh,
  };
};

export default UseFetch;
