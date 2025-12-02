import { ProductList, useProducts } from "..";

export const MensPage = () => {
  const { productsQuery } = useProducts({ filterKey: "men's clothing" });

  const products = productsQuery.data ?? [];

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      <ProductList products={products} />
    </div>
  );
};
