import { Product, productsApi } from "..";

interface GetProductsOptions {
  filterKey?: string;
}

export const getProducts = async ({ filterKey }: GetProductsOptions) => {
  const urlParams = new URLSearchParams();

  if (filterKey && filterKey !== "") {
    urlParams.append("category", filterKey);
  }

  const { data } = await productsApi.get<Product[]>("/products", {
    params: urlParams,
  });
  return data;
};

export const getProductById = async (id: number) => {
  const { data } = await productsApi.get<Product>(`/products/${id}`);
  return data;
};
