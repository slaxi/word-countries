import { useQuery } from '@tanstack/react-query';
import { dataFetch } from '../utils/dataFetch';

export const useFetchData = (queryKey: string, queryString: string | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey, queryString],
    queryFn: () => dataFetch(queryString),
    enabled: !!queryString
  });

  return { data, isLoading, error };
};
