import { HomePage } from '@/modules/heroes/pages/home/HomePage';
import { createBrowserRouter } from 'react-router';
import { HeroesLayout } from '@/modules/heroes/layouts/HeroesLayout';
import { AdminLayout } from '@/modules/admin/layouts/AdminLayout';
import { lazy } from 'react';

const SearchPage = lazy(
  () => import('@/modules/heroes/pages/search/SearchPage')
);

const AdminPage = lazy(() => import('@/modules/admin/pages/AdminPage'));

const HeroPage = lazy(() => import('@/modules/heroes/pages/hero/HeroPage'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'hero/:slug',
        element: <HeroPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
