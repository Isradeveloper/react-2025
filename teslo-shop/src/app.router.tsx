import { createBrowserRouter, Navigate } from 'react-router';
import { shopRoutes } from './modules/shop/ui/routes/shop.router';
import { authRoutes } from './modules/auth/ui/routes/auth.router';
import { adminRoutes } from './modules/admin/ui/routes/admin.router';

export const appRouter = createBrowserRouter([
  ...shopRoutes({ path: '/' }),
  ...authRoutes({ path: '/auth' }),
  ...adminRoutes({ path: '/admin' }),
  {
    path: '*',
    element: (
      <Navigate
        to="/"
        replace
      />
    ),
  },
]);
