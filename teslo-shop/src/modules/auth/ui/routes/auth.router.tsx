import { lazy } from 'react';
import { Navigate } from 'react-router';
import AuthLayout from '../layouts/AuthLayout';

type Props = {
  path: string;
};

const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const RegisterPage = lazy(() => import('../pages/register/RegisterPage'));

export const authRoutes = ({ path }: Props) => [
  {
    path,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to={`${path}/login`}
            replace
          />
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
];
