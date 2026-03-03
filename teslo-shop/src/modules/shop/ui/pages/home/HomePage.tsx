import { CustomJumbotron } from '../../components/CustomJumbotron';
import { CustomPagination } from '@/core/ui/components/CustomPagination';
import { ProductsGrid } from '../../components/ProductsGrid';
import { products } from '@/mocks/products.mock';

const HomePage = () => {
  return (
    <div className="grid h-full grid-rows-[1fr_auto]">
      <CustomJumbotron
        title="Estilo Tesla"
        description="Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal."
      />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={10} />
    </div>
  );
};

export default HomePage;
