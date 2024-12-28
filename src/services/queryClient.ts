import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 5000,
      staleTime: 1000 * 60, // 1 minute
      retry: 5,
    },
  },
});
