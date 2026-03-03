import { lazy } from 'react';
import ShopLayout from '../layouts/ShopLayout';

type Props = {
  path: string;
};

const HomePage = lazy(() => import('../pages/home/HomePage'));
const ProductPage = lazy(() => import('../pages/product/ProductPage'));
const GenderPage = lazy(() => import('../pages/gender/GenderPage'));

export const shopRoutes = ({ path }: Props) => [
  {
    path,
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product/:idSlug',
        element: <ProductPage />,
      },
      {
        path: 'gender/:gender',
        element: <GenderPage />,
      },
    ],
  },
];
