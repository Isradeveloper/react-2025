import { useQueryClient } from "@tanstack/react-query";
import { ProductsActions } from "..";

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const prefetchProduct = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ["products", { id }],
      queryFn: () => ProductsActions.getProductById(id),
    });
  };

  return { prefetchProduct };
};
