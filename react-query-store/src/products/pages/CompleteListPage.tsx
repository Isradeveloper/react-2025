import { ProductList, useProducts } from "..";

export const CompleteListPage = () => {
  const { productsQuery } = useProducts({ filterKey: "" });
  const products = productsQuery.data ?? [];
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {productsQuery.isLoading && <div>Cargando...</div>}
      {productsQuery.isError && <div>Error</div>}
      {<ProductList products={products} />}
    </div>
  );
};
