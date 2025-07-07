import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

interface queryProps {
  queryKeyName: string;
  url: string;
}

const useToGetPublicData = <T>({ queryKeyName, url }: queryProps) => {
  const axiosInstance = useAxios();
  const { data, refetch, isError, error, isLoading } = useQuery<T>({
    queryKey: [queryKeyName],
    queryFn: async (): Promise<T> => {
      const res = await axiosInstance.get(url);
      return res.data;
    },
  });
  return { data, refetch, isError, error, isLoading };
};

export default useToGetPublicData;