import { useQuery } from "@tanstack/react-query";
import { ProductsActions } from "..";

interface UseProductOptions {
  id: number;
}

export const useProduct = ({ id }: UseProductOptions) => {
  const productQuery = useQuery({
    queryKey: ["products", { id }],
    queryFn: () => ProductsActions.getProductById(id),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return { productQuery };
};
