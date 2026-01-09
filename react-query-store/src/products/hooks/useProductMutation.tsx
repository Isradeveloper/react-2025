import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, ProductsActions } from "..";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ProductsActions.createProduct,

    onMutate: (product) => {
      console.log("Mutando - Optimistic update");

      // Optimistic product

      const optimisticProduct = { id: Math.random(), ...product };

      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: product.category }],
        (oldData: Product[] | undefined) => {
          if (!oldData) return [];
          return [...oldData, optimisticProduct];
        },
      );

      return { optimisticProduct };
    },

    onSuccess: (product, _variables, context) => {
      // queryClient.invalidateQueries({
      //   queryKey: ["products", { filterKey: data.category }],
      // });
      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: product.category }],
        (oldData: Product[] | undefined) => {
          if (!oldData) return [];

          return oldData.map((p) =>
            p.id === context?.optimisticProduct.id ? product : p,
          );
        },
      );
      alert("Producto creado correctamente");
    },

    onError: (error, product, context) => {
      queryClient.removeQueries({
        queryKey: ["products", context?.optimisticProduct.id],
      });

      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: product.category }],
        (oldData: Product[] | undefined) => {
          if (!oldData) return [];
          return oldData.filter((p) => p.id !== context?.optimisticProduct.id);
        },
      );

      return { error };
    },

    onSettled: () => {
      console.log("On settled");
    },
  });

  return { mutation };
};
