import { lazy } from 'react';
import { Navigate } from 'react-router';

type Props = {
  path: string;
};

const AdminLayout = lazy(() => import('../layouts/AdminLayout'));
const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
const ProductsPage = lazy(() => import('../pages/products/AdminProductsPage'));

export const adminRoutes = ({ path }: Props) => [
  {
    path,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to={`${path}/dashboard`}
            replace
          />
        ),
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
    ],
  },
];
