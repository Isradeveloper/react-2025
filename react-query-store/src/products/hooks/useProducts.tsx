import { useQuery } from "@tanstack/react-query";
import { ProductsActions } from "..";

interface UseProductsOptions {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: UseProductsOptions) => {
  const productsQuery = useQuery({
    queryKey: ["products", { filterKey }],
    queryFn: () => ProductsActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return { productsQuery };
};
