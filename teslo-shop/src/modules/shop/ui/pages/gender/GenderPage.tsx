import { CustomJumbotron } from '../../components/CustomJumbotron';
import { CustomPagination } from '@/core/ui/components/CustomPagination';
import { ProductsGrid } from '../../components/ProductsGrid';
import { products } from '@/mocks/products.mock';
import { useParams } from 'react-router';

const GenderPage = () => {
  const { gender } = useParams();

  const getGenderLabel = () => {
    switch (gender) {
      case 'men':
        return 'Hombres';
      case 'women':
        return 'Mujeres';
      case 'kids':
        return 'Niños';
      default:
        return 'Todos';
    }
  };

  return (
    <div className="grid h-full grid-rows-[1fr_auto]">
      <CustomJumbotron
        title={`Productos para ${getGenderLabel()}`}
        description={`Descubre la mejor ropa para ${getGenderLabel()}. Calidad premium para un estilo atemporal.`}
      />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={10} />
    </div>
  );
};

export default GenderPage;
