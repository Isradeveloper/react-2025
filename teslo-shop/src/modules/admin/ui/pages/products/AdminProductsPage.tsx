import { AdminTitle } from '@/modules/admin/ui/components/AdminTitle';
import { CustomPagination } from '@/core/ui/components/CustomPagination';
import { Button } from '@/core/ui/shadcn/components/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/core/ui/shadcn/components/table';
import { PlusIcon, Edit3 } from 'lucide-react';
import { Link } from 'react-router';

// 1. Definición de columnas para facilitar cambios futuros
const COLUMNS = [
  'ID',
  'Imagen',
  'Nombre',
  'Precio',
  'Categoría',
  'Inventario',
  'Tallas',
  'Acciones',
];

const AdminProductsPage = () => {
  // Nota: En un escenario real, esto vendría de un Custom Hook (ej. useProducts)
  const products = [
    {
      id: '1',
      name: 'Producto 1',
      price: 250,
      category: 'Categoría 1',
      stock: 100,
      sizes: ['XS', 'S', 'L'],
      image: 'https://placehold.co/250x250',
      slug: 't-shirt-teslo',
    },
    // Más productos...
  ];

  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <AdminTitle
          title="Productos"
          subtitle="Aquí puedes ver y administrar tus productos"
        />
        <Button asChild>
          <Link to="/admin/products/new">
            <PlusIcon className="mr-2 h-4 w-4" />
            Nuevo producto
          </Link>
        </Button>
      </header>

      <section className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden mb-10">
        <Table>
          <TableHeader>
            <TableRow>
              {COLUMNS.map((col) => (
                <TableHead
                  key={col}
                  className="text-center font-semibold">
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-bold text-center">
                  {product.id}
                </TableCell>

                <TableCell className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                </TableCell>

                <TableCell className="text-center font-medium">
                  {product.name}
                </TableCell>

                <TableCell className="text-center">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(product.price)}
                </TableCell>

                <TableCell className="text-center text-gray-600">
                  {product.category}
                </TableCell>

                <TableCell className="text-center font-mono">
                  {product.stock} unidades
                </TableCell>

                <TableCell className="text-center">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {product.sizes.join(', ')}
                  </span>
                </TableCell>

                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild>
                    <Link
                      to={`/admin/products/${product.slug}`}
                      className="flex items-center gap-1 text-blue-500 transition-colors duration-300 bg-blue-50 hover:bg-blue-200 rounded-md p-2">
                      <Edit3 size={16} />
                      Editar
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <CustomPagination totalPages={10} />
    </>
  );
};

export default AdminProductsPage;
