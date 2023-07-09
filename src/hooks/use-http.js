import { useCallback, useState } from "react";
import axios from "axios";

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fireRequest = useCallback(
    async ({ method, isTest = false, testUrl, endpoint, payload }) => {
      setIsLoading(true);
      const apiKey = process.env.REACT_APP_API_KEY;
      try {
        const response = await axios({
          method: method ? method : "GET",
          url: isTest ? testUrl : `${process.env.REACT_APP_API_URL + endpoint}`,
          data: payload ? payload : null,
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
    },
    []
  );

  return {
    fireRequest,
    error,
    isLoading,
  };
};

export default useHttp;
