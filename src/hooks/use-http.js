import { useCallback, useState } from "react";
import axios from "axios";

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fireRequest = useCallback(async (config) => {
    setIsLoading(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
      const response = await axios({
        method: config.method ? config.method : "GET",
        url: `${process.env.REACT_APP_API_URL + config.endpoint}`,
        // url: `${process.env.REACT_APP_TEST_API_URL}`,
        data: config.payload ? config.payload : null,
        headers: {
          "x-api-key": apiKey,
        },
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
