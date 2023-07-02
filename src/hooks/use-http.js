import { useCallback, useState } from "react";
import axios from "axios";

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fireRequest = useCallback(async (config) => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: config.method ? config.method : "GET",
        url: config.endpoint,
        data: config.payload ? config.payload : null,
        headers: config.headers ? config.headers : null,
      });
      return response;
    } catch (error) {
      setError({
        isError: true,
        serverError: error,
        status: error.response?.status,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    fireRequest,
    error,
    isLoading,
  };
};

export default useHttp;
