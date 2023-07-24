import { useQuery } from "@tanstack/react-query";
import unsplashApi from "../api/unsplashApi";

export const useSearchImages = (searchTerm) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const { data } = await unsplashApi.get(
        `/search/photos?query=${searchTerm}`
      );
      return data;
    },
  });

  return { isLoading, isError, data };
};
