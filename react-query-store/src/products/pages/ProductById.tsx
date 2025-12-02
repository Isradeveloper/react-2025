import { useEffect } from "react";
import { ProductCard, useProduct } from "..";
import { useParams } from "react-router-dom";

export const ProductById = () => {
  const { id } = useParams();

  const { productQuery } = useProduct({ id: +id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>ProductById</h1>
      {productQuery.isLoading && <div>Cargando...</div>}
      {productQuery.isError && <div>Error</div>}
      {productQuery.data && (
        <ProductCard
          product={productQuery.data}
          showFullDescription={true}
        />
      )}
    </div>
  );
};
